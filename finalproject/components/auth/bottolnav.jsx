import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Nav=()=>{
    const navigation = useNavigation();



    return(
           

      <View style={styles.bottomnav}>

      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Home')}>
        <Icon name="home" size={30} color="black" />
        <Text style={styles.iconText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('SparePartsIcon')}>
        <Icon name="cogs" size={30} color="black" />
        <Text style={styles.iconText}>Spare Parts </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Professional')}>
        <Icon name="clipboard" size={30} color="black" />
        <Text style={styles.iconText}>Request </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('FixCarIcon')}>
        <Icon name="wrench" size={30} color="black" />
        <Text style={styles.iconText}>Workshop </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('chatlist')}>
        <Icon name="comments" size={30} color="black" />
        <Text style={styles.iconText}>Chat</Text>
      </TouchableOpacity>
    </View>
    )
}


const styles = StyleSheet.create({
   
    bottomnav: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
      marginTop:20,
      height:65,
      marginBottom:0,
      backgroundColor:"white",
      borderRadius:30,
      marginBottom:10
    },
   
   
    iconContainer: {
      alignItems: 'center',
      marginBottom: 10,
    },
    iconText: {
      marginTop: 5,
    },
  });
  
export default Nav