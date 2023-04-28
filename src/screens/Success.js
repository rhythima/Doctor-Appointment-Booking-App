import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Success = ({navigation}) => {
  return (
    <View style={styles.container}>
     <Image source={require('../images/success.png')} style={styles.success}/>
     <Text style={styles.msg}>Appointment Booked Successfully</Text>
     <TouchableOpacity
     onPress={()=>{
        navigation.navigate('Home')
     }}>
        <Text style={styles.gotohome}>Go To Home</Text>
     </TouchableOpacity>
    </View>
  )
}

export default Success

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    success:{
        width:100,
        height:100
    },
    msg:{
        fontSize:18,
        fontWeight:'800',
        marginTop:20
    },
    gotohome:{
        width:150,
        height:50,
        justifyContent:'center',
        borderRadius:10,
        alignItems:'center',
        borderWidth:0.5,
        marginTop:30,
        textAlign:'center',
        borderWidth:0.5
    }
})