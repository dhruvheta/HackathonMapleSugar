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


export default class ItemList extends Component {
  constructor(props) {
    super(props);

    this.pollCategory = this.props.navigation.state.params

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.onButtonPress = () => {
      Alert.alert('List item has been pressed!' + this.props.name);
    };
    this.state = {
      dataSource: ds.cloneWithRows(this.pollCategory.options),
    };
    this.styles = StyleSheet.create({
        row: {
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 30,
          borderBottomColor: '#000000',
          borderBottomWidth:10
        },
        thumb: {
          width: 64,
          height: 64,
        }
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
              <Image
                style={{width: 70, height: 70, padding:5}}
                source={{uri: rowData.imageUrl}}
              />
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
      this.props.navigation.navigate('ItemDetails')
  //  Alert.alert(rowID);
 }
}

AppRegistry.registerComponent('ItemList', () => USnack);
