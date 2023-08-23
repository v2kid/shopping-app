import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';




const Login = ({ navigation } : any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading , setLoading] = useState(false)
  const auth =  FIREBASE_AUTH

  const signIn = async () => {
        setLoading(true)
        try {
            const  response = await signInWithEmailAndPassword(auth,email,password)
            console.log(response)
            alert('check your email')
            navigation.navigate('TabsStack');
        }catch (error) {
            console.log(error)
            alert('sign in failed' + error)
        }finally {
            setLoading(false)
        }
  };

  const signUp = async ()=>{
    setLoading(true)
    try{
        const response = await createUserWithEmailAndPassword(auth,email,password)
        console.log(response)
        alert('success signup')
    }catch(error) {
        console.log(error)
        alert('failed')
    }finally{
        setLoading(false)
    }
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      {loading ? <ActivityIndicator size='large'/> : 
      <>
       <TouchableOpacity style={styles.button} onPress={signIn}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity> 
      <TouchableOpacity style={styles.button} onPress={signUp}>
        <Text style={styles.buttonText}>SignUp</Text>
      </TouchableOpacity> 
      </>
      }
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Login;