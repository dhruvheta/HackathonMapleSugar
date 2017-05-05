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
  Button
} from 'react-native';


export default class Detail extends Component {
  static navigationOptions = {
    title: 'Categories',
    headerRight: <Button title="Info" />,
  };
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    let id = props.navigation.state.params

    this.state = {
      dataSource: ds.cloneWithRows(['cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6','cat7','cat8']),
    };
    this.styles = StyleSheet.create({
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
    const {params} = this.props.navigation.state
    console.log(params)
  }

  /*getPollsList() {
    return fetch('https://sleepy-sierra-94063.herokuapp.com/poll')
      .then((response) => response.json())
      .then((responseJson) => {
        this.handlePollsList(responseJson.items);
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
   }*/

  render() {
    return (
      <View>


      <ListView contentContainerStyle={this.styles.list}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => {
          return (
            <TouchableHighlight  onPress={() => {
                      this._onPress(rowData);
                    }}>
              <View name={rowData} style={this.styles.row} >
                <Text style={this.styles.item}>{rowData}</Text>
              </View>
            </TouchableHighlight>
          );
        }}

      />


      </View>
    );
  }

  _onPress(rowID) {
    this.props.navigation.navigate('ItemList')
  }

}

AppRegistry.registerComponent('Detail', () => USnack);
