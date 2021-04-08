import React from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import TopBar from '../Layout/TopBar';
import Input from '../Layout/Input';

export default function TelaPrivacidade() {

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.main}>
                <TopBar />
                <View style={styles.corpo}>
                    <Image
                        style={{ height: 91, width: 86 }}
                        source={require('../../assets/configuracao.png')} />
                    <View style={{flex:0.5, justifyContent:'space-between'}}>
                        <Input title='Digite a antiga senha' width={200} />
                        <Input title='Digite a nova senha' width={200} />
                        <Input title='Confirme a senha' width={200} />
                    </View>
                    <View style={{ borderWidth: 1, borderRadius: 5 }}>
                        <Button title='Alterar senha' color='#19747A' />

                    </View>
                </View>

            </SafeAreaView>
        </SafeAreaProvider>


    );

}

const styles = StyleSheet.create({

    main: {

        flex: 1
    },
    corpo: {

        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'space-around'

    }


});