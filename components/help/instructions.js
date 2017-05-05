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

export default class Instructions extends Component {
  constructor() {
    super();

    this.instructions = [
      'Pick a poll.',
      'Select a category of snack.',
      'Upvote or downvote as many times you are allowed to.',
      'When you are done, submit your vote and see the results.'
    ];

    this.styles = StyleSheet.create({
      evenRow: {
        backgroundColor: '#999999',
        color: '#FFFFFF',
        fontSize: 24,
        textAlign: 'center'
      },
      instructionView: {
        flex: 1,
        margin: 10
      },
      oddRow: {
        backgroundColor: '#ffab17',
        color: '#000000',
        fontSize: 24,
        textAlign: 'center'
      },
      pageTitle: {
        color: '#000000',
        fontSize: 40,
        textAlign: 'center',
        height: 50
      },
      view: {
        backgroundColor: '#F6F6F6',
        flex: 1,
        justifyContent: 'center',
      }
    });
  }

  render() {
    const instructionList = this.instructions.map((instruction, index) =>
      <Text style={(index + 1) % 2 == 0 ? this.styles.evenRow : this.styles.oddRow}>{index+1}. {instruction}</Text>
    );

    return (
      <View style={this.styles.view}>
        <View style={this.styles.instructionView}>
          {instructionList}
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('Instructions', () => USnack);
