/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import ProductList from './components/ProductsList/containers/ProductList';
import ClientsList from './components/ClientsList/containers/ClientsList';

import {
  Platform,
  StyleSheet,
  StatusBar,
  Text,
  View
} from 'react-native';
import { TabNavigator } from 'react-navigation';



const MainTab = TabNavigator({
  Products: { screen: ProductList },
  Clients: { screen: ClientsList },
},{
  tabBarOptions: {
    style: {
      backgroundColor: '#F8C634'
    }
  }
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#edb81e"
          barStyle="light-content"
        />
        <MainTab />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});1
