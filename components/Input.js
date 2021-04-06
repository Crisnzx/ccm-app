import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';

export default function Input(props){

  let [entrada, setE] = React.useState(null);
  return (
    <View>
      <Text>{props.titulo}</Text>
      <TextInput
        style={{borderWidth:1, backgroundColor:'#e2e2e2', borderRadius:3, width:200}}
        value={entrada}
        onChangeText={entrada => setE(entrada)}
      />

      <View style={{alignItems:'flex-end'}}>
       <Image 
       style={{height:23, width:23}} 
       source={require('../assets/lapis.png')}
       />
      </View>
    </View>
  );


}