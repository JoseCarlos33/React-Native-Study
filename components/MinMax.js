import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

// COMPONENTE RETORNANDO COMPARAÇÃO DE VALORES

const MinMax = (props) => {
    console.warn(props)
  return <Text style={styles.text}>O {props.max} é maior que o {props.min}!</Text>;
}

export default MinMax;