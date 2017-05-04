import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

import Instructions from './android/app/help/instructions'
class AwesomeProject extends Component {
 render() {
   return (
     <Instructions />
   );
 }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
