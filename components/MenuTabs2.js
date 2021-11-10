import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';


const MenuTabs = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{
        marginLeft: 20
      }}>
      <Icon style={styles.icon} onPress={() => navigation.navigate('Home')} size={30} name='home' color='#fff' />
      </TouchableOpacity>
      <TouchableOpacity>
      <Icon style={styles.icon} size={30} name='search' color='#fff' onPress={() => navigation.navigate('SearchScreen')} />
      </TouchableOpacity>
      <TouchableOpacity style={{
        marginRight: 20,
      }}>
      <Icon style={styles.icon} size={30} name='shopping-cart' onPress={() => navigation.navigate('CartScreen')} color='#fff' />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#80ced6', 
    // marginLeft: 5, 
    paddingTop: 10, 
    // marginRight: 9, 
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    height: 50
  },
  icon:{
    marginLeft: 15,
    marginRight: 15,
    
  },
  iconContainer: {
    backgroundColor: 'white',
    borderRadius: 100,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default MenuTabs;
