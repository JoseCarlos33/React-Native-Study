import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'

// COMPONENTE RENDERIZAÇÃO CONDICIONAL:

const compCondicional = ({num = 0}) => {
  return (
        <View>
            <Text style={styles.text}>O resultado é:</Text>
            {num % 2 === 0
                ? <Text style={styles.text}>Par</Text>
                : <Text style={styles.text}>Ímpar</Text>
            }
        </View> 
    )
}

export default compCondicional;