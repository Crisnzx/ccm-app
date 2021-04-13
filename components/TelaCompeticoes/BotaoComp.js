import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function BotaoComp(props) {


    return (

        <View>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={()=> props.navigation.navigate('Competicao') }
            >
                <LinearGradient
                    colors={['#0C0C0C', '#323232', '#0C0C0C']}
                    locations={[0, 0.5, 1]}
                    style={styles.buttonComp}
                >
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.description}>{props.description}</Text>
                </LinearGradient>
            </TouchableOpacity>
            <View style={styles.separator} />
        </View>

    );

}


const styles = StyleSheet.create({

    buttonComp: {

        backgroundColor: '#eaeaea',
        height: 125,
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly'


    },

    title: {

        color: 'white',
        fontSize: 25


    },

    description: {

        color: 'white',
        fontSize: 16,
        textAlign:'center'
    },

    separator: {

        height: 30

    }

});