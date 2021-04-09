import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function BotBar() {

    return(

        <View style={styles.barra}>
            <Image 
            style={{width:30, height:30}}
            source={require('../../assets/voltar.png')} 
            />
        </View>

    );

}

const styles = StyleSheet.create({

    barra:{

        height:56,
        padding:15,
        backgroundColor:'#19747A'
    }

});