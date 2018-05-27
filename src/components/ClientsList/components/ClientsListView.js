import React, {Component} from 'react';
import ClientItem from '../children/ClientItem/containers/ClientItem';
import { array } from 'prop-types';
import {
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';

const ClientsListView = ({ clients, navigation }) => {
  return (
    <ScrollView style={styles.container}>
      { clients.map((client, idx) => (<ClientItem key={idx} client={client} navigation={navigation}/>))}
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

