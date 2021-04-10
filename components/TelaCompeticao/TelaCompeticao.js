import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Tupla from './Tupla';
import BotBar from '../Layout/BotBar';

export default function TelaCompeticao() {

    return (

        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={styles.cabecalho}>
                    <Text style={styles.texto}>Informações</Text>
                </View>
                <View style={styles.conteudo}>
                    <View style={styles.tabela}>
                        <Tupla atributo='Título' conteudo='Olimpíada CODEsp de Informática' />
                        <Tupla atributo='Data' conteudo='22/05/2021' />
                        <Tupla atributo='Horário' conteudo='14:00' />
                        <Tupla atributo='Duração' conteudo='2h' />
                    </View>

                    <Text style={{ fontSize: 22 }}>Cadernos de Questões</Text>

                    <View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 16 }}>Níveis:</Text>
                        </View>
                        <Text />
                        <Button title='Júnior' color='black' />
                        <Text />
                        <Button title='Avançado' color='black' />
                        <Text />
                        <Button title='Sênior' color='black' />
                    </View>

                </View>
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
    },

    conteudo: {

        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'

    },

    tabela: {

        width: '85%',
        borderWidth: 3,
        backgroundColor: '#eaeaea',
        padding: 5


    }


});