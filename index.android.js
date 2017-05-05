import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import querystring from 'querystring';

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
//import PollsList from './components/List/PollsList'
import {PollsListStack} from './android/app/config/router'

class USnack extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

  async componentDidMount() {
    try {
      const storedUser = await AsyncStorage.getItem('@DataStore:user');
      this.setState({ user: JSON.parse(storedUser) })
    } catch (error) {
      // Error saving data
    }
    if (!this.state.user) {
      this._setupGoogleSignin();
    }
  }

  render() {
    if (this.state.user) {
      return (
        <PollsListStack />
      );
    }
    else {
      return (
        <View style={styles.container}>
         <Text style={{fontSize: 36, fontWeight: 'bold', marginBottom: 20}}>Welcome to uSnack</Text>
         <Text style={{fontSize: 16, marginBottom: 20}}> Please login using your google account </Text>
          <GoogleSigninButton style={{width: 120, height: 44}} color={GoogleSigninButton.Color.Light} size={GoogleSigninButton.Size.Icon} onPress={() => { this._signIn(); }}/>
        </View>
      );
    }
  }

  async _setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        webClientId: '730570315128-8eqrb6pb8phkbnd7qlimghab4h199ori.apps.googleusercontent.com',
        offlineAccess: false
      });

      const user = await GoogleSignin.currentUserAsync();
      this.setState({user: user});
    }
    catch(err) {
      console.log("Play services error", err.code, err.message);
    }
  }

  async _signIn() {
    GoogleSignin.signIn()
    .then(async (user) => {
      data = { userId: user.id, googleToken: user.idToken, photo: user.photo, name: user.name, email: user.email }
      let params = querystring.stringify(data);
      url = `https://sleepy-sierra-94063.herokuapp.com/users/add?${params}`
      await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/x-www-form-urlencoded',
        },
        body: params
      })
        .then(async (response) => {
          try {
             await AsyncStorage.setItem('@DataStore:user', JSON.stringify(user));
          } catch (error) {
            // Error saving data
            Alert.alert.log(error)
          }
        })
      return user
    })
    .then((user) => {
      console.log("setting state")
      this.setState({user: user});
      console.log(this.state.user)
      this.forceUpdate();
    })
    .catch((err) => {
      Alert.alert('WRONG SIGNIN: ' + err);
    })
    .done();
  }

  _signOut() {
    GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
      this.setState({user: null});
    })
    .done();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('USnack', () => USnack);
