import React from 'react'
import { StyleSheet, Text, View,StatusBar,Image } from 'react-native'


const Splash = ({navigation} : any) => {

    setTimeout(()=>{
        navigation.navigate('Login')
    },1000)
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
