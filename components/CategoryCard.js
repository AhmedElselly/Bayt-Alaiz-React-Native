import React from 'react';
import { View, Image, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('screen').width / 2 - 30;

const Categorycard = ({post}) => {
  const url = 'https://diab-shop-api.herokuapp.com/api/categories';
  
  // const post = route.params;
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('ProductsByCategory', post)}>
    <View style={styles.container}>
      <Image style={{
          width: '100%',
          height: 150
        }} source={{uri: `${url}/${post._id}/image`}} />
        <Text style={styles.title}>{post.text}</Text>        
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: '#F4F4F4',
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10
  },
  price: {
    marginLeft: 10
  },
  icon: {
    alignItems: 'flex-end',
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 150,
    backgroundColor: 'rgba(255,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  addToCart: {
    width: 30,
    height: 30,
    backgroundColor: 'green',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'

  }
})

export default Categorycard;
