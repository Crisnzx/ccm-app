import React from 'react';
import { Text, Button, Image, View, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Input from '../Layout/Input';

export default function TelaLogin() {
    return (

        <SafeAreaProvider>
            <SafeAreaView style={{flex:1, backgroundColor:'#24C7B1'}}>
                <LinearGradient
                colors={['#24C7B1', '#19747A']}
                style={styles.fundo}
                >
                <View style={styles.card}>
                    <Image style={styles.logo} source={require('../../assets/logoCCM.png')} />
                    <View style={{ flex: 0.45, justifyContent: 'space-between' }}>
                        <Input title="Email" width={200} />
                        <Input title="Senha" width={200} />
                    </View>
                    <View style={styles.layoutBotao}>
                        <View style={styles.botao}>
                            <Button title='Cadastrar' color="#24C7B1" />
                        </View>
                        <View style={styles.botao}>
                            <Button title='Login' color="#24C7B1" />
                        </View>
                    </View>
                </View>
                </LinearGradient>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({

    fundo: {
        backgroundColor: '#19747A',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {

        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        flex: 0.7,
        width: '75%',
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 20

    },
    logo: {
        height: 128,
        width: 164
    },

    layoutBotao: {
        width: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    
    botao:{

        borderWidth: 1,
        borderRadius: 3

    }
});