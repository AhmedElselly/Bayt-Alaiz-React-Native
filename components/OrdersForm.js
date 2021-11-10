import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { postOrder } from '../apis/apiPosts';
import { showMessage, hideMessage } from "react-native-flash-message";

const Ordersform = ({products}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [loaded, setLoaded] = useState(false);

  const handleSubmit = () => {
    postOrder(firstName, lastName, email, address, phone, products).then(res => {
      console.log(res.data);
      setLoaded(true);
      showMessage({
        message: "Order Success",
        type: "success",
      });
    })
  }

  const loadedAfterSuccess = () => {
    setLoaded(false);
  }

  useEffect(() => {
    if(loaded){
      setTimeout(() => {
        loadedAfterSuccess()
      }, 5000)
    }
  }, []);

  return (
    <ScrollView style={styles.container}>
      {loaded && (
        <View style={styles.orderSuccess}>
          <Text style={{
            color: '#fff'
          }}>order is set</Text>
        </View>
      )}
      <Text style={styles.title}>Order Form</Text>
      <TextInput 
        style={styles.input}
        name='firstName' 
        value={firstName} 
        onChangeText={text => setFirstName(text)}
        placeholder='First Name'
      />
      <TextInput 
        style={styles.input}
        name='lastName' 
        value={lastName} 
        onChangeText={text => setLastName(text)}
        placeholder='Last Name'
      />
      <TextInput 
        style={styles.input}
        name='email' 
        value={email} 
        onChangeText={text => setEmail(text)}
        placeholder='Email'
      />
      <TextInput 
        style={styles.input}
        name='phone' 
        value={phone} 
        onChangeText={text => setPhone(text)}
        placeholder='Phone'
      />
      <TextInput 
        style={styles.input}
        name='address' 
        value={address} 
        onChangeText={text => setAddress(text)}
        placeholder='Address'
      />
      <TouchableOpacity 
      onPress={() => handleSubmit()}
      style={styles.orderBtn}>
        <Text style={{
          color: 'white'
        }}>Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },

  input: {
    height: 40,
    margin: 12,
    width: '90%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5
  },

  orderBtn: {
    backgroundColor: 'teal',
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },

  orderSuccess: {
    width: '100%',
    height: 40,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  }
})

export default Ordersform;
