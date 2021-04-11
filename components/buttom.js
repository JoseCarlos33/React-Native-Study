import React from 'react';
import { Button } from 'react-native';

// COMPONENTE BOTAO:

const Buttom = props => {

    function executar(){
        console.warn('Executando!!!')
    }
    return (
        <Button
            title="Executar Console!"
            onPress={executar}
        />
    )
}

export default Buttom;