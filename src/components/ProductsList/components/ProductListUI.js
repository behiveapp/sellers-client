import React, {Component} from 'react';
import ProductItemUI from './ProductItemUI';
import { array } from 'prop-types';
import {
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';

const ProductsListUI = ({ products }) => {
  return (
    <ScrollView>
      { products.map((product, idx) => (<ProductItemUI key={idx} product={product} />))}
    </ScrollView>
  );
};

ProductsListUI.propTypes = {
  products: array,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff'
  }
});

export default ProductsListUI;

