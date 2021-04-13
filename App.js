import 'react-native-gesture-handler';
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './navigation/Stack';




export default function App() {

  return (

    <NavigationContainer>
      <Stack />
    </NavigationContainer>


  );
}



