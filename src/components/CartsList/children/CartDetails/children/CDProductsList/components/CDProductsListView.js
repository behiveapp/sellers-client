import React, {Component} from 'react';
import { object, array } from 'prop-types';
import {
  ScrollView,
  Text,
} from 'react-native';
import CDProductsItemView from '../children/CDProductItem/components/CDProductItemView';
import styles from './StyleSheet';

const CDProductsListView = ({ products }) => {
  return (
    <ScrollView style={styles.container}>
      {products.map((product, id) => (<CDProductsItemView key={id} product={product}/>))}
    </ScrollView>
  );
};

CDProductsListView.propTypes = {
  products: array.isRequired,
};

export default CDProductsListView;

