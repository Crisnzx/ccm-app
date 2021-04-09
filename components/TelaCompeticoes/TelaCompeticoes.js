import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import TopBar from '../Layout/TopBar';
import BotaoComp from './BotaoComp';


export default function TelaCompeticoes() {

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.main}>
            <TopBar filter={true} />
                <ScrollView> 
                    <View style={{ alignItems: 'center' }}>
                        <View style={{height:20}}></View>
                        <BotaoComp title='OCI' description='Olimpíada CODEsp de Informática' />
                        <BotaoComp title='OPI' description='Olimpíada Paraibana de Informática' />
                        <BotaoComp title='ORI' description='Olimpíada Regional de Informática' />
                        <BotaoComp title='OBI' description='Olimpíada Brasileira de Informática' />
                        <BotaoComp title='ONI' description='Olimpíada Nordestina de Informática' />
                        <BotaoComp title='OEI' description='Olimpíada Esperancense de Informática' />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>

    );

}

const styles = StyleSheet.create({

    main: {
        flex: 1
    }

});