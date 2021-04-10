import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function BotaoQuest(props) {

    return (
        <View>
            <TouchableOpacity>
                <LinearGradient 
                colors={['#BABABA','#E5E5E5','#E5E5E5','#BABABA']}
                locations={[0,0.2,0.8,1]}
                style={styles.botao}
                >
                    <Text style={styles.title}>{props.title}</Text>
                </LinearGradient>
            </TouchableOpacity>
            <View style={styles.separator}/>
        </View>
    );

}

const styles = StyleSheet.create({

    botao: {

        height: 54,
        width: '100%',
        borderWidth: 2,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center'


    },

    title: {

        fontSize: 16

    },

    separator:{

        height:30

    }



});
