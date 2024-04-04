import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { IP } from '../../ip.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Confirmcar = () => {
  const [car, setCar] = useState({});
  const navigation = useNavigation();
console.log("this is the car",car);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const id = await AsyncStorage.getItem('userId');
      const response = await axios.get(`http://${IP}:8080/findcar/verify/${id}`);
      setCar(response.data[0]);
      console.log("this is the data to confirm :",response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleConfirm = () => {
    if (Object.keys(car)) {
      navigation.navigate('home', { carData: car[0] });
    }
  };

  return (
    <View style={styles.container}>
      
        <View  style={styles.carContainer}>
          <Image source={{ uri: car.carimage }} style={styles.carImage} />
          <View style={styles.carInfo}>
            <Text style={styles.carText}>Car Model: {car.carname}</Text>
            <Text style={styles.carText}>Fuel Type: {car.fueltype}</Text>
            <Text style={styles.carText}>Car Plate: {car.carplate}</Text>
          </View>
        </View>
      
      <TouchableOpacity style={styles.confirmButton} onPress={()=>{handleConfirm()}}>
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  carContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    overflow: 'hidden',
  },
  carImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  carInfo: {
    flex: 1,
  },
  carText: {
    fontSize: 16,
    marginBottom: 5,
  },
  confirmButton: {
    backgroundColor:  '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 5,
    marginTop: 20,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Confirmcar;
