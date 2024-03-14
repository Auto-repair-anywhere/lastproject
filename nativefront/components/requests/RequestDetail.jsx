import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import {IP} from '../../ip.json'

const RequestDetail = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://${IP}:8080/req/getall/${1}`);
        setRequests(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {requests.map((e) => (
        <View style={styles.requestDetails}>
          <Text style={styles.label}>Request ID: {e.idrequest}</Text>
          <Text style={styles.label}>Brand: {e.brand}</Text>
          <Text style={styles.label}>Problem:{e.problem}</Text>
          <Text style={styles.label}>Description:{e.description}</Text>
          <Text style={styles.label}>More Description:{e.moredescription}</Text>
          <Text style={styles.label}>Milage:{e.milage}</Text>
          <Text style={styles.label}>Status:{e.status}</Text>
          <Text style={styles.label}>Image:{e.imageurl}</Text>
          <Text style={styles.label}>Latitude:{e.latitude}</Text>
          <Text style={styles.label}>Longitude:{e.longitude}</Text>
          <Text style={styles.label}>First Name:{e.fistname}</Text>
         <Text style={styles.label}>Last Name:{e.lastname}</Text>
     
        </View>
       ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  requestDetails: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default RequestDetail;
