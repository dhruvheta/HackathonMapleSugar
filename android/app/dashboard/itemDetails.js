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
  View,
  AsyncStorage,

} from 'react-native';

import querystring from 'querystring';
export default class ItemDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}`
  });
  constructor(props) {
    super(props);
    this.state = {
        user: null
      };
    //this.item = this.props.item;
    this.category = props.navigation.state.params;


    this.state = {
      category: this.category,
    };
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
      thumbsUpVoted: {
        height: 128,
        margin:10,
        width: 128,
        //backgroundColor: 'rgba(0,0,0,0.5)'
      },
      thumbsView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
      },
      view: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
      }
    });
  }

  async onThumbsUpButtonClick() {
    this.upvote = true;
    this.downvote = false;
    try {
      const storedUser = await AsyncStorage.getItem('@DataStore:user');
      this.state.user = JSON.parse(storedUser)
    } catch (error) {
      // Error saving data
    }
      console.log(this.category)
    data = {  optionId: this.category.id, upvote: this.upvote, downvote:this.downvote,token: this.state.user.idToken }
    let params = querystring.stringify(data);
    url = `https://sleepy-sierra-94063.herokuapp.com/poll/${this.category.pollId}/vote?${params}`

    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/x-www-form-urlencoded',
      },
      body: params
    })
    .then((response) => {
      return response.json()})
    .then((responseJson) => {
      console.log('done')
      console.log(responseJson)
      this.hasVoted = responseJson

      this.setState({
        category: responseJson.option,
      })
    });
}

  async onThumbsDownButtonClick() {
    this.upvote = false;
    this.downvote = true;
    console.log(this.category.upvoteCount);
    try {
      const storedUser = await AsyncStorage.getItem('@DataStore:user');
      this.state.user = JSON.parse(storedUser)
    } catch (error) {
      // Error saving data
    }
      console.log(this.category)
    data = {  optionId: this.category.id, upvote: this.upvote, downvote:this.downvote,token: this.state.user.idToken }
    let params = querystring.stringify(data);
    url = `https://sleepy-sierra-94063.herokuapp.com/poll/${this.category.pollId}/vote?${params}`

    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/x-www-form-urlencoded',
      },
      body: params
    })
    .then((response) => {
      return response.json()})
    .then((responseJson) => {
      console.log('done')
      console.log(responseJson)
      this.setState({
        category: responseJson.option,
      })
    });
  }

  render() {
    /*const instructionList = this.instructions.map((instruction, index) =>
      <Text style={(index + 1) % 2 == 0 ? this.styles.evenRow : this.styles.oddRow}>{index+1}. {instruction}</Text>
    );*/
 console.log(this.state.category)
    return (
      <View style={this.styles.view}>
        <Image
          source={{uri: this.state.category.imageUrl}}
        //source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}

          style={this.styles.picture}
        />
        <View style={this.styles.detailView}>
          <Text style={this.styles.detailText}>PortionSize -> {this.state.category.attributes.portionSize}</Text>
          <Text style={this.styles.detailText}>Calories -> {this.state.category.attributes.calories}</Text>
          <Text style={this.styles.detailText}>Fat -> {this.state.category.attributes.fat}</Text>
          <Text style={this.styles.detailText}>Carbs -> {this.state.category.attributes.carbs}</Text>
          <Text style={this.styles.detailText}>Protein -> {this.state.category.attributes.protein}</Text>
          <Text style={this.styles.detailText}>Sugar -> {this.state.category.attributes.sugar}</Text>
          <Text style={this.styles.detailText}>Sodium -> {this.state.category.attributes.sodium}</Text>
          <Text style={this.styles.detailText}>Fiber -> {this.state.category.attributes.fiber}</Text>
        </View>
        <View style={this.styles.thumbsView}>
          <TouchableHighlight onPress={() => {
                    this.onThumbsUpButtonClick(this.state.category);
                  }}>
                  <Image
           source={this.hasVoted ? require('./thumbsup100grey.jpg') : require('./thumbup100.jpg')}
            style={this.hasVoted ? this.styles.thumbsUpVoted : this.styles.thumbsUp}
          /></TouchableHighlight>
          <TouchableHighlight  onPress={() => {
                    this.onThumbsDownButtonClick(this.state.category);
                  }}><Image

            source={this.hasDownvoted ? require('./thumbdown100grey.jpg') : require('./thumbdown100.jpg')}
            style={this.styles.thumbsDown}
          /></TouchableHighlight>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('ItemDetails', () => USnack);
