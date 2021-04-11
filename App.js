import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import styles from './components/styles'

import InputNome from './components/Input'
// import ListaProd2 from './components/listaProdutos/listaProdutosV2'
// import ListaProd from './components/listaProdutos/listaProdutos'
// import Familia from './components/relacao/Familia'
// import Membro from './components/relacao/Membro'
// import CompCondicional from './components/CompCondicional'
// import CompState from './components/CompFuncionalState'
// import Botao from './components/buttom'
// import Random from './components/Random'
// import MinMax from './components/MinMax'
//import {Comp1, Comp2, Comp3} from './components/moduleSystem'

export default function App() {
  return (
    <View style={styles.container}>
      <InputNome/>
      {/* <ListaProd2 />  */}
      {/* <ListaProd /> */}
      {/* <Familia>
        <Membro nome="José Carlos" sobrenome="Noronha"/>
        <Membro nome="Gabriela" sobrenome="Noronha"/>
      </Familia>

      <Familia>
        <Membro nome="João" sobrenome="Silva"/>
        <Membro nome="Amanda" sobrenome="Silva"/>
      </Familia> */}

      {/* <CompCondicional num={2}/> */}
      {/* <CompState inicial={9}/> */}
      {/* <Botao /> */}
      {/* <Random min="1" max="10"/> */}
      {/* <MinMax min="3" max="10"/>
      <Comp1 />
      <Comp2 />
      <Comp3 /> */}
      <StatusBar style="auto" />
    </View>
  );
}


