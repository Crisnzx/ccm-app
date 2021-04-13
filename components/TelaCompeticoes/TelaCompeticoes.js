import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import TopBar from '../Layout/TopBar';
import BotaoComp from './BotaoComp';


export default function TelaCompeticoes(props) {

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.main}>
                <TopBar filter={true} />
                <ScrollView>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{width:'85%'}}>
                            <View style={{ height: 20 }}></View>
                            <BotaoComp navigation={props.navigation} title='OCI' description='Olimpíada CODEsp de Informática' />
                            <BotaoComp navigation={props.navigation} title='OPI' description='Olimpíada Paraibana de Informática' />
                            <BotaoComp navigation={props.navigation} title='ORI' description='Olimpíada Regional de Informática' />
                            <BotaoComp navigation={props.navigation} title='OBI' description='Olimpíada Brasileira de Informática' />
                            <BotaoComp navigation={props.navigation} title='ONI' description='Olimpíada Nordestina de Informática' />
                            <BotaoComp navigation={props.navigation} title='OEI' description='Olimpíada Esperancense de Informática' />
                        </View>
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