import { View, Text,StyleSheet,FlatList,Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const Pending = () => {
  return (
    <View style={styles.container}>
     <Header icon={require('../images/back.png')} title={'Pending Appointments'}/>
     <View>
        <FlatList data={[1,1,1,1,1]}
            renderItem={({item,index})=>{
                return( <View style={styles.itemView}>
                    <Image source={require('../images/doctor.jpg')} style={styles.docImage}/>
                    <View>
                    <Text style={styles.name}>{'Dr. Drake Romoray'}</Text>
                    <Text style={styles.timing}>{'08:10PM'}</Text>
                    </View>
                    <Text style={styles.status}>{'Pending'}</Text>
                </View>)
            }}
        />
     </View>
    </View>
  )
}

export default Pending

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    itemView:{
        width:'94%',
        height:100,
        borderRadius:10,
        borderWidth:0.5,
        alignSelf:'center',
        marginTop:10,
        flexDirection:'row',
        alignItems:'center'
    },
       docImage:{
        width:80,
        height:80,
        borderRadius:30,
        marginLeft:10
       },
    name:{
        fontSize:18,
        fontWeight:'600',
        marginLeft:20
    },
    timing:{
        fontSize:16,
        marginLeft:20,
        marginTop:5
    },
    status:{
        marginLeft:40,
        borderRadius:10,
        backgroundColor:'#f2f2f2',
        padding:5,
        color:'orange'
    }
})