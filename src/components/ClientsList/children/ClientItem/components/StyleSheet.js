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
    height: 50,
    borderColor: '#f8f8f8',
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'column',
    flexGrow: 6,
  },
  title: {
    fontWeight: 'bold',
    color: '#35718B'
  },
  actions: {
    flex: 1,
    flexGrow: 1,
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