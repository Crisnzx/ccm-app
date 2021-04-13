import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TelaLogin from '../components/TelaLogin/TelaLogin';
import TelaCadastro from '../components/TelaCadastro/TelaCadastro';
import TelaCompeticoes from '../components/TelaCompeticoes/TelaCompeticoes';
import TelaMinhaConta from '../components/TelaMinhaConta/TelaMinhaConta';
import TelaPrivacidade from '../components/TelaPrivacidade/TelaPrivacidade';
import TelaCompeticao from '../components/TelaCompeticao/TelaCompeticao';
import TelaQuestoes from '../components/TelaQuestoes/TelaQuestoes';
import TelaQuestao from '../components/TelaQuestao/TelaQuestao';


const MyStack = createStackNavigator();

export default function Stack(){

    return(
        <MyStack.Navigator initialRouteName={'Login'}>
            <MyStack.Screen name='Login' component={TelaLogin}/>
            <MyStack.Screen name='Cadastro' component={TelaCadastro}/>
            <MyStack.Screen name='Competicoes' component={TelaCompeticoes}/>
            <MyStack.Screen name='Competicao' component={TelaCompeticao}/>
            <MyStack.Screen name='Questoes' component={TelaQuestoes}/>
            <MyStack.Screen name='Questao' component={TelaQuestao}/>
        </MyStack.Navigator>

    );

}