import {
  StyleSheet,
} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    borderWidth: 1,
    flexGrow: 1,
    borderColor: '#f8f8f8',
  },
  clientDetails: {
    flex: 1,
    flexDirection: 'column',
    flexGrow: 6
  },
  title: {
    fontWeight: 'bold',
    color: '#35718B'
  },
  description: {
    color: '#999999'
  },
  oldPrice: {
    fontWeight: 'bold',
    color: '#999999',
    textDecorationLine: 'line-through',
    textAlign: 'center',
    fontSize: 14
  },
  newPrice: {
    fontWeight: 'bold',
    color: '#F8C634',
    textAlign: 'center',
    fontSize: 20
  },
});