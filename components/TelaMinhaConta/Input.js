import React from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';

export default function Input(props){

  let [entrada, setE] = React.useState(null);
  return (
    <View>
      <Text>{props.titulo}</Text>
      <TextInput
        style={styles.input}
        value={entrada}
        onChangeText={entrada => setE(entrada)}
      />

      
    </View>
  );


}

const styles = StyleSheet.create({

  input: {
    borderWidth:1,
    backgroundColor:'#e2e2e2',
    borderRadius:3,
    width:200
    
    

  }

});