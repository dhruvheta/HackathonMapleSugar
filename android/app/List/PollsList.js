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

/*export default React.AwesomeProject({


});*/
export default class PollsList extends Component {
  constructor() {
    super();
  //  var UIExplorerPage = require('UIExplorerPage');
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.onButtonPress = () => {
      Alert.alert('List item has been pressed!' + this.props.name);
    };
    this.state = {
      dataSource: ds.cloneWithRows(['Snacks', 'CAT Equipments']),
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
      //this._pressData: ({}: {[key: number]: boolean})
   //this._pressRow: function(rowID: number) {
    //  Alert.alert('Button has been pressed!');
  //}
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
                <Text style={{fontSize:35}}>{rowData}</Text>
              </View>
            </TouchableHighlight>
          );
        }}

      />
  </View>
      </View>
    );
  }

/*  _pressData(key) {
    this._pressData = {};
  }*/
  _onPress(rowID) {
    //Alert.alert(rowID);
    //Alert.alert('List item has been pressed!' );
    this.props.navigation.navigate('Detail')
  /*  this._pressData[rowID] = !this._pressData[rowID];
    this.setState({dataSource: this.state.dataSource.cloneWithRows(
      this._genRows(this._pressData)
    )});*/
 }

/*  _genRows(pressData) {
     var dataBlob = [];
     for (var ii = 0; ii < 100; ii++) {
       var pressedText = pressData[ii] ? ' (pressed)' : '';
       dataBlob.push('Row ' + ii + pressedText);
     }
     return dataBlob;
  }*/
}

AppRegistry.registerComponent('PollsList', () => USnack);
