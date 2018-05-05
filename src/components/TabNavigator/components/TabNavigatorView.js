import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TabNavigator } from 'react-navigation';

const Tab = TabNavigator({
  Home: { screen: ProductList },
  Settings: { screen: ProductList },
});