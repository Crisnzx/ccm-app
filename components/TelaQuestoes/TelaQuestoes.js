import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import BotBar from '../Layout/BotBar';
import BotaoQuest from './BotaoQuest';

export default function TelaQuestoes(props) {

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
                            <BotaoQuest navigation={props.navigation} title='1- Ração' />
                            <BotaoQuest navigation={props.navigation} title='2- Baldes' />
                            <BotaoQuest navigation={props.navigation} title='3- Plantação' />
                            <BotaoQuest navigation={props.navigation} title='4- Alienígena' />
                            <BotaoQuest navigation={props.navigation} title='5- Projeto GENOMA' />
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