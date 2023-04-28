import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const CommonButton = ({w,h,txt,onClick,status}) => {
  return (
    <TouchableOpacity
    onPress={()=>{onClick()}}
    style={{alignSelf:'center',marginTop:10,marginBottom:10}}>
        {status?
        (<LinearGradient
        colors={['#009FFD','#2A2A72']}
        style={{width:w,height:h,justifyContent:'center',alignItems:'center',borderRadius:10}}>
        <Text style={{color:'#fff',fontSize:16}}>{txt}</Text>
        </LinearGradient>)
        :
        (<LinearGradient
        colors={['#8e8e8e','#f5f5f5']}
        style={{width:w,height:h,justifyContent:'center',alignItems:'center',borderRadius:10,opacity:.5}}>
        <Text style={{color:'#000000',fontSize:16}}>{txt}</Text>
        </LinearGradient>)
        }
    </TouchableOpacity>
  )
}

export default CommonButton