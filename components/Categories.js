import React, { useEffect, useState } from 'react';
import {View, Text, FlatList, ScrollView, StyleSheet} from 'react-native';
import { getCategories } from '../apis/apiPosts';
import CardNative from './CardNative';
import Categorycard from './CategoryCard';


const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(res => {
      console.log(res.data);
      setCategories(res.data);
    });
  }, []);

  const generateCategories = () => {
    return categories.map(item => (
      <Categorycard key={item._id} post={item} />
    ))
  }

  return (
    <View>
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 15
      }}>Categories</Text>
      <ScrollView horizontal>
        {generateCategories()}
      {/* <FlatList 
          columnWrapperStyle={{justifyContent: 'space-around'}}
          numColumns={2} 
          data={categories}
          keyExtractor={(item, index) => item._id.toString()}
          renderItem={({item}) => <Categorycard key={item._id} post={item} />} /> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

})

export default Categories;
