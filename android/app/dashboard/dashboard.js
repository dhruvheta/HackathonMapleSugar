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
   //this._pressRow: function(rowID: number) {
    //  Alert.alert('Button has been pressed!');
  //}
}

//
  render() {
    return (

      <View style={{backgroundColor: '#F6F6F6',justifyContent: 'center'}}>
      <Text style={{fontSize:30, padding:10,fontWeight:'bold'}}>Choose a Poll</Text>
      <View style={{padding:10}}></View>
      <TouchableHighlight //onPress={() => {
        //this._pressRow(rowID);
        //highlightRow(sectionID, rowID);
        onPress={this.onButtonPress}
          //title="Press Me"
          //accessibilityLabel="See an informative alert"
      >
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <View name={rowData} style={this.styles.row} >
        <Text style={{fontSize:35}}>{rowData}</Text></View>}
      />
      </TouchableHighlight>
      </View>

    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
