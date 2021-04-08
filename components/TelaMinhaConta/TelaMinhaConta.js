import React from 'react';
import { View, Image, StyleSheet, Button, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Input from './Input';
import Icone from './Icone';
import TopBar from '../Layout/TopBar';

export default function TelaMinhaConta() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.main}>
        <TopBar />
        <View style={styles.corpo}>
          <View style={{ flex: 0.5, justifyContent: 'space-between' }}>
            <Icone />
            <View>
              <Text>Email</Text>
              <View style={styles.email}>
                <Text>zuzu@gmail.com</Text>
              </View>
            </View>
          </View>
          <View style={{ borderWidth: 1, borderRadius: 5 }}>
            <Button title='  Alterar senha ' color='gray' />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );

}



//<Input titulo='Email'/>
const styles = StyleSheet.create({

  main: {

    flex: 1

  },

  corpo: {

    flex: 0.75,
    alignItems: 'center',
    justifyContent: 'space-around'

  },

  email: {

    backgroundColor: '#eaeaea',
    width: 160,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 3


  }
});