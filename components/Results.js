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

const concat = (x,y) => x.concat(y)
const flatMap = (f,xs) => xs.map(f).reduce(concat, [])

Array.prototype.flatMap = function(f) {
  return flatMap(f,this);
};

export default class Results extends Component {
  constructor(props) {
    super(props);

    this.results = props.navigation.state.params;

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
      }
    });
  }

  render() {
    const items = this.results.categories.flatMap((category) =>
      {return category.options;}
    );
    const resultList = items.map((result, index) =>
      <Text style={this.styles.resultText}>{result.name}: {result.upvoteCount - result.downvoteCount}</Text>
    );

    return (
      <View style={this.styles.view}>
        {resultList}
      </View>
    );
  }
}

AppRegistry.registerComponent('Results', () => USnack);
