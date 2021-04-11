import React from 'react'
import {Text} from 'react-native'
import styles from './styles'

// MODULOS DE COMPONENTES: 

function Comp1(){
    return <Text style={styles.text}>CHEGUEI</Text>
}

function Comp2(){
    return <Text style={styles.text}>NESSA</Text>
}

function Comp3(){
    return <Text style={styles.text}>BAGAÇAAA</Text>
}

export {Comp1, Comp2, Comp3}