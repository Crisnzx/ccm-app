import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>depois do almoço: 1 - criar um repositório no github, 2 - emular o android no Android Studio</Text>
      <Image style={{width:200, height:200}} source={{uri: 'https://github.com/Crisnzx.png'}}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
