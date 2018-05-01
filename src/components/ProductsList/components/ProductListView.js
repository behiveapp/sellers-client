import React, {Component} from 'react';
import ProductItemView from '../children/ProductItem/ProductItemView';
import { array } from 'prop-types';
import {
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';

const ProductsListView = ({ products }) => {
  return (
    <ScrollView>
      { products.map((product, idx) => (<ProductItemView key={idx} product={product} />))}
    </ScrollView>
  );
};

ProductsListView.propTypes = {
  products: array,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff'
  }
});

export default ProductsListView;

