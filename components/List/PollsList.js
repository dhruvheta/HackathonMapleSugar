import React, {
  Component
} from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';

export default class PollList extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
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
        borderBottomWidth: 10
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

    this.renderRow = this.renderRow.bind(this)
    this._onPress = this._onPress.bind(this)
  }

  render() {
    return ( 
      <View style={{ backgroundColor: '#F6F6F6', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30, padding: 10, fontWeight: 'bold' }}>
          Choose a Poll
        </Text> 
        <View style={{padding: 10}} />
        <ListView dataSource={this.state.dataSource} renderRow={this.renderRow} />
      </View>
    );
  }

  renderRow(rowData, sectionID, rowID, highlightRow) {
    return (
      <TouchableOpacity onPress={() => this._onPress(rowID)}>
        <View name={rowData} style={this.styles.row} >
          <Text style={{fontSize:35}}>{rowData}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  _onPress(rowID) {
    alert("Clicked on row " + rowID)
  }
}