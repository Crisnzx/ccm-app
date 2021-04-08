import React, {useState} from 'react';
import { TextInput, Text, View } from 'react-native';

export default function Input(props){

  let [nome,setNome] = useState("");
  return (
    <View>
        <Text>{props.title}</Text>
        <TextInput
         style={{width:props.width, borderWidth: 1, borderRadius:5}} 
          
         value={nome}
         onChangeText={nome => setNome(nome)} 
       />
      
    </View>

  );

}
