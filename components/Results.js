import React, {Component} from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  Image,
  ListView,
  TouchableHighlight,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

const concat = (x,y) => x.concat(y);
const flatMap = (f,xs) => xs.map(f).reduce(concat, []);

Array.prototype.flatMap = function(f) {
  return flatMap(f,this);
};

export default class Results extends Component {
  static navigationOptions = {
    title: 'Results',
    //headerRight: <Button title="Info"  onPress={this.onHelpButtonPress}/>
  };

  constructor(props) {
    super(props);

    this.results = props.navigation.state.params;

    this.styles = StyleSheet.create({
      resultText: {
        color: '#000000',
        fontSize: 14,
        margin: 5,
        textAlign: 'center'
      },
      view: {
        backgroundColor: '#F6F6F6',
        flex: 1
      }
    });
  }

  sortByKey(array, key) {
    return array.sort((a, b) => {
        var x = a[key]; var y = b[key];
        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
    });
  }

  render() {
    resultList = [];
    items = [];

    if(this.results.categories) {
      items = this.results.categories.flatMap((category) =>
        {return category.options;}
      );

      items.forEach(function(element, index, array) {
        element.totalVote = element.upvoteCount - element.downvoteCount;
      });

      sortedItems = this.sortByKey(items, 'totalVote');

      resultList = items.map((result, index) =>
        <Text key={result.id} style={this.styles.resultText}>{result.name}: {result.totalVote}</Text>
      );
    }

    return (
      <ScrollView>
        {resultList}
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent('Results', () => USnack);
