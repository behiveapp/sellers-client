import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchClients } from '../actions';
import ClientsListView from '../components/ClientsListView';

class ClientsList extends Component {
  componentDidMount() {
    this.props.fetchClients();
  }

  render(){
    return <ClientsListView clients={this.props.clients} />
  }
}

function mapStateToProps({ clients }) {
  return { clients };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchClients }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientsList);