import React from 'react';
import { View, Text } from 'react-native';
import { Header } from '../../common';

const ARPortal = () => {
  return (
    <View>
      <Header headerText='AR Portal!' />
      <Text>The AR Portal should initiate.</Text>
      <Text>Remove all of this stuff and place your AR Portal code here</Text>
    </View>
  );
};

export default ARPortal;

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   Text,
//   View,
//   StyleSheet,
//   PixelRatio,
//   TouchableHighlight,
// } from 'react-native';

// import {
//   ViroSceneNavigator,
//   ViroARSceneNavigator
// } from 'react-viro';

// /*
//  TODO: Insert your API key below
//  */
var sharedProps = {
  apiKey:"D5FCCB74-1B13-4E50-BCE8-3DAE6B9ED443",
}

// Sets the default scene you want for AR and VR
var HelloWorldSceneAR = require('./../../../js/HelloWorldSceneAR');
// var DemoSceneAR = require('./js/DemoSceneAR');

export default class ViroSample extends Component {
  constructor() {
    super();

    this.state = {
      navigatorType : defaultNavigatorType,
      sharedProps : sharedProps
    }

  }

  // Replace this function with the contents of _getDemoSceneARNavigator() or _getMainSceneARNavigator()
  // if you are building a specific type of experience.
  render() {
    <ViroARSceneNavigator {...this.state.sharedProps} initialScene={{scene: HelloWorldSceneAR}} />
  }
}

module.exports = ViroSample
