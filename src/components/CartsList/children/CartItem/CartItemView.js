import React, {Component} from 'react';
import { object } from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CartItemView = ({ cart }) => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{cart.createdAt}</Text>
      </View>
      <View style={styles.actions}>
        <Icon name="pencil" style={styles.actionIcon} size={14} />
        <Icon name="trash" style={styles.actionIcon} size={14} />
        <Icon name="ellipsis-v" style={styles.actionIcon} size={14} />
      </View>
    </View>
  );
};

CartItemView.propTypes = {
  cart: object,
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
    height: 50,
    borderColor: '#f8f8f8',
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'column',
    flexGrow: 6,
  },
  title: {
    fontWeight: 'bold',
    color: '#35718B'
  },
  actions: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  actionIcon: {
    alignItems: 'center',
    color: '#666666',
    padding: 5,
    paddingTop: 10
  }
});

export default CartItemView;