import React from 'react';
import { DrawerLayoutAndroid, View } from 'react-native';


const layout = props => {
  return(  
        <View style={{
            height: 50,
            width: props.lado,
            backgroundColor: props.cor || '#000'
        }} 
        />
    )
}

export default layout
