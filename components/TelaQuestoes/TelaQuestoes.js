import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import BotBar from '../Layout/BotBar';
export default function TelaQuestoes() {

    return (

        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.cabecalho}>
                    <Text style={styles.texto}>Questões</Text>
                </View> 
                <ScrollView>


                </ScrollView>

                <BotBar/>
            </SafeAreaView>
        </SafeAreaProvider>


    );

}

const styles = StyleSheet.create({

    cabecalho: {
        height: 56,
        backgroundColor: '#19747A',
        alignItems:'center',
        justifyContent:'center'

    },

    texto:{

        color:'white',
        fontSize:22
    }
});