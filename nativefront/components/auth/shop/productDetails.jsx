import React, { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet,TouchableOpacity, ScrollView } from "react-native";
import Navv from "./nav.jsx";
import { SafeAreaView } from "react-native-safe-area-context";

const Details = ({ route }) => {
  const { id } = route.params;
  const [data,Data]=useState([])

useEffect(
  async()=>{
    await axios.get()
  },[]
)


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.productImage}>
      <Image
        source={{
          uri: 'https://aksatrade.com/img/ferrari%20auto%20spare%20parts.jpg'
        }}
        style={styles.productImage}
      />
      </View>
      <View style={styles.con}>
        <View style={styles.detailsContainer}>
          
          <View style={styles.productInfo}>
            <Text style={styles.productName}>Product Name</Text>
            <Text style={styles.price}>$10.00</Text>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo vel mauris consequat condimentum.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.nav} >
      <Navv />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
  },
  
  detailsContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  productImage: {
    width: '100%',
    height: 310,
    resizeMode: 'cover',
    borderRadius: 5,
    margin:'auto',


  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    color: 'green',
  },
  descriptionContainer: {
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'rgb(58,159,253)',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  con: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 20,
    height: 250,
    marginTop: -20,
    marginBottom: 30,
  },
 
});

export default Details;
