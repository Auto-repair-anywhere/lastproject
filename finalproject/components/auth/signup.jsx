import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ImageBackground, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import axios from 'axios';
import {IP} from '../../Backend/ip.json'
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

const Signup = () => {




  const handleImageSend = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.cancelled) {
        const imageUrl = result.uri;
        setImage(imageUrl);
        console.log(imageUrl);
      }
    } catch (error) {
      console.error('Error selecting image:', error);
    }
  };





  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);

  const navigation = useNavigation();

  const handleFocus = (input) => {
    setFocusedInput(input);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const signup = () => {
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    axios.post(`http://${IP}:8080/auth/signup`, {
      firstname: firstName,
      lastname: lastName,
      password: password,
      email: email,
      image:image
    })
      .then((result) => {
        console.log('Signup successful:', result.data);
        navigation.navigate('Login');
      })
      .catch((err) => {
        console.log('a:', err);
      });
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
            style={[
              styles.input,
              focusedInput === 'firstName' && styles.focusedInput,
            ]}
            placeholder="First name"
            onChangeText={(text) => setFirstName(text)}
            onFocus={() => handleFocus('firstName')}
            onBlur={handleBlur}
          />
          <TextInput
            style={[
              styles.input,
              focusedInput === 'lastName' && styles.focusedInput,
            ]}
            placeholder="Last name"
            onChangeText={(text) => setLastName(text)}
            onFocus={() => handleFocus('lastName')}
            onBlur={handleBlur}
          />
          <TextInput
            style={[
              styles.input,
              focusedInput === 'email' && styles.focusedInput,
            ]}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            onFocus={() => handleFocus('email')}
            onBlur={handleBlur}
          />
          <TextInput
            style={[
              styles.input,
              focusedInput === 'password' && styles.focusedInput,
            ]}
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            onFocus={() => handleFocus('password')}
            onBlur={handleBlur}
          />
          <TextInput
            style={[
              styles.input,
              focusedInput === 'confirmPassword' && styles.focusedInput,
            ]}
            placeholder="Confirm Password"
            secureTextEntry
            onChangeText={(text) => setConfirmPassword(text)}
            onFocus={() => handleFocus('confirmPassword')}
            onBlur={handleBlur}
          />
           <TouchableOpacity style={styles.loginButton} onPress={signup}>
            <Text style={styles.buttonText} onPress={handleImageSend}>choose your profile image</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={signup}>
            <Text style={styles.buttonText}>Sign Up</Text>
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
  focusedInput: {
    height: 50,
    fontSize: 18,
  },
});

export default Signup;
