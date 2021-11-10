import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Button} from 'react-native';
import { useDispatch } from 'react-redux';
import Ordersform from './OrdersForm';

const Product = ({product}) => {
  const dispatch = useDispatch();
  const removeItem = (product) => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  });
  
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.name}>{product.price} EGP</Text>
      <Text>Qunatity: {product.qty}</Text>
      <TouchableOpacity
       onPress={() => removeItem(product)}
       style={styles.removeBtn}>
        <Text style={{
          color: '#fff'
        }}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 25,
    marginLeft: 15,
    marginBottom: 15
  },
  name: {
    fontSize: 20
  },
  removeBtn: {
    backgroundColor: 'rgb(183, 9, 76)',
    width: 70,
    alignItems: 'center',
    borderRadius: 100
  }
})

export default Product;
