import { View , Image , Text} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { RootStackScreenProps } from "../navigators/RootNavigator"
import { useNavigation } from "@react-navigation/native"
import { TabsStackScreenProps } from "../navigators/TabsNavigator"

interface SearchTitle{
    item: Product,
    navigation : any
}
const SearchTitle = ({item , navigation} :SearchTitle)=>{
   
    return(
        <View>
            <TouchableOpacity 
            onPress={()=>navigation.navigate('Details',{
                id: item.id,
              })}
            style={{
                flex:1,
                justifyContent:'space-between',
                alignItems: 'center',
                marginBottom:12,
                flexDirection:'row',
                padding:16,
                borderRadius:12,
                backgroundColor: '#FFF',
                shadowColor:'#FAFAFC'
            }}>
                <View style={{ width:70,
                        backgroundColor:'#DDF0FF',
                        justifyContent: 'center',
                        alignContent: 'center'}}>
                    <Image style={{
                       width:'100%',
                       height: 65,
                       borderRadius:12,
                       resizeMode:'cover'
                    }} source={{uri : item.imageUrl}}/>
                </View>
                <View style={{
                    flex:1,
                    marginHorizontal:16
                }}>
                    <Text style={{
                        fontWeight: '600',
                        fontSize:16,
                        color: '#201F1E'
                    }}>
                        {item.title}$
                    </Text>
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
            </TouchableOpacity>
        </View>
    )
}
export default SearchTitle