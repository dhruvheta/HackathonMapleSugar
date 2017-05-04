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

export default class ItemDetails extends Component {
  constructor() {
    super();

    this.item = this.props.item;
    this.category = this.props.category;
    this.voting = false;

    this.styles = StyleSheet.create({
      categoryText: {
        backgroundColor: '#ffab17',
        color: '#000000',
        fontSize: 24,
        textAlign: 'center'
      },
      detailText: {
        backgroundColor: '#999999',
        color: '#FFFFFF',
        fontSize: 14,
        textAlign: 'center'
      },
      detailView: {
        flex: 1,
        margin: 10
      },
      nameText: {
        color: '#000000',
        fontSize: 40,
        textAlign: 'center',
        height: 50
      },
      picture: {
        height: 200,
        width: 200
      },
      thumbsDown: {
        height: 128,
        margin: 10,
        width: 128
      },
      thumbsUp: {
        height: 128,
        margin 10,
        width: 128
      },
      thumbsView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
      },
      view: {
        backgroundColor: '#F6F6F6',
        flex: 1,
        justifyContent: 'center',
      }
    });
  }

  onThumbsUpButtonClick() {
    Alert.alert('Thumbs up!');
  }

  onThumbsDownButtonClick() {
    Alert.alert('Thumbs down!');
  }

  render() {
    const instructionList = this.instructions.map((instruction, index) =>
      <Text style={(index + 1) % 2 == 0 ? this.styles.evenRow : this.styles.oddRow}>{index+1}. {instruction}</Text>
    );

    return (
      <View style={this.styles.view}>
        <Image
          source={require({this.item.imageUrl})}
          style={this.styles.picture}
        />
        <View style={this.styles.detailView}>
          <Text style={this.styles.nameText}>{this.item.name}</Text>
          <Text style={this.styles.categoryText}>{this.category.name}</Text>
          <Text style={this.styles.detailText}>{this.item.attributes.portionSize}</Text>
          <Text style={this.styles.detailText}>{this.item.attributes.calories}</Text>
          <Text style={this.styles.detailText}>{this.item.attributes.fat}</Text>
          <Text style={this.styles.detailText}>{this.item.attributes.carbs}</Text>
          <Text style={this.styles.detailText}>{this.item.attributes.protein}</Text>
          <Text style={this.styles.detailText}>{this.item.attributes.sugar}</Text>
          <Text style={this.styles.detailText}>{this.item.attributes.sodium}</Text>
          <Text style={this.styles.detailText}>{this.item.attributes.fiber}</Text>
        </View>
        <View style={this.styles.thumbsView}>
          <Image
            onButtonClick={this.onThumbsUpButtonClick}
            source={require('./resources/images/thumbsup_128')}
            style={this.styles.thumbsUp}
          />
          <Image
            onButtonClick={this.onThumbsDownButtonClick}
            source={require('./resources/images/thumbsdown_128')}
            style={this.styles.thumbsDown}
          />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('ItemDetails', () => USnack);
