import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Icons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "@react-navigation/native";
import { useDeleteCartitemMutation, useGetCartsQuery } from "../store/App.service";

export default function Cart() {
  const { colors } = useTheme();
  const [count, setCount] = useState(1);
  const {data, isFetching} =useGetCartsQuery({})  
  const [deleteCartitem] = useDeleteCartitemMutation()
  const handleDeleteItem = async (itemId:any) => {
    try {
      await deleteCartitem(itemId);
      alert('remove success')
    } catch (error) {
    }
  };
  const minus=()=>{
    if(count ===1){
      return
    }else{
      setCount(count-1)
    }
  }
  const plus=()=>{
    if(count ===10){
      return
    }else{
      setCount(count+1)
    }
  }

  return (
    <ScrollView>
      <SafeAreaView>
        <View>
        {!isFetching && data?.map((item,index)=>(
            <View
            key={item.id}
            style={{
              width: '100%',
              height: 100,
              marginVertical: 6,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '30%',
                height: 100,
                padding: 14,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F0F0F3',
                borderRadius: 10,
                marginRight: 22,
              }}>
              <Image
                source={{uri : item.imageUrl}}
                style={{
                  width:  100,
                  height: 100,
                  resizeMode: 'contain',
                  borderRadius :10
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                height: '100%',
                justifyContent: 'space-around',
              }}>
              <View style={{}}>
                <Text
                  style={{
                    fontSize: 14,
                    maxWidth: '100%',
                    color: '#000000',
                    fontWeight: '600',
                    letterSpacing: 1,
                  }}>
                  {item.title}
                </Text>
                <View
                  style={{
                    marginTop: 4,
                    flexDirection: 'row',
                    alignItems: 'center',
                    opacity: 0.6,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '400',
                      maxWidth: '85%',
                      marginRight: 4,
                    }}>
                    &#8377;{item.price}
                  </Text>
                  <Text>
                    (~&#8377;
                    {item.price + item.price / 20})
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      borderRadius: 100,
                      marginRight: 20,
                      padding: 4,
                      borderWidth: 1,
                      borderColor: '#B9B9B9',
                      opacity: 0.5,
                    }}>
                      <TouchableOpacity onPress={minus}>
                      <Icons name="remove"  style={{
                        fontSize: 16,
                        color: '#777777',
                      }}/>
                      </TouchableOpacity>
                    
                     
                  </View>
                  <Text>{count}</Text>
                  <View
                    style={{
                      borderRadius: 100,
                      marginLeft: 20,
                      padding: 4,
                      borderWidth: 1,
                      borderColor: '#B9B9B9',
                      opacity: 0.5,
                    }}>
                      <TouchableOpacity onPress={plus}>
                      <Icons name="add"  style={{
                        fontSize: 16,
                        color: '#777777',
                      }}/>
                      </TouchableOpacity>
                 
                  </View>
                </View>
                <TouchableOpacity onPress={() => handleDeleteItem(item.id)}>
                <Icons name="backspace"   
                style={{
                      fontSize: 16,
                      color: '#777777',
                      backgroundColor: '#F0F0F3',
                      padding: 8,
                      borderRadius: 100,
                    }}/>

                </TouchableOpacity>
              </View>
            </View>
          </View>
              ))}
         
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
