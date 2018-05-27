import React, {Component} from 'react';
import { object } from 'prop-types';
import {
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './StyleSheet';

class ProductItemView extends Component {
  constructor(props){
    super(props);

    this.openClientsScreen = this.openClientsScreen.bind(this);
  }
  openClientsScreen() {
    const { navigation, product } = this.props;
    navigation.navigate('ClientesCart', product);
  }
  render() {
    const { product } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
        <View style={styles.actionsContainer}>
          <Text style={styles.price}>{product.price}</Text>
          <View style={styles.actions}>
            <Icon name="shopping-cart" style={styles.actionIcon} size={24} onPress={this.openClientsScreen}/>
          </View>
        </View>
      </View>
    );
  }
};

ProductItemView.propTypes = {
  product: object,
};

export default ProductItemView;