import React, {Component} from 'react';
import { object } from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './StyleSheet';

const CDProductItemView = ({ product }) => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
      <View style={styles.actionsContainer}>
        <Text style={styles.price}>{product.price}</Text>
        <View style={styles.actions}>
          <Icon name="pencil" style={styles.actionIcon} size={14} />
          <Icon name="trash" style={styles.actionIcon} size={14} />
          <Icon name="ellipsis-v" style={styles.actionIcon} size={14} />
        </View>
      </View>
    </View>
  );
};

CDProductItemView.propTypes = {
  product: object.isRequired,
};

export default CDProductItemView;