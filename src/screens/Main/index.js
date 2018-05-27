/**
 * @flow
 */

import React, { Component } from 'react';
import {
  StatusBar,
  View,
  YellowBox
} from 'react-native';
import Navigator from './navigation';
import styles from './StyleSheet';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#F8C634"//"#edb81e"
          barStyle="light-content"
        />
        <Navigator />
      </View>
    )
  }
}