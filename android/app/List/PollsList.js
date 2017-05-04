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


export default class PollsList extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.onButtonPress = () => {
      Alert.alert('List item has been pressed!' + this.props.name);
    };

    this.state = {
      //dataSource: ds.cloneWithRows(['Snacks', 'CAT Equipments']),//['Snacks', 'CAT Equipments']
      dataSource: ds.cloneWithRows(['Snacks', 'CAT Equipments']    )
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

}

  render() {
      _navigator = this.props.navigator;
      list= this._getPollsList();
      console.log('NOOOOO results:::::');
      console.log(list);
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
  async _getPollsList() {
  /*return fetch('https://sleepy-sierra-94063.herokuapp.com/polls')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson.items); //Debug
      return responseJson.items;
    })
    .catch((error) => {
      console.error(error);
    });*/


    //async function getMoviesFromApi() {
   try {
     let response = await fetch('https://sleepy-sierra-94063.herokuapp.com/polls');
     let responseJson = await response.json();
     console.log('With results:::::');
     console.log(responseJson.items);
     return responseJson.items;
   } catch(error) {
     console.error(error);
   }
// }
 }

  _onPress(rowID) {
    this.props.navigation.navigate('Detail')

 }

}

AppRegistry.registerComponent('PollsList', () => USnack);
