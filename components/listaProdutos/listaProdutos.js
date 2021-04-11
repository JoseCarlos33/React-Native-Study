import React from 'react';
import { View, Text } from 'react-native';
import Produtos from './produtos'
import styles from '../styles';

export default props => {
    function obterLista(){
        return Produtos.map(p=>{
            return <Text key={p.id}>
                {p.id})  {p.nome} R${p.preco}
            </Text>
        })
    }
  return (
      <View style={styles.container}>
        <Text style={styles.text}>
            Lista de Produtos
        </Text>
        {obterLista()}
      </View>
  )
}

