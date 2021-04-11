import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import estilo from './styles';

export default props => {
  const [nome, setNom] = useState('teste')

  return(
      <View>
          <Text style={estilo.text}>{nome}</Text>
          <TextInput
            placeholder="Digite seu Nome"
            value={nome}
            onChangeText={nome => setNom(nome)}
          />
      </View>
  )
}

 