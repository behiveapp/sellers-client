import React, {Component} from 'react';
import { object, array, number } from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import CartsService from '../../../../../../services/bifrost/CartsService';
import styles from './StyleSheet';

class CDCartInfoView extends Component {
  constructor(props){
    super(props);
    this.state = {
      cartsLength: 0,
      ranking: '',
      multiplier: 1,
    };
  }

  async componentDidMount(){
    const { buyer } = this.props;
    try{
      const cartsService = new CartsService();
      const carts = await cartsService.getCartsFromBuyer(buyer.id, 1);
      const cartsLength = carts.length;
      this.setState({
        cartsLength
      });
      this.setRanking();
    }catch(err){
      console.log(err);
    }
  }

  setRanking() {
    const  { cartsLength } = this.state;
    let ranking = '';
    let disccount = 0;

    if (cartsLength < 2) {
      ranking = 'Iniciante';
      multiplier = 1;
    } else if (cartsLength < 3) {
      ranking = 'Aprendiz';
      multiplier = 0.91;
    } else if (cartsLength < 5) {
      ranking = 'Veterano';
      multiplier = 0.83;
    } else if (cartsLength >= 5) {
      ranking = 'Master';
      multiplier = 0.77;
    }

    this.setState({
      ranking,
      multiplier
    });
  }

  render() {
    const { products, buyer, totalPrice } = this.props;
    const { ranking, multiplier } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.clientDetails}>
          <Text style={styles.title}>{buyer.name}</Text>
          <Text style={styles.description}>{ranking}</Text>
        </View>
        <View>
          {multiplier < 1 && <Text style={styles.oldPrice}>{totalPrice}</Text>}
          <Text style={styles.newPrice}>{(totalPrice * multiplier).toFixed(2)}</Text>
        </View>
      </View>
    );
  }
}

CDCartInfoView.propTypes = {
  buyer: object.isRequired,
  products: array.isRequired,
  totalPrice: number.isRequired
};

export default CDCartInfoView;