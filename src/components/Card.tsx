import { TouchableOpacity, View, Image, Text } from "react-native";

interface Card{
    price : number,
    imageUrl: string,
    onpress : () => void;
}
export default function Card({price,imageUrl,onpress}: Card){
    return(
        <TouchableOpacity
        onPress={onpress}
        style={{
          flex: 1,
          position: "relative",
          overflow: "hidden",
          borderRadius: 24,
        }}
      >

        <Image
        source={{
          uri: imageUrl,
        }}
        resizeMode="cover"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      />
        <View
          style={{
            position: "absolute",
            left: 12,
            top: 12,
            paddingHorizontal: 12,
            paddingVertical: 8,
            backgroundColor: "rgba(0,0,0,0.25)",
            borderRadius: 100,
          }}
        >
             <Text style={{ fontSize: 14, fontWeight: "600", color: "#fff" }}>
          ${price}
        </Text>
        </View>
      </TouchableOpacity>
    )
}