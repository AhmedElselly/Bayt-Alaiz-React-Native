import React from 'react';
import { View, Image, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import {Card, Icon} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('screen').width / 2 - 30;


const CardNative = ({post}) => {
  const url = 'https://diab-shop-api.herokuapp.com/api/posts';
  const navigation = useNavigation();
  
  return(
    <TouchableOpacity onPress={() => navigation.navigate('Details', post)}>
    <View style={styles.container}>
      <TouchableOpacity>
      <View style={styles.icon}>
        {/* <View style={styles.iconContainer}>
          <Icon color='red' name='favorite' size={18} />
        </View> */}
      </View>
      </TouchableOpacity>
      <Image style={{
          width: '100%',
          height: 150
        }} source={{uri: `${url}/${post._id}/image`}} />
        <Text style={styles.title}>{post.name}</Text>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginRight: 10
        }}>
          <Text style={styles.price}>{post.price} EGP</Text>
          <TouchableOpacity>
            <View style={styles.addToCart}>
              <Icon name='cart-plus' color='#fff' type='font-awesome' />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={{
          marginLeft: 15,
          color: post.quantity >= 1 ? 'green' : 'red'
        }}>{post.quantity >= 1 ? 'In Stock' : 'Out of stock'}</Text>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 250,
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
    backgroundColor: 'teal',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'

  }
})

export default CardNative;