import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import TelaLogin from './components/TelaLogin/TelaLogin';
import TelaCadastro from './components/TelaCadastro/TelaCadastro';
import TelaMinhaConta from './components/TelaMinhaConta/TelaMinhaConta';



export default function App(){

  return (
    
      <TelaLogin/>
    
  );
}



