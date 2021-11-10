import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import { authenticate, isAuthenticated, login } from '../apis/apiUser';
import axios from 'react-native-axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});
  const navigation = useNavigation();
  useEffect(() => {
    const checkUser = async () => {
      const userData = await isAuthenticated();
      if(userData){
        setUser(userData)
        navigation.navigate('Home')
      }
    }
    checkUser();
  },[])

  console.log(user)

  const handleChange = e => {
    if(e.target.name === 'email'){
      setEmail(e.target.value);
    }

    if(e.target.name === 'password'){
      setPassword(e.target.value);
    }
  }

  const handleSubmit = e => {
    const url = 'http://127.0.0.1:8000/api/users';
    
    login(email, password).then(res => {
      console.log(res.data)
      authenticate(res.data)

      retrieveUser()
      // navigation.navigate('Splash');
    })    
  }

  const retrieveUser = async () => {
    const userData = await isAuthenticated();
    setUser(userData);

    console.log('user token', user)
  }

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      
      <TextInput 
        style={styles.input}
        name='email' 
        value={email} 
        onChangeText={text => setEmail(text)}
        placeholder='Email'
      />
      <TextInput 
        style={styles.input}
        secureTextEntry={true}
        name='password' 
        value={password} 
        onChangeText={text => setPassword(text)}
        placeholder='Password'
      />

      <Button title='Login' onPress={() => handleSubmit()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    width: '90%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5
  },
})

export default Login;
