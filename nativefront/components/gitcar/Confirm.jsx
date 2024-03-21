import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { IP } from '../../ip.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Confirmcar = () => {
  const [car, setCar] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const id = await AsyncStorage.getItem('userId');
      const response = await axios.get(`http://${IP}:8080/findcar/verify/${id}`);
      setCar(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleConfirm = () => {
    if (car.length > 0) {
      navigation.replace('home', { carData: car[0] });
    }
  };

  return (
    <View style={styles.container}>
      {car.map((el, index) => (
        <View key={index} style={styles.carContainer}>
          <Image source={{ uri: el.carimage }} style={styles.carImage} />
          <View style={styles.carInfo}>
            <Text style={styles.carText}>Car Model: {el.carname}</Text>
            <Text style={styles.carText}>Fuel Type: {el.fueltype}</Text>
            <Text style={styles.carText}>Car Plate: {el.carplate}</Text>
          </View>
        </View>
      ))}
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
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
