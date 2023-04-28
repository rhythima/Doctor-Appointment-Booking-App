import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, TextInput,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import CommonButton from '../components/CommonButton'

const BookAppointment = ({navigation}) => {
    const [selectedSlot, setSelectedSlot] = useState(-1)
    const [selectedGender, setSelectedGender] = useState(0)
    const[selectedDay,setSelectedDay]=useState(-1)
    const [slots, setSlots] = useState([
        { slot: '10:00-12:00PM', selected: false },
        { slot: '12:00-02:00PM', selected: false },
        { slot: '02:00-04:00PM', selected: false },
        { slot: '04:00-06:00PM', selected: false },
        { slot: '06:00-08:00PM', selected: false },
        { slot: '08:00-10:00PM', selected: false },
    ])

    const[days,setDays]=useState([])

    useEffect(()=>{
        // console.log(new Date().getMonth()+1)
        let DaysList=[]
        for(let i=1;i<=getDays(new Date().getMonth()+1);i++){
            DaysList.push({day:i,selected:false})
        }
        setDays(DaysList)
    },[])

    const getDays=month=>{
        let days=0;
        if(month==1){
            days=31
        }else if(month==2){
            days=28
        }else if(month==3){
            days=31
        }else if(month==4){
            days=30
        }else if(month==5){
            days=31
        }else if(month==6){
            days=30
        }else if(month==7){
            days=31
        }else if(month==8){
            days=31
        }else if(month==9){
            days=30
        }else if(month==10){
            days=31
        }else if(month==11){
            days=30
        }else if(month==12){
            days=31
        }
        return days
    }

    return (
        <ScrollView style={styles.container}>
        <View style={styles.container}>
            <Header icon={require('../images/back.png')} title={'Book Appointment'} />
            <Image source={require('../images/doctor.jpg')} style={styles.docImg} />
            <Text style={styles.name}>Doctor Jake</Text>
            <Text style={styles.spcl}>Skin Specialist</Text>
            <Text style={styles.heading}>Select Date</Text>
            <View style={{marginTop:10}}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={days}
                    keyExtractor={({item,index})=>index}
                    renderItem={({item,index})=>{
                        return(
                            <TouchableOpacity style={{width:60,height:70,borderRadius:20, justifyContent:'center',alignItems:'center',backgroundColor:selectedDay==index?'blue':'white',borderWidth:selectedDay==index?0:1,marginLeft:10 }}
                            onPress={()=>{
                                // alert(new Date().getDate())   gives us today's date
                                if(item.day<new Date().getDate()){
                                }else{
                                    setSelectedDay(index)}
                                }
                                }
                            >
                                <Text style={{color:selectedDay==index?'#fff':'blue'}}>{item.day}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>

            <Text style={styles.heading}>Available Slots</Text>

            <View>
                <FlatList
                    numColumns={2}
                    data={slots}
                    keyExtractor={({item,index})=>index}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity style={[styles.timeSlot, { borderColor: selectedSlot == index ? 'blue' : 'black' }]}
                                onPress={() => {
                                    setSelectedSlot(index)
                                }}>
                                <Text style={{ color: selectedSlot == index ? 'blue' : 'black' }}>{item.slot}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>

            <Text style={styles.heading}>Patient Name</Text>
            <TextInput style={styles.nameInput} placeholder={'Enter Name'} />

            <Text style={styles.heading}>Select Gender</Text>
            <View style={styles.genderView}>
                <TouchableOpacity style={[styles.gender, { borderWidth: 1, borderColor: selectedGender == 0 ? 'blue' : 'black' }]} onPress={() => { setSelectedGender(0) }}>
                    <Image
                        source={require('../images/male.png')}
                        style={{ width: 24, height: 24 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.gender, { borderWidth: 1, borderColor: selectedGender == 1 ? 'pink' : 'black' }]} onPress={() => { setSelectedGender(1) }}>
                    <Image
                        source={require('../images/female.jpg')}
                        style={{ width: 24, height: 24 }}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.btnView}></View>
            <CommonButton w={200} h={45} txt={'Book Now'} status={true}
                onClick={()=>{navigation.navigate('Success')}}
            />
        </View>
        </ScrollView>
    )
}

export default BookAppointment

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    docImg: {
        width: 150,
        height: 150,
        marginTop: 20,
        alignSelf: 'center'
    },
    name: {
        fontSize: 20,
        fontWeight: '700',
        alignSelf: 'center',
        marginTop: 10
    },
    spcl: {
        fontSize: 16,
        fontWeight: '700',
        alignSelf: 'center',
        marginTop: 10,
        backgroundColor: '#f2f2f2',
        color: 'green',
        padding: 5,
        borderRadius: 10
    },
    heading: {
        color: '#000',
        fontSize: 15,
        fontWeight: '700',
        marginTop: 30,
        marginLeft: 15
    },
    timeSlot: {
        width: '45%',
        height: 33,
        borderRadius: 10,
        borderWidth: 0.5,
        margin: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nameInput: {
        borderRadius: 10,
        alignSelf: 'center',
        paddingLeft: 20,
        marginTop: 15,
        width: '95%',
        borderWidth: 0.2,
        height: 40
    },
    genderView: {
        marginTop: 25,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row'
    },
    gender: {
        borderRadius: 10,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnView:
    {marginTop:20,marginBottom:20
    }
})

