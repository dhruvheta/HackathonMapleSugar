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
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}`
  });
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
          //justifyContent: 'center',
          //padding: 30,
          flex:1,
          borderBottomColor: '#cccccc',
          borderBottomWidth:3,
          //paddingLeft:5,
          paddingTop:10,
          paddingBottom:10,
        },
        thumb: {
          width: 64,
          height: 64,
        },
        item:{
          flexDirection: 'row',
          fontSize:20,
          color: '#000000',
          //width: 175,
          paddingLeft:10,
          //justifyContent: 'center',
          backgroundColor: '#F6F6F6',
        }
      });
}

  render() {
      _navigator = this.props.navigator;
    return (
      <View>

      <View style={{backgroundColor: '#F6F6F6'}}>

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
                style={{width: 70, height: 70,paddingRight:10,paddingLeft:15,marginLeft:10}}
                source={{uri: rowData.imageUrl}}
              />
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

  _onPress(rowData) {
      this.props.navigation.navigate('ItemDetails',rowData)
  //  Alert.alert(rowID);
 }
}

AppRegistry.registerComponent('ItemList', () => USnack);
