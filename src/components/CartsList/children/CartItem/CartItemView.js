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
        <Text style={styles.title}>{cart.Buyer.name}</Text>
        <Text style={styles.description}>{cart.Buyer.identifier}</Text>
      </View>
      <View style={styles.actionsContainer}>
        <Text style={styles.price}>{cart.totalPrice}</Text>
        <View style={styles.actions}>
          <Icon name="pencil" style={styles.actionIcon} size={14} />
          <Icon name="trash" style={styles.actionIcon} size={14} />
          <Icon name="ellipsis-v" style={styles.actionIcon} size={14} />
        </View>
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
    height: 80,
    borderColor: '#f8f8f8',
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'column',
    flexGrow: 6,
  },
  actionsContainer: {
    flex: 1,
    flexDirection: 'column',
    flexGrow: 1,
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
    color: '#F8C634',
    textAlign: 'center',
  },
  actions: {
    flex: 1,
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