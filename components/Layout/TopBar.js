import React from 'react';
import { View, Image, StyleSheet} from 'react-native';

export default function TopBar(){

    return(
        <View style={styles.cabecalho}>
            <Image 
            style={{width:24, height:22}}
            source={require('../../assets/menu.png')}
            />
          </View>
    );

}

const styles = StyleSheet.create({


  cabecalho: {
    height:56,
    backgroundColor:'#19747A',
    justifyContent:'center',
    padding:15

  }

});