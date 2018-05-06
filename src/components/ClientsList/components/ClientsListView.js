import React, {Component} from 'react';
import ClientItemView from '../children/ClientItem/ClientItemView';
import { array } from 'prop-types';
import {
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';

const ClientsListView = ({ clients }) => {
  return (
    <ScrollView style={styles.container}>
      { clients.map((client, idx) => (<ClientItemView key={idx} client={client} />))}
    </ScrollView>
  );
};

ClientsListView.propTypes = {
  clients: array,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    marginTop: 10
  }
});

export default ClientsListView;

