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


export default class AwesomeProject extends Component {
  constructor() {
    super();

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows(['cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6','cat7','cat8']),
    };
    this.styles = StyleSheet.create({
        row: {
          flexDirection: 'row',
          justifyContent: 'center',
          //padding: 30,
        //  height: 33,
        //  borderBottomColor: '#CCCCCC',
          //borderBottomWidth:10
          //backgroundColor: '#F6F6F6',
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
    //Alert.alert(rowID);
    this.props.navigation.navigate('ItemList')
  }

}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
