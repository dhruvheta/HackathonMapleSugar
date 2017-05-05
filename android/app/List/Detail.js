import React, {Component} from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  Alert,
  ToolbarAndroid,
  Button,
  AsyncStorage
} from 'react-native';

export default class Detail extends Component {
  static navigationOptions = {
    title: 'Categories',
    headerRight: <Button title="Info"  onPress={this.onHelpButtonPress}/>
  };

  onHelpButtonPress = () => {
    this.props.navigation.navigate('Instructions');
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.pollId = props.navigation.state.params;

    this.state = {
      dataSource: ds.cloneWithRows(['cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6','cat7','cat8']),
    };
    this.styles = StyleSheet.create({
        resultsButton: {
          height: 100
        },
        row: {
          flexDirection: 'row',
          justifyContent: 'center',
        },
        list: {
            flexDirection: 'row',
            flexWrap: 'wrap'
        },
        item: {
            backgroundColor: 'white',
            margin: 2,
            padding: 45,
            fontSize:20,
            color: '#000000',
            width: 175,
            justifyContent: 'center',
        },
      });
}

  componentDidMount() {
    const {params} = this.props.navigation.state;
    this.getPollsList();
  }

  async getPollsList() {
    try {
      const storedUser = await AsyncStorage.getItem('@DataStore:user');
      this.state.user = JSON.parse(storedUser);
    } catch (error) {
      // Error saving data
    }
    data = { token: this.state.user.idToken}
    url = `https://sleepy-sierra-94063.herokuapp.com/poll/${this.pollId}?token=${data.token}`
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.poll = responseJson.poll;
        this.handlePollsList(responseJson.poll.categories);
      })
      .catch((error) => {
        console.error(error);
      });
   }

   handlePollsList(items) {
     this.setState({
       dataSource: this.state.dataSource.cloneWithRows(items),
       loaded: true
     });
   }

  onResultsButtonPress() {
    if(this.poll) {
      this.props.navigation.navigate('Results', this.poll);
    }
  }

  render() {
    return (
      <View>
        <Button title='Results' style={this.styles.resultsButton} onPress={() => {
                  this.onResultsButtonPress();
                }}></Button>
        <ListView contentContainerStyle={this.styles.list}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => {
            return (
              <TouchableHighlight  onPress={() => {
                        this._onPress(rowData);
                      }}>
                <View style={this.styles.row} >
                  <Text style={this.styles.item}>{rowData.name}</Text>
                </View>
              </TouchableHighlight>
            );
          }}
        />
      </View>
    );
  }

  _onPress(rowData) {
    this.props.navigation.navigate('ItemList', rowData);
  }

}

AppRegistry.registerComponent('Detail', () => USnack);
