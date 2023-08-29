import React, { useEffect } from 'react'
import {View,Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { loggin } from '../store/Appslice';


const Splash = ({navigation} : any) => {
    const dispatch = useDispatch()
    useEffect(()=>{
        setTimeout(()=>{
            AsyncStorage.getItem('userData').then( userData => {
                if (userData) {
                  const parsedUserData = JSON.parse(userData);
                   dispatch(loggin(parsedUserData))
                  console.log(parsedUserData)
                  navigation.navigate('TabsStack')
                } else {
                    navigation.navigate('Login')
                }
              });
        },1000)
    })
    return (
        <View style={{ 
            position : 'absolute',
            top : 0,
            bottom : 0,
            left  :0 ,
            right : 0,
            backgroundColor : "#4D4A95"
        }}>
            <View style={{ 
                flex : 1 ,
                justifyContent : 'center',
                alignItems : 'center'
            }}>
             <Image source={require('../assets/images/dota2.png')} style={{width:100,height:100}}  /> 
            </View>
        </View>
    )
}

export default Splash
