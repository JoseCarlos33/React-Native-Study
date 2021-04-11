import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import styles from './styles';

// COMPONENTE FUNCIONAL COM ESTADOS:

const components = props => {
    const [numero, setNumero] = useState(props.inicial)
    
    const inc = () => setNumero(numero + 1)
    const dec = () => setNumero(numero - 1)

  return( 
    <View>
        <Text style={styles.text}>{numero}</Text>
        <Button title="+" onPress={inc} style={styles.botao}/>
        <Button title="-" onPress={dec} style={styles.botao}/>
    </View>
  )
}

export default components;