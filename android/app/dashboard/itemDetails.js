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

const onThumbsDownButtonClick = () => {
  Alert.alert('Button has been pressed!');
};
export default class ItemDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}`
  });
  constructor(props) {
    super(props);

    //this.item = this.props.item;
    this.category = props.navigation.state.params;
    this.voting = false;

    this.styles = StyleSheet.create({
      categoryText: {
        backgroundColor: '#ffab17',
        color: '#000000',
        fontSize: 24,
      //  textAlign: 'center'
      },
      detailText: {
        //backgroundColor: '#999999',
        color: '#000000',
        padding:2,
        fontSize: 14,
        //textAlign: 'center'
      },
      detailView: {
        flex: 1,
        margin: 10
      },
      nameText: {
        color: '#000000',
        fontSize: 40,
      //  textAlign: 'center',
        height: 50
      },
      picture: {
        height: 150,
        width: 150,
        justifyContent: 'center',
        //margin:5,
        marginLeft:15,
        marginTop:10,
        marginBottom:10
      },
      thumbsDown: {
        height: 128,
        margin: 10,
        width: 128
      },
      thumbsUp: {
        height: 128,
        margin:10,
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

  onThumbsDownButtonClick1() {
    Alert.alert('Thumbs down!');
  }

  render() {
    /*const instructionList = this.instructions.map((instruction, index) =>
      <Text style={(index + 1) % 2 == 0 ? this.styles.evenRow : this.styles.oddRow}>{index+1}. {instruction}</Text>
    );*/

    return (
      <View style={this.styles.view}>
        <Image
          source={{uri: this.category.imageUrl}}
        //source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}

          style={this.styles.picture}
        />
        <View style={this.styles.detailView}>
          <Text style={this.styles.detailText}>PortionSize -> {this.category.attributes.portionSize}</Text>
          <Text style={this.styles.detailText}>Calories -> {this.category.attributes.calories}</Text>
          <Text style={this.styles.detailText}>Fat -> {this.category.attributes.fat}</Text>
          <Text style={this.styles.detailText}>Carbs -> {this.category.attributes.carbs}</Text>
          <Text style={this.styles.detailText}>Protein -> {this.category.attributes.protein}</Text>
          <Text style={this.styles.detailText}>Sugar -> {this.category.attributes.sugar}</Text>
          <Text style={this.styles.detailText}>Sodium -> {this.category.attributes.sodium}</Text>
          <Text style={this.styles.detailText}>Fiber -> {this.category.attributes.fiber}</Text>
        </View>
        <View style={this.styles.thumbsView}>
          <Image
          onButtonClick={() => {
                    this.onThumbsUpButtonClick();
                  }}
           source={require('./thumbsup_128.png')}
            style={this.styles.thumbsUp}
          />
          <Image
            onPress={this.onThumbsDownButtonClick}
            source={require('./thumbsdown_128.png')}
            style={this.styles.thumbsDown}
          />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('ItemDetails', () => USnack);
