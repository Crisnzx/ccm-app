import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function TopBar(props) {

  if (props.filter) {

    return (
      <View style={styles.cabecalho2}>

        <TouchableOpacity>
          <Image
            style={{ width: 24, height: 22 }}
            source={require('../../assets/menu.png')}
          />
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Image
            style={{ width: 30, height: 30 }}
            source={require('../../assets/filtro.png')}
          />
        </TouchableOpacity>
      </View>
    );

  } else {

    return (
      <View style={styles.cabecalho}>
        <Image
          style={{ width: 24, height: 22 }}
          source={require('../../assets/menu.png')}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({


  cabecalho: {
    height: 56,
    backgroundColor: '#19747A',
    justifyContent: 'center',
    padding: 15

  },

  cabecalho2: {

    flexDirection: 'row',
    height: 56,
    backgroundColor: '#19747A',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15

  }

});