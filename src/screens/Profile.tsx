import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuth, signOut } from "firebase/auth";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Profile({navigation}:any){
    const auth = getAuth();
    const handleLogout = async () => {
        try {
            signOut(auth).then(() => {
                // Sign-out successful.
              }).catch(() => {
              });
          await AsyncStorage.removeItem('userData');
          navigation.navigate('Login')
          console.log('User logged out successfully');
        } catch (error) {
          console.error('Error logging out:', error);
        }
      };
    return(
        <View>
            <TouchableOpacity onPress={handleLogout}>
                <Text> Loggout</Text>
            </TouchableOpacity>
        </View>
    )
}