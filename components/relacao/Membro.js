import React from 'react';
import { Text } from 'react-native';
import styles from '../styles';

export default props => {
  return (
      <Text style={styles.text}>{props.nome} {props.sobrenome}</Text>
  )
}

 