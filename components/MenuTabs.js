import React, { useEffect, useState } from 'react';
import {View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Details from '../screens/Details';
import Login from '../screens/Login';
import { isAuthenticated } from '../apis/apiUser';
import SpalshScreen from '../screens/SpalshScreen';
import * as SecureStore from 'expo-secure-store';

const MenuTabs = () => {
  const Tab = createBottomTabNavigator();
  const screenOptions = {
    headerShown: false
  }

  

  return (
    
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Login') {
              iconName = focused ? 'person' : 'person';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Details" component={Details} />
        <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
    </NavigationContainer>
  );
      
}

const styles = StyleSheet.create({})

export default MenuTabs;
