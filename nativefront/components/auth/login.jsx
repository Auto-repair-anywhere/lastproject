import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ImageBackground, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import {IP} from "../../ip.json"

import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();
 


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const handleLogin = async () => {
    try {
      await axios.post(`http://${IP}:8080/auth/login`, { email, password }).then(async(res)=>{
        
      if (res.data.user.iduser !== undefined) {
       await AsyncStorage.setItem('userId',JSON.stringify( res.data.user.iduser));
        console.log('Login successful:');
        navigation.navigate('getcar');
      } else {
        console.log('User ID is undefined in the response data.');
      }
      }).catch((err)=>console.log(err))
  
    } catch (error) {
      console.log('Login error:', error);
    }
  };
  

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.backgroundImage}
  >
    <ImageBackground
      style={styles.backgroundImage}
      resizeMode="cover"
      source={require('../../assets/image-road-freeway.png')}
    >
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/256/8600/8600176.png' }}
          style={styles.icon}
        />

        <TextInput
          style={[styles.input, isEmailFocused && styles.focusedInput]}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          onFocus={() => setIsEmailFocused(true)}
          onBlur={() => setIsEmailFocused(false)}
          value={email}

        />
        <TextInput
          style={[styles.input, isPasswordFocused && styles.focusedInput]}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
          value={password}
        />

        <TouchableOpacity onPress={() => console.log("Forget your password!")}>
          <Text style={styles.headerText}>Forget your password !</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>


        
        <TouchableOpacity style={styles.signupButton}   onPress={() => navigation.navigate('Signup')} >
          <Text style={styles.buttonText}  >Sign in</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  container: {
    width: '100%',
    padding: 20,
    height: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 80,
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 25,
    color: 'white',
  },
  input: {
    height: 40,
    width: '90%',
    marginBottom: 15,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    textAlign: 'center',
    backgroundColor: 'white',
    fontSize: 16,
  },
  focusedInput: {
    height: 50, 
    fontSize: 18, 
  },
  loginButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 20,
    width: '70%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  signupButton: {
    backgroundColor: '#2ecc71', // Change the color for the sign-up button
    padding: 10,
    borderRadius: 20,
    width: '70%',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Login;
