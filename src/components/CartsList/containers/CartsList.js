import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCarts } from '../actions';
import CartsListView from '../components/CartsListView';

class CartsList extends Component {
  componentDidMount() {
    this.props.fetchCarts('5aa75156f8245d00016bf8ab');
  }

  render(){
    const {carts, navigation } = this.props;
    return <CartsListView carts={carts} navigation={navigation} />
  }
}

function mapStateToProps({ carts }) {
  return { carts };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCarts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CartsList);