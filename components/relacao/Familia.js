import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

export default props => {
  return (
        <View style={styles.container}>
            <Text style={styles.Text}>Membros da Familia:</Text>
            {props.children}
        </View>
  )
}

