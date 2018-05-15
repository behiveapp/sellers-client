import React, {Component} from 'react';
import { object } from 'prop-types';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './StyleSheet';

class CartItemView extends Component {
  render() {
    const { cart, navigation } = this.props;
    return (
      <TouchableHighlight onPress={() => {navigation.navigate('CartDetails', cart)}}>
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
      </TouchableHighlight>
    );
  }
};

CartItemView.propTypes = {
  cart: object.isRequired,
  navigation: object.isRequired,
};

export default CartItemView;