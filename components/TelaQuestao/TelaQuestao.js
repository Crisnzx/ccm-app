import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import TopBar from '../Layout/TopBar';
import BotBar from '../Layout/BotBar';
import Questao from './Questao';
import CasoTeste from './CasoTeste';

export default function TelaQuestao() {


    return (

        <SafeAreaProvider>
            <SafeAreaView style={styles.main}>
                <TopBar />
                <ScrollView>
                    <View style={styles.conteudo}>
                        <Questao
                            title='Baldes'
                            nomeArq='baldes.js'
                            texto={textoQuestao} />
                        <CasoTeste
                            entrada={'6\n9'}
                            saida={'CAFE'}
                        />
                        <CasoTeste
                            entrada={'8\n8'}
                            saida={'CANA-DE-ACUCAR'}
                        />
                        <CasoTeste
                            entrada={'5\n91'}
                            saida={'CANA-DE-ACUCAR'}
                        />
                        <CasoTeste
                            entrada={'401\n322'}
                            saida={'CAFE'}
                        />
                    </View>
                </ScrollView>
                <BotBar />
            </SafeAreaView>
        </SafeAreaProvider>


    );


}

const styles = StyleSheet.create({

    main: {
        flex: 1

    },

    conteudo: {

        flex: 1,
        alignItems: 'center'

    }

});

const textoQuestao =
    `
Hugo é um europeu português do final do século XVIII, onde a plantação de cana-de-açúcar e café estavam no auge. Por isso, ele tem um terreno que usa para plantar cana-de-açúcar e café. Cada área de 1km² corresponde a um tipo de planta, e suas áreas adjacentes, ao segundo tipo. Dado um terreno de comprimento C e largura L em km, determine o tipo de plantação da área no canto inferior direito, dado que a primeira plantação, no canto superior esquerdo, sempre será de cana-de-açúcar.

Entrada


A primeira  linha de entrada possui um número inteiro C, que representa o comprimento do terreno, em km. A segunda linha de entrada possui um número inteiro L, que representa a largura do terreno, em km.

Saída

Imprima uma linha na saída. A linha deve conter um String representando a plantação da área no canto inferior direito do terreno: “CANA-DE-ACUCAR” ou “CAFE”.
`