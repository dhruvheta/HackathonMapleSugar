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
} from 'react-native';

/*export default React.AwesomeProject({


});*/
export default class AwesomeProject extends Component {
  constructor() {
    super();
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
      });
      //this._pressData: ({}: {[key: number]: boolean})
   //this._pressRow: function(rowID: number) {
    //  Alert.alert('Button has been pressed!');
  //}
}

  render() {
    return (
      <View style={{backgroundColor: '#F6F6F6',justifyContent: 'center'}}>
      <Text style={{fontSize:30, padding:10,fontWeight:'bold'}}>Choose a Poll</Text>
      <View style={{padding:10}}></View>
      //<TouchableHighlight //onPress={() => {
      //  onPress={this.onButtonPress}
    //  >
      <ListView
        dataSource={this.state.dataSource}
        /*renderRow={(rowData) => {
          return (
            <TouchableOpacity onPress={() => {
                                    this._onPress;
                                }}>
              <View name={rowData} style={this.styles.row} >
                <Text style={{fontSize:35}}>{rowData}</Text>
              </View>
            </TouchableOpacity>
          );
        }}*/
        //renderRow={{rowData}}//{this._renderRow}
        renderRow={(rowData) => <View name={rowData} style={this.styles.row} >
        <Text style={{fontSize:35}}>{rowData}</Text></View>}
      />
    //  </TouchableHighlight>
      </View>
    );
  }

  _pressData(key) {

  }
  _onPress(rowID) {
    this._pressData[rowID] = !this._pressData[rowID];
    this.setState({dataSource: this.state.dataSource.cloneWithRows(
      this._genRows(this._pressData)
    )});
 }

   _genRows(pressData) {
     var dataBlob = [];
     for (var ii = 0; ii < 100; ii++) {
       var pressedText = pressData[ii] ? ' (pressed)' : '';
       dataBlob.push('Row ' + ii + pressedText);
     }
     return dataBlob;
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
