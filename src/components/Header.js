import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = ({title,icon}) => {
  return (
    <View style={styles.header}>
    <TouchableOpacity style={styles.backBtn}>
    <Image source={icon} style={styles.back}/>
    </TouchableOpacity>
    <Text style={[styles.title,{marginLeft:20}]}>{title}</Text>
    </View>
  )
}

export default Header

const styles=StyleSheet.create({
    header:{
        height:60,
        width:'100%',
        flexDirection:'row',
        backgroundColor:'#fff',
        elevation:5,
        alignItems:'center',
        paddingLeft:20
    },
    back:{
        height:30,
        width:30
    },
    backBtn:{
       width:30,
       height:30,
       borderRadius:15
    },
    title:{
        fontSize:18,
        fontWeight:'600'
    }
})