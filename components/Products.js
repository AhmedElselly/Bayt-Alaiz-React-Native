import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Ordersform from './OrdersForm';
import Product from './Product';

const Products = ({products}) => {
  const generateProducts = () => {
    return products.map((product, i) => (
      <Product key={i} product={product} />
    ));
  }

  let total = products.map(item => Number(item.price) * Number(item.qty)).reduce((prev, curr) => prev + curr, 0)

  return (
    <View style={styles.container}>
      {generateProducts()}
      <View style={styles.border}></View>
      <View style={styles.total}>
        <Text style={{fontSize: 30}}>Total</Text>
        <Text style={{fontSize: 30}}>{total} EGP</Text>
      </View>
      <Ordersform products={products}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  border: {
    marginTop: 15,
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  total: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  }
})

export default Products;
