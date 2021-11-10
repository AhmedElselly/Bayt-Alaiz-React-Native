import React, { useState } from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';

const Details = ({navigation, route}) => {
  let [count, setCount] = useState(1);
  const post = route.params;
  const url = 'https://diab-shop-api.herokuapp.com/api/posts';
  
  const items = useSelector(state => state.cartReducer.selectedItems.items);

  const dispatch = useDispatch();

	const selectItem = (item) => dispatch({
		type: 'ADD_TO_CART',
		payload: {
      ...item,
      qty: count
		}		
	});

  console.log('items in cart', items)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon 
          name='arrow-back' 
          size={28}
          onPress={() => navigation.goBack()}
        />
        <TouchableOpacity style={{
          position: 'relative'
        }}>
          <Icon 
            name='shopping-cart' 
            size={28}
            onPress={() => navigation.navigate('CartScreen')}
          />
          <View style={{
            position: 'absolute',
            top: -15,
            backgroundColor: 'teal',
            width: 20,
            height: 20,
            alignItems: 'center',
            borderRadius: 300
          }}>
            <Text style={{color: '#fff'}}>{items.length}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image 
          source={{uri: `${url}/${post._id}/image`}}
          style={{
            resizeMode: 'contain',
            flex: 1,
            width: '100%',
            height: '50%'
          }}
        />
      </View>
      <View style={styles.detailsContainer}>
        <View style={{
          marginLeft: 20,
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Text style={{
            fontSize: 25,
            fontWeight: 'bold'
          }}>{post.name}</Text>
          <View style={styles.priceTag}>
            <Text style={{
              color: 'white',
              marginLeft: 15
            }}>{post.price} EGP</Text>
          </View>
        </View>
        <View style={{
          paddingHorizontal: 20,
          marginTop: 10
        }}>
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold'
          }}>About</Text>

          <Text style={{
            fontSize: 18,
          }}>{post.description}</Text>
          <View style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <TouchableOpacity onPress={() => setCount(count <= 1 ? 1 : count - 1)}>
              <View style={styles.borderBtn} >
                <Text style={styles.borderBtnText}>-</Text>
              </View>
              </TouchableOpacity>
              <Text style={{
                fontSize: 20,
                marginHorizontal: 10
              }}>{count}</Text>
              <TouchableOpacity onPress={() => setCount(count + 1)}>
                <View style={styles.borderBtn} >
                  <Text style={styles.borderBtnText}>+</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity 
            onPress={(checkboxValue) => selectItem(post)}>
              <View style={styles.addToCartBtn}>
                <Text style={{
                  color: '#fff'
                }}>Add to Cart</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: '#F4F4F4',
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30
  },
  priceTag: {
    backgroundColor: 'teal',
    width: 80,
    height: 40,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    justifyContent: 'center'
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  borderBtnText: {
    fontWeight: 'bold',
    fontSize: 28
  },
  addToCartBtn: {
    backgroundColor: 'teal',
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30
  }
});

export default Details;
