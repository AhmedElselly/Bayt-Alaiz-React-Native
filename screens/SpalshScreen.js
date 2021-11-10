import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const SpalshScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SpalshScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  }
})

export default SpalshScreen;
