import React from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Input from '../Layout/Input';


export default function TelaCadastro(props) {
    return (

        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor:'#24C7B1' }}>
                <LinearGradient
                    colors={['#24C7B1', '#19747A']}
                    style={styles.fundo}
                >
                    <View style={styles.card}>

                        <Image style={styles.logo} source={require('../../assets/logoCCM.png')} />

                        <View style={{ flex: 0.8, justifyContent: 'space-between' }}>
                            <Input title="Nome de Usuário" width={180} />
                            <Input title="Email" width={180} />
                            <Input title="Senha" width={180} />
                            <Input title="Confirmar Senha" width={180} />
                        </View>

                        <View style={styles.botao}>
                            <Button title='Cadastrar' color="#24C7B1" 
                            onPress={() => props.navigation.navigate('Login')} />
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
        backgroundColor: 'white',
        flex: 0.8,
        width: '75%',
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-around'


    },

    logo: {
        height: 107,
        width: 137
    },

    botao: {
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 3
    }
});