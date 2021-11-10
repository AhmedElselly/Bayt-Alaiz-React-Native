import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Products from '../components/Products';
import { Icon } from 'react-native-elements';
import Ordersform from '../components/OrdersForm';

const CartScreen = ({navigation}) => {
  const items = useSelector(state => state.cartReducer.selectedItems.items);
  console.log('items in cart', items);
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrowBack}>
        <Icon 
          name='arrow-back' 
          size={28}
          onPress={() => navigation.goBack()}
        />
      </TouchableOpacity>
      <View style={{
        flex: 1,
        marginTop: 30
      }}>
      {items.length ? <Products products={items} /> : (
        <Text style={{
          top: '50%',
          left: '50%',
          transform: [{translateX: -100}],
          fontSize: 20,
          fontWeight: 'bold'
        }}>No Items in the cart</Text>
      )}
      </View>
    </View>
  )
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  arrowBack: {
    position: 'absolute',
    top: 45,
    left: 15,
    zIndex: 1000
  }
})

export default CartScreen;