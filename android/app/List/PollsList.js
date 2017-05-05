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
//import EStyleSheet from 'react-native-extended-stylesheet';
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
        //  backgroundColor: 'white',
        //  padding: 45,
          //width:180,
          backgroundColor: '#F6F6F6',
          borderBottomColor: '#cccccc',
          borderBottomWidth:3,
          //paddingRight:10,
          paddingLeft:5,
          paddingTop:25,
          paddingBottom:25,
          //backgroundColor: '#F6F6F6',
        },
        item:{
          fontSize:22,
          //padding: 35,
          color: '#000000',
          width: 175,
          justifyContent: 'center',
          backgroundColor: '#F6F6F6',
          //padding: 25,
          //width:150
        }
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


        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => {
            return (
              <TouchableHighlight  onPress={() => {
                        this._onPress(rowData.id);
                      }}>
                <View name={rowData} style={this.styles.row} >
                  <Text style={this.styles.item}>{rowData.name}</Text>
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
    this.props.navigation.navigate('Detail',rowID)

 }

}

AppRegistry.registerComponent('PollsList', () => USnack);
