import { View, Text,StyleSheet,Image } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate('Home')
        }, 3000);
    })
  return (
    <View style={styles.container}>
      <Image source={require('../images/logo.png')} style={styles.logo}/>
      <Text style={styles.title}>EasyDoc +</Text>
    </View>
  )
}

export default Splash

const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        backgroundColor:'lightblue'
    },
    logo:{
        width:300,
        height:300,
        tintColor:'#fff'
    },
    title:{
        color:'#fff',
        fontSize:20,
        fontWeight:'800',
        marginTop:20
    }
})