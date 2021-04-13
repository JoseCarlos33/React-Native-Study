import React, { Component } from "react";
import { TextInput, Text } from "react-native";
import styles from "../styles";


export default class Mega extends Component{
    
    state = {
        qtdeNumeros: this.props.qtdeNumeros
    }

    alterarQtdeNumero = (qtde) => {
        this.setState({qtdeNumeros: qtde})
    }

    render(){
        return(
            <>
                <Text style={styles.text}>
                    Gerador de Mega-Sena
                    {this.state.qtdeNumeros}
                </Text>
                <TextInput
                    keyboardType = {'numeric'}
                    style = {{borderBottomWidth: 1}}
                    placeholder = "Qtde de Números"
                    value = {this.state.qtdeNumeros}
                    onChangeText = {this.alterarQtdeNumero}
                />
            </>
        )
    }
}