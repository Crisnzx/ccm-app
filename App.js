import React from 'react';
import { View, Image, StyleSheet, Text, Button } from 'react-native';
import Input from './components/Input';
import Icone from './components/Icone';

export default function App(){

  return (

    <View style={styles.main}>
      <View style={styles.cabecalho}>
        <Image 
        style={{width:24, height:22}}
        source={require('./assets/menu.png')}
        />
      </View>
      <View  style={styles.corpo}>
        <Icone/>
        <Input titulo='Email'/>
        <Input titulo='Senha'/>
          <View style={{borderWidth:1, borderRadius:5}}>
            <Button title='  Alterar senha  ' color='gray'/>
          </View>
      </View>
    </View>

  );

}

const styles = StyleSheet.create({

  main:{

    flex:1

  },

  cabecalho: {
    flex:0.03,
    backgroundColor:'#19747A',
    justifyContent:'center',
    padding:15

  },
  corpo:{
    
    flex:0.65,
    alignItems: 'center',
    justifyContent:'space-between',
    marginVertical: 30
    

  }
});