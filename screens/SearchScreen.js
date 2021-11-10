import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Platform, Text} from 'react-native';
import Searchbar from '../components/SearchBar';
import CardNative from '../components/CardNative';

const SearchScreen = () => {
  const [posts, setPosts] = useState([]);
  
  const handlePosts = (posts) => {
    setPosts(posts)
  }
  console.log('props.posts', posts)

  return (
    <View style={styles.container}>
      <Searchbar getPosts={handlePosts} />
      {posts.length ? (
        <View style={{marginTop: 10, flex: 1}}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 15,
            marginBottom: 10
          }}>Recent Products</Text>
          <FlatList 
          columnWrapperStyle={{justifyContent: 'space-around'}}
          numColumns={2} 
          data={posts}
          keyExtractor={(item, index) => item._id.toString()}
          renderItem={({item}) => <CardNative key={item._id} post={item} />} />        
       </View>
      ):(
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{
            fontSize: 30
          }}>Start Searching</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
})

export default SearchScreen;
