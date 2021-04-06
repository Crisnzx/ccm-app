import React from 'react';
import {  View, Image, StyleSheet, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Input from './Input';
import Icone from './Icone';
import TopBar from '../Layout/TopBar';

export default function TelaMinhaConta(){

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.main}>
          <TopBar/>
          <View  style={styles.corpo}>
            <View style={{flex:0.7, justifyContent:'space-between'}}>
              <Icone/>
              <Input titulo='Email'/>
              
            <Image 
            style={{height:23, width:23}} 
            source={require('../../assets/lapis.png')}
           />
      
            </View>
            <View style={{borderWidth:1, borderRadius:5}}>
              <Button title='  Alterar senha ' color='gray'/>
            </View>
          </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );

}

const styles = StyleSheet.create({

  main:{

    flex:1

  },

  corpo:{
    
    flex:0.7,
    alignItems: 'center',
    justifyContent:'space-between',
    marginVertical: 30
    

  }
});