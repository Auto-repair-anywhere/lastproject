import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';
<<<<<<< HEAD
import { IP } from '../../';

=======
import {IP} from '../../ip.json'
import AsyncStorage from '@react-native-async-storage/async-storage';
>>>>>>> d178a0085bbd0c028ad7a04739952787ddb4f2ea

const Confirmcar = () => {
const [car, setCar] = useState([]);
console.log(car);
  useEffect(async () => {
    const id= await AsyncStorage.getItem('userId')
    axios.get(`http://${IP}:8080/findcar/verify/${id}`)
      .then((res) => {
        setCar(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View style={styles.container}>
      {car.map((el, index) => (
        <View key={index} style={styles.carContainer}>
          <Image source={{
            uri:el.carimage
          }} style={styles.carImage} />
          <View style={styles.carInfo}>
            <Text style={styles.carText}>Car Model: {el.carname}</Text>
            <Text style={styles.carText}>Fuel Type: {el.fueltype}</Text>
            <Text style={styles.carText}>carplate: {el.carplate}</Text>
          </View>
        </View>
      ))}
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
});

export default Confirmcar;
