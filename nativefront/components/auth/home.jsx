import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Nav from './bottolnav';
import {IP} from "../../ip.json"

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          source={require('../../assets/request.png')}
          style={styles.centeredImage}
        />

        <TouchableOpacity
          style={styles.centeredButton}
          onPress={() => navigation.navigate('service')}
        >
          <Text style={styles.centeredButtonText}>Request service</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
        <Image
          source={require('../../assets/rassi.png')}
          style={styles.centeredImage}
        />

        <TouchableOpacity
          style={styles.centeredButton}
          onPress={() => navigation.navigate('communtity')}
        >
          <Text style={styles.centeredButtonText}>Road Map Assistance</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',

  },
  centeredButton: {
    backgroundColor: 'rgb(58,159,253)',
    padding: 10,
    width:"80%",
    justifyContent:"center",
    borderRadius: 20,
    alignItems:"center",
marginBottom:20
   
    
  },
  centeredButtonText: {
    color: 'white',
    fontSize:20,
    alignItems:"center"

    
  },
  box:{
    width:"90%",
    alignItems: 'center',
    justifyContent: 'center',
    border:2,
    margin:"auto",
    alignItems:"center",
    marginTop:9,
    borderRadius:20,
    backgroundColor:"white",
    padding:2,
    borderWidth: 1, 
    borderColor: 'black',  
  },
 
  centeredImage: {
    width: 290,
    height: 200,
    marginBottom: 20,
    borderRadius: 20,
    margin:"auto",
    marginTop:15,
    resizeMode:"contain"
  },
  centeredText: {
    fontSize: 16,
    marginBottom: 20,
    alignItems:"center"
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  iconText: {
    marginTop: 5,
  },
});
export default HomeScreen;
