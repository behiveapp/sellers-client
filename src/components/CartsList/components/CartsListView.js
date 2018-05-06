import React, {Component} from 'react';
import CartItemView from '../children/CartItem/CartItemView';
import { array } from 'prop-types';
import {
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';

const CartsListView = ({ carts }) => {
  console.log(carts);
  return (
    <ScrollView style={styles.container}>
      { carts.map((cart, idx) => (<CartItemView key={idx} cart={cart} />))}
    </ScrollView>
  );
};

CartsListView.propTypes = {
  carts: array,
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

