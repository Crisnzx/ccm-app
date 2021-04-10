import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function BotBar() {

    return (

        <View style={styles.barra}>
            <TouchableOpacity>
                <Image
                    style={{ width: 30, height: 30, marginLeft: 15 }}
                    source={require('../../assets/voltar.png')}
                />
            </TouchableOpacity>
        </View>

    );

}

const styles = StyleSheet.create({

    barra: {

        height: 56,
        justifyContent: 'center',
        backgroundColor: '#19747A'
    }

});