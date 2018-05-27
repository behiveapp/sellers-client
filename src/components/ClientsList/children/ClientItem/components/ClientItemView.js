import React, {Component} from 'react';
import { object, func } from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './StyleSheet';

const ClientItemView = ({ client, navigation, onPressAction }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPressAction}>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{client.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

ClientItemView.propTypes = {
  client: object,
  navigation: object,
  onPressAction: func,
};

export default ClientItemView;