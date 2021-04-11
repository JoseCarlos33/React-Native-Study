import React from 'react';
import { View, Text, FlatList } from 'react-native';
import produtos from './produtos'
import styles from '../styles';

export default props => {
    const produtoRender = ({item: p}) => {
            return <Text>{p.id})  {p.nome} R${p.preco}</Text>
        }
    
  return (
      <View style={styles.container}>
        <Text style={styles.text}>
            Lista de Produtos
        </Text>
        <FlatList
            data = {produtos}
            keyExtractor = {i => `${i.id}`}
            renderItem={produtoRender}
        />
      </View>
  )
}