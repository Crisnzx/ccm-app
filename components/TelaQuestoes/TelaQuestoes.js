import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import BotBar from '../Layout/BotBar';
import BotaoQuest from './BotaoQuest';
export default function TelaQuestoes() {

    return (

        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.cabecalho}>
                    <Text style={styles.texto}>Questões</Text>
                </View>
                <ScrollView>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{width:'80%'}}>
                            <View style={{ height: 30 }} />
                            <BotaoQuest title='1- Ração' />
                            <BotaoQuest title='2- Baldes' />
                            <BotaoQuest title='3- Plantação' />
                            <BotaoQuest title='4- Alienígena' />
                            <BotaoQuest title='5- Projeto GENOMA' />
                        </View>
                    </View>
                </ScrollView>
                <BotBar />
            </SafeAreaView>
        </SafeAreaProvider>


    );

}

const styles = StyleSheet.create({

    cabecalho: {
        height: 56,
        backgroundColor: '#19747A',
        alignItems: 'center',
        justifyContent: 'center'

    },

    texto: {

        color: 'white',
        fontSize: 22
    }
});