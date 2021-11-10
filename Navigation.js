import React, { Fragment, useEffect, useState } from 'react';
import {View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Details from './screens/Details';
import { isAuthenticated } from './apis/apiUser';
import Login from './screens/Login';
import {Provider as ReduxProvider} from 'react-redux';
import configureStore from './redux/store';
import CartScreen from './screens/CartScreen';
import ProductsByCategory from './screens/ProductsByCategory';
import SearchScreen from './screens/SearchScreen';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const screenOptions = {
    headerShown: false
  }

	const store = configureStore();  

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName={'Home'}
          screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="ProductsByCategory" component={ProductsByCategory} />
          <Stack.Screen name="CartScreen" component={CartScreen} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}

const styles = StyleSheet.create({})

export default Navigation;
