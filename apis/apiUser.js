import axios from 'react-native-axios';
import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AsyncStorageStatic as AsyncStorage } from 'react-native';


const url = 'https://diab-shop-api.herokuapp.com/api/users';

export const login = async (email, password) => {
  try{
    const res = await axios.post(`${url}/login`, {
      email,
      password
    }).catch((err) => {
      console.log(err)
    });;

    return res;
  } catch(err){
    throw new Error('request failed')
  }
}

export const logout = async () => {
  if(SecureStore.getItemAsync('token')){
    await SecureStore.deleteItemAsync('token');
    console.log('logged out')
  } else {
    return null
  }
}

export const authenticate = async token => {
  // await SecureStore.setItemAsync('token', token);
  try{
    // await AsyncStorage.setItem('token', JSON.stringify(token));
    await SecureStore.setItemAsync('token', JSON.stringify(token));
    return true;
  } catch(err) {
    console.log(err)
  }
}

export const isAuthenticated = async () => {
  // return SecureStore.getItemAsync('token');
    if(SecureStore.getItemAsync('token')){
      // const user = await AsyncStorage.getItem('token');
      const user = await SecureStore.getItemAsync('token');
      return JSON.parse(user);
    } else {
      return null;
    }
    // return SecureStore.getItemAsync('token');
    
    
}