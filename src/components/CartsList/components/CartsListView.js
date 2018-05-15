import React, {Component} from 'react';
import CartItemView from '../children/CartItem/components/CartItemView';
import { object } from 'prop-types';
import {
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';

const CartsListView = ({ carts, navigation }) => {
  return (
    <ScrollView style={styles.container}>
      { Object.keys(carts).map((id) => (<CartItemView key={id} cart={carts[id]} navigation={navigation} />))}
    </ScrollView>
  );
};

CartsListView.propTypes = {
  carts: object,
  navigation: object
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    marginTop: 10
  }
});

export default CartsListView;

