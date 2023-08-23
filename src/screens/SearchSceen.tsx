import { View , Text} from "react-native";
import { FlatList, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Icons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { useGetSearchQuery } from "../store/App.service";
import Card from "../components/Card";
import SearchTitle from "../components/SearchTitle";
import { RootStackScreenProps } from "../navigators/RootNavigator";
export default function SearchScreen({navigation} :  RootStackScreenProps<"SearchScreen">) {
    const [keyword , setKeyword] = useState('')
    const { data, isFetching } = useGetSearchQuery({keyword})
  return (
    <SafeAreaView>
     
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          marginHorizontal: 12,
          backgroundColor: "#DDF0FF",
          borderRadius: 16,
          marginVertical: 16,
          height: 50,
        }}
      >
        <View>
        <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              width: 45,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 52,
              borderWidth: 1,
              borderColor: "#4C9DB8",
            }}
          >
            <Icons name="arrow-back" size={24} color={"#4C9DB8"} />
          </TouchableOpacity> 
        </View>
            
        <TouchableOpacity>
          <Icons
            name="search"
            style={{
              marginHorizontal: 10,
              color: "gray",
              marginTop: 12,
            }}
            size={24}
          />
        </TouchableOpacity>
        <View style={{
            flex:1,
            backgroundColor:'#DDF0FF',
            marginRight: 12,
            borderRadius:12
        }}>
            <TextInput 
                style={{
            width:'100%',
            height:'100%',
            paddingHorizontal:12
                }}
                value={keyword}
                onChangeText={setKeyword}
                placeholder="what are you looking for"
            />
        </View>        
      </View>
      <View>
      {!isFetching && data?.map((item,index)=>(
               <FlatList 
               key={item.id}
               keyExtractor={(item)=>(item.id)}
               data={data}
               renderItem={({item})=>(
               <SearchTitle item={item} navigation={navigation} />
               )}
               />
            ))}
      </View>
    </SafeAreaView>
  );
}
