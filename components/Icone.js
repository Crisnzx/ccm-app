import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Icone(){

  return (

    <View style={{alignItems:'center'}}>
        <Image 
        style={{width:100, height:100}}
        source={require('../assets/usuario.png')}
        />
        <Text style={{fontSize:20, fontWeight:'bold'}}>Usuario</Text>
    </View>

  );

}