import React, { useState } from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';
import { findPosts } from '../apis/apiPosts';
// import {Icon} from 'react-native-elements'
const Searchbar = ({getPosts}) => {
  const [search, setSearch] = useState('');

  const navigation = useNavigation();

  const updateSearch = (text) => {
    setSearch(text)
  }

  const submitSearch = () => {
    findPosts(search).then(res => {
      console.log(res.data)
      getPosts(res.data)
    });
  }

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search..."
        onChangeText={updateSearch}
        value={search}
        containerStyle={{
          backgroundColor: 'white',
          borderBottomWidth:0,
          borderTopWidth:0,
          width: '80%'
        }}
        inputContainerStyle={{
          backgroundColor: '#eee'
        }}
        inputStyle={{
          color: '#000'
        }}
        round        
        cancelIcon
      />
      <TouchableOpacity style={styles.searchBtn} onPress={submitSearch}>
        <Text>Search</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  searchBtn: {
    backgroundColor: '#DCDCDC',
    width: 70,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  }
})

export default Searchbar;
