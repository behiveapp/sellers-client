import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProducts } from '../actions';
import ProductsListView from '../components/ProductListView';

class ProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render(){
    const { products, navigation } = this.props;
    return <ProductsListView products={products} navigation={navigation}/>
  }
}

function mapStateToProps({ products }) {
  return { products };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProducts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);