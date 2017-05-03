import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

import PollsList from './android/app/List/PollsList'
class AwesomeProject extends Component {
 render() {
   return (
     //<Text>Hello world!</Text>
     <PollsList />
   );
 }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
