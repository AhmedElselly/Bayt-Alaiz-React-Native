import React, { useEffect, useState } from 'react';
import {View, StyleSheet, FlatList, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import { getPostsByCategory } from '../apis/apiPosts';
import CardNative from '../components/CardNative';

const ProductsByCategory = ({route, navigation}) => {
  const [posts, setPosts] = useState([]);
  const post = route.params;
  useEffect(() => {
    getPostsByCategory(post._id).then(res => {
      
      setPosts(res.data);
    })
  }, []);

  const url = 'https://diab-shop-api.herokuapp.com/api/categories';


  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.icon}>
        <Icon 
          name='arrow-back' 
          size={28}
          onPress={() => navigation.goBack()}
        />
      </TouchableOpacity>
      <Image
        source={{uri: `${url}/${post._id}/image`}}
        style={{
          width: '100%',
          height: 250
        }}
      />
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10
      }}>{post.text}</Text>
      <FlatList 
        columnWrapperStyle={{justifyContent: 'space-around'}}
        numColumns={2} 
        data={posts}
        keyExtractor={(item, index) => item._id.toString()}
        renderItem={({item}) => <CardNative key={item._id} post={item} />} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },

  icon:{
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 100,
    zIndex: 1000,
  }
})

export default ProductsByCategory;
