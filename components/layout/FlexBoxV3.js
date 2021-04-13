import React from 'react';
import { View, StyleSheet} from 'react-native';
import Quadrado from './quadrado'

export default props => {
  return(  
        <View style={style.FlexV1}>
            <Quadrado cor='#ff801a' lado={50}/>
            <Quadrado cor='#50d1f6' lado={50}/>
            <Quadrado cor='#dd22c1' lado={50}/>
            <Quadrado cor='#8312ed' lado={50}/>
            <Quadrado cor='#36c9a7' lado={50}/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1:{
        flexGrow: 1,
        width:'100%',
        alignItems: 'stretch',
        justifyContent:'space-between',
        backgroundColor:'#000'
    }
})

 