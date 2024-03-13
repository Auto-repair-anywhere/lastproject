import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import { IP } from '../../Backend/ip.json';


const Confirmcar = () => {
  const [car, setCar] = useState([]);

  useEffect(() => {
    axios.get(`http://${IP}:8080/findcar/verify`)
      .then((res) => {
        console.log(res.data);
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
