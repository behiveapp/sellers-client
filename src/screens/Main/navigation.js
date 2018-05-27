import { React } from 'react';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createMaterialTopTabNavigator } from 'react-navigation';
import ProductList from '../../components/ProductsList/containers/ProductList';
import ClientsList from '../../components/ClientsList/containers/ClientsList';
import CartsList from '../../components/CartsList/containers/CartsList';
import CartDetails from '../../components/CartsList/children/CartDetails/components/CartDetailsView';


const mainTab = createMaterialTopTabNavigator({
  Produtos: { screen: ProductList },
  Clientes: { screen: ClientsList },
  Pedidos: { screen: CartsList },
},{
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'white',
    style: {
      backgroundColor: '#F8C634',
    },
  },
});

const mainStack = createStackNavigator({
  Tabs: { screen: mainTab },
  CartDetails: { screen: CartDetails },
  ClientesCart: { screen: ClientsList, navigationOptions: { title: 'Escolha o cliente' }},
}, {
  navigationOptions: {
    title: 'Behive',
    headerTintColor: '#FFFFFF',
    headerStyle: {
      backgroundColor: '#F8C634',
      shadowOpacity: 0,
      shadowOffset: {
        height: 0,
      },
      shadowRadius: 0,
      elevation: 0
    },
  }
})

export default mainStack;