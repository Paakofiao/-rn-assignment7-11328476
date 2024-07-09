import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import ProductDetailScreen from './ProductDetailScreen';
import Checkout from './Checkout';
import {CartProvider} from './CartContext'
import "react-native-gesture-handler";
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerComponent from './CustomDrawerComponent';



const Drawer = createDrawerNavigator();




export default function App() {
  return (
    
    <CartProvider>
    <NavigationContainer>
         <Drawer.Navigator 
    intialRouteName="HomeScreen"
     drawerContent={(props) => <CustomDrawerComponent {...props}/>}>
      <Drawer.Screen
      name="HomeScreen"
      component={Home}
      options={{headerShown:false}}/>
      <Drawer.Screen
      name="ProductDetailScreen"
      component={ProductDetailScreen}
      options={{headerShown:false}}/>
      <Drawer.Screen
      name="Checkout"
      component={Checkout}
      options={{headerShown:false}}/>
      </Drawer.Navigator>
    </NavigationContainer>
    </CartProvider>
  );
}