import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function BotaoComp(props) {


    return (

        <View>
            <TouchableOpacity>
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
        width: 350,
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 5,
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
        fontSize: 16
    },

    separator: {

        height: 30

    }

});