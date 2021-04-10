import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function CasoTeste(props) {

    return (
       <>
        <View style={styles.tabela}>
            <View style={styles.coluna}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Entrada</Text>
                <Text>{props.entrada}</Text>
            </View>
            <View style={styles.coluna}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Saída</Text>
                <Text>{props.saida}</Text>
            </View>
        </View>
        <View style={{height:20}}/>
        </>

    );

}

const styles = StyleSheet.create({

    tabela: {

        flexDirection: 'row',
        backgroundColor:'#eaeaea',
        justifyContent:'space-around',
        padding:10,
        width:'85%',
        borderRadius:20,
        borderWidth:2
    },

    coluna:{

       
    }

});