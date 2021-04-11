import React from 'react';
import { View } from 'react-native';
import styles from './styles';

// COMPONENTE RETORNANDO NUMERO ALEATÓRIO:

const Random = (props) => {
    const randomNum = Math.floor((Math.random() * props.max) + props.min)
  return <View style={styles.text}>{randomNum}</View>;
}

export default Random;