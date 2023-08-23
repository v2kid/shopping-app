import { useRef } from "react";
import { Text, View, Image, Dimensions, StyleSheet, Animated} from "react-native";
import { FlatList } from "react-native-gesture-handler";
const {width, height} = Dimensions.get('screen')
const data = [
    'https://i.pinimg.com/564x/a3/27/87/a327874f2ab4314ac25f550ecba9910c.jpg',
    'https://i.pinimg.com/750x/01/ef/c4/01efc4988062064e2f982854ee98beb9.jpg',
    'https://i.pinimg.com/564x/8a/28/78/8a2878306a2da6e5df521ba9061e62fa.jpg'
]
const imageW = width *0.7
const imageH = height*0.54
export default function Favorite(){
    const scrollX= useRef(new Animated.Value(0)).current;
        return(
            <View style={{flex : 1, backgroundColor: '#000'}}>
                <View style={StyleSheet.absoluteFill}>
                    {data.map((image,index)=>{
                        const inputRange = [
                            (index-1) * width,
                            index *width,
                            (index +1) *width
                        ]
                        const opacity = scrollX.interpolate({
                            inputRange,
                            outputRange: [0,1,0]
                        })
                        return (
                            <Animated.Image key={`image-${index}`}
                             source={{uri : image}} 
                             style={[StyleSheet.absoluteFillObject,{
                                opacity
                             }]}
                              blurRadius={50} />
                        )
                    })}
                </View>
                <FlatList 
                data={data}
                keyExtractor={(_,index)=>index.toString()}
                horizontal
                pagingEnabled
                renderItem={({item})=>{
                    return (
                        <View style={{width, justifyContent:'center', alignItems : 'center'}}>
                            <Image source={{uri : item}} style={{
                                width: imageW,
                                height: imageH,
                                resizeMode: 'cover',
                                borderRadius : 16
                            }} />
                        </View>
                    )
                }}
                >
                </FlatList>

            </View>
        )
}