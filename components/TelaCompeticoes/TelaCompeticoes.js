import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import TopBar from '../Layout/TopBar';


export default function TelaCompeticoes() {

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.main}>
                <TopBar/>
                
            </SafeAreaView>
        </SafeAreaProvider>

    );

}

const styles = StyleSheet.create({

    main:{
        flex:1
    }

});