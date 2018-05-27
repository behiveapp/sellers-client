import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { object } from 'prop-types';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  MenuProvider,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { closeCart } from '../../../actions';
import styles from './StyleSheet';

class CartItemView extends Component {
  render() {
    const { cart, navigation } = this.props;
    return (
      <MenuProvider>
        <TouchableHighlight onPress={() => {navigation.navigate('CartDetails', cart)}} onLongPress={()=>this.menu.open()}>
          <View style={styles.container}>
            <View style={styles.detailsContainer}>
              <Text style={styles.title}>{cart.Buyer.name}</Text>
              <Text style={styles.description}>{cart.Buyer.identifier}</Text>
            </View>
            <View style={styles.actionsContainer}>
              <Text style={styles.price}>{cart.totalPrice}</Text>
            </View>
            <Menu ref={c => (this.menu = c)}>
              <MenuTrigger text="" />
              <MenuOptions>
                <MenuOption onSelect={() => this.props.closeCart(cart.id, navigation)} text="Fechar carrinho" />
                <MenuOption 
                  disabled={true}
                  text="Editar"
                />
                <MenuOption
                  disabled={true}
                  text="Excluir"
                />
              </MenuOptions>
            </Menu>
          </View>
        </TouchableHighlight>
      </MenuProvider>
    );
  }
};

CartItemView.propTypes = {
  cart: object.isRequired,
  navigation: object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ closeCart }, dispatch);
}

export default connect(null, mapDispatchToProps)(CartItemView);