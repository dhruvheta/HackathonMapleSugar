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
export default class AwesomeProject extends Component {
  constructor() {
    super();
  //  var UIExplorerPage = require('UIExplorerPage');
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.onButtonPress = () => {
      Alert.alert('List item has been pressed!' + this.props.name);
    };
    this.state = {
      dataSource: ds.cloneWithRows(['Item1', 'Item2','Item3','Item4','Item5','Item6','Item7','Item8','Item9','Item10','Item11','Item12','Item13','Item14','Item15','Item16']),
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
        }
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
              <Image
                style={{width: 70, height: 70, padding:5}}
                source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
              />
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


  _onPress(rowID) {
    Alert.alert(rowID);
    //Alert.alert('List item has been pressed!' );
    //this.props.navigation.navigate('Detail')
  /*  this._pressData[rowID] = !this._pressData[rowID];
    this.setState({dataSource: this.state.dataSource.cloneWithRows(
      this._genRows(this._pressData)
    )});*/
 }


}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
