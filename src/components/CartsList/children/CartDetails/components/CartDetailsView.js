import React, {Component} from 'react';
import { object } from 'prop-types';
import {
  View,
  Text,
} from 'react-native';
import CDProductsListView from '../children/CDProductsList/components/CDProductsListView';
import CDCartInfoView from '../children/CDCartInfo/CDCartInfoView';
import styles from './StyleSheet';

const CartDetailsView = (props) => {
  const  { Products: products, Buyer: buyer, totalPrice } = props.navigation.state.params;
  return (
    <View style={styles.container}>
      <CDCartInfoView totalPrice={totalPrice} products={products} buyer={buyer} />
      <CDProductsListView products={products}/>
    </View>
  );
};

CartDetailsView.propTypes = {
  cart: object,
};

CartDetailsView.navigationOptions = {
  title: 'Carrinho'
}


export default CartDetailsView;

