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
} from 'react-native';

//import {PollsListData} from './PollsListData'
var test = [];
export default class PollsList extends Component {
  constructor() {
    super();
    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.onButtonPress = () => {
      Alert.alert('List item has been pressed!' + this.props.name);
    };
    this.state = {
      //dataSource: ds.cloneWithRows(['Snacks', 'CAT Equipments']),//['Snacks', 'CAT Equipments']
    dataSource: dataSource.cloneWithRows(['Snacks', 'CAT Equipments']    ),
      //dataSource: dataSource.cloneWithRows(test),
      isLoading: true
    };
    this.styles = StyleSheet.create({
        row: {
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 30,
          borderBottomColor: '#000000',
          borderBottomWidth:10
          //backgroundColor: '#F6F6F6',
        },
        thumb: {
          width: 64,
          height: 64,
        },
        text: {
          flex: 1,
        fontSize: 19,
        },
        toolbar: {
          backgroundColor: '#e9eaed',
          height: 56,
        },
      });
       this.getPollsList();
   }
   getPollsList() {
     return fetch('https://sleepy-sierra-94063.herokuapp.com/polls')
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
      }

    render() {
      _navigator = this.props.navigator;
      return (
        <View>

        <View style={{backgroundColor: '#F6F6F6',justifyContent: 'center'}}>

        <View style={{padding:10}}></View>

        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => {
            return (
              <TouchableHighlight  onPress={() => {
                        this._onPress(rowData);
                      }}>
                <View name={rowData} style={this.styles.row} >
                  <Text style={{fontSize:35}}>{rowData.name}</Text>
                </View>
              </TouchableHighlight>
            );
          }}

        />
        </View>
        </View>
      );

  }


  _onPress(rowID) {
    this.props.navigation.navigate('Detail')

 }

}

AppRegistry.registerComponent('PollsList', () => USnack);
