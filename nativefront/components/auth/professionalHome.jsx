import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import {IP} from "../../ip.json"

const ProHome = () => {

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/send.png')} style={styles.image} />
      <Text style={styles.text}>khaled</Text>
      <Text style={styles.text}>khaled</Text>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Requests</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Set background color to white
  },
  image: {
    width:200,
    height:300,
    resizeMode: 'contain'
  },
  text: {
    marginVertical: 10,
    fontSize: 28,
  },
  button: {
    backgroundColor: 'rgb(58,159,253)', 
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white', 
    fontWeight: 'bold',
    width:130,
    textAlign:"center"
  },
});

export default ProHome;
