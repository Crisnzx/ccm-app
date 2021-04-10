import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Tupla(props) {

    return (
        <View style={styles.tupla}>
            <Text style={styles.txt}>{props.atributo + ':'}</Text>
            <Text>{props.conteudo}</Text>
        </View>

    );

}

const styles = StyleSheet.create({

    tupla: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    txt: {

        fontWeight: 'bold',
        fontSize: 18

    }

});

