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
    height: 100,
    borderColor: '#f8f8f8',
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'column',
    flexGrow: 6,
  },
  actionsContainer: {
    flex: 1,
    flexDirection: 'column',
    flexGrow: 1,
  },
  title: {
    fontWeight: 'bold',
    color: '#35718B'
  },
  description: {
    color: '#999999'
  },
  price: {
    fontWeight: 'bold',
    color: '#F8C634',
    textAlign: 'center',
  },
  actions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  actionIcon: {
    alignItems: 'center',
    color: '#666666',
    padding: 5,
    paddingTop: 10
  }
});