import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

import PollsList from './components/List/PollsList'

class AwesomeProject extends Component {
 render() {
   return (
     <PollsList />
   );
 }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
