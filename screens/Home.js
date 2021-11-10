import React, { useEffect, useState } from 'react';
import {View, Platform, StyleSheet, Text, Button, SafeAreaView, FlatList, ScrollView, Image} from 'react-native';
import { isAuthenticated, logout } from '../apis/apiUser';
import CardNative from '../components/CardNative';
import {getPosts} from '../apis/apiPosts';
import { Icon } from 'react-native-elements';
import Crousel from '../components/Crousel';
import Searchbar from '../components/SearchBar';
import Categories from '../components/Categories';
import MenuTabs from '../components/MenuTabs2';
// import logo from '../assets/logo.png';

const Home = ({navigation}) => {

  const [posts, setPosts] = useState([]);

  const postIndex = () => {
    getPosts().then(res => {
      setPosts(res.data);
    })
  }
  useEffect(() => {
    postIndex();
  }, [])

  const generatePosts = () => {
    return posts.map(post => (
      <CardNative key={post._id} post={post} />
    ))
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={require('../assets/logo.jpg')}
          style={{
            width: '100%',
            height: 100,
            resizeMode: 'contain'
          }}
        />
      </View>
      <ScrollView>
      <Crousel/>
      
      <View style={{
        marginTop: 10,
        flex: 1
      }}>
        <Searchbar/>
        
        <Categories/>
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
      </View>      
      </ScrollView>
      <MenuTabs/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  logout: {
    position: 'absolute'
  }
})

export default Home;
