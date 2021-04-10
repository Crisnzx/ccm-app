import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Questao(props) {

    function Separator() {

        return (

            <View style={{ height: 30 }} />
        );
    }

    return (

        <View>
            <Separator />
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 24, fontWeight:'bold' }}>{props.title}</Text>
                <Text style={{fontStyle:'italic'}}>Nome do arquivo: {props.nomeArq}</Text>
            </View>
            <Separator />

                <Text style={{textAlign:'justify', padding:15, fontSize:16}}>{props.texto}</Text>
            
        </View>

    );
}