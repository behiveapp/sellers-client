import React, {Component} from 'react';
import { object } from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const ProductItemUI = ({ product }) => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
      <View style={styles.actionsContainer}>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.actions}>{product.price}</Text>
      </View>
    </View>
  );
};

ProductItemUI.propTypes = {
  product: object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    borderWidth: 1,
    height: 100,
    borderColor: '#f8f8f8',
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'column',
    flexGrow: 5
  },
  actionsContainer: {
    flex: 1,
    flexDirection: 'column',
    flexGrow: 1
  },
  title: {
    fontWeight: 'bold',
    color: '#35718B'
  },
  description: {
    color: '#999999'
  },
  price: {
    fontWeight: 'bold',
    color: '#F8C634'
  },
});

export default ProductItemUI;