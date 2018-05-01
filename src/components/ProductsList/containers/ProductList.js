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
    return <ProductsListView products={this.props.products} />
  }
}

function mapStateToProps({ products }) {
  return { products };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProducts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);