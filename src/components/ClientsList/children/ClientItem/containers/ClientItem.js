import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openCart } from '../../../actions';
import ClientItemView from '../components/ClientItemView';

class ClientItem extends Component {
  onPressAction() {
    const { openCart, navigation, client } = this.props;
    const product = navigation.state.params || {};
    
    const currentSeller = {
      Id: '5aa75156f8245d00016bf8ab',
      identifier: '01001001000113',
      fullName: 'Império das Grifes',
      shortName: 'Império das Grifes LTDA'
    };
    
    if(product) {
      openCart(client, currentSeller, product, navigation);
    }
  }

  render(){
    const { client, navigation } = this.props;
    return <ClientItemView client={client} onPressAction={this.onPressAction.bind(this)}/>
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ openCart }, dispatch);
}

export default connect(null, mapDispatchToProps)(ClientItem);