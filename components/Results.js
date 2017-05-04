import React, {Component} from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  Image,
  ListView,
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Results extends Component {
  constructor() {
    super();

    this.results = this.props.results;

    this.styles = StyleSheet.create({
      resultText: {
        color: '#000000',
        fontSize: 14,
        textAlign: 'left'
      },
      view: {
        backgroundColor: '#F6F6F6',
        flex: 1,
        justifyContent: 'center',
        margin: '50 20 20 20'
      }
    });
  }

  render() {
    const instructionList = this.results.map((result, index) =>
      <Text style={this.styles.resultText}>{result.name}: {result.options.upvoteCount - result.options.downvoteCount}</Text>
    );

    return (
      <View style={this.styles.view}>
        {instructionList}
      </View>
    );
  }
}

AppRegistry.registerComponent('Results', () => USnack);
