import React, {Component} from 'react';
import { object } from 'prop-types';
import {
  ScrollView,
  Text,
} from 'react-native';
import CDProductsListView from '../children/CDProductsList/components/CDProductsListView';
import styles from './StyleSheet';

const CartDetailsView = (props) => {
  const  { Products: products } = props.navigation.state.params;
  return <CDProductsListView products={products}/>;
};

CartDetailsView.propTypes = {
  cart: object,
};

CartDetailsView.navigationOptions = {
  title: 'Carrinho'
}


export default CartDetailsView;

