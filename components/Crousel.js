import React, { useState } from 'react';
import {View, StyleSheet, Text, Image, ScrollView, Dimensions} from 'react-native';

const Crousel = () => {
  const [active, setActive] = useState(0);
  const {width} = Dimensions.get('window');
  const height = width * 100 / 100;
  const images = [
    'https://images.unsplash.com/photo-1605883705077-8d3d3cebe78c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1551807306-4bcd16b92a41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1551807944-e8ff53798d5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1556910602-38f53e68e15d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
  ]

  const handleChange = ({nativeEvent}) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if(slide !== active){
      setActive(slide)
    }
  }

  return (
    <View style={{
      width,
      height
    }}>
      <ScrollView 
       pagingEnabled
       horizontal
       showsHorizontalScrollIndicator={false}
       onScroll={handleChange}
       style={{width, height}}>
      {images.map((image, index) => (
        <Image style={{
          width,
          height
        }} key={index} source={{uri: image}} />
      ))}
      </ScrollView>
      <View style={{
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
      }}>
        {images.map((image, index) => (
          <Text key={index} style={{color: index == active ? '#fff' : '#888', marginRight: 3}}>⬤</Text>  
        ))}
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
})

export default Crousel;
