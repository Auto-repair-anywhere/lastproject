import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import axios from 'axios'
import { IP } from '../../ip.json'
import { useNavigation } from '@react-navigation/native';

const Professional = () => {
  const [requests, setRequests] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get(`http://${IP}:8080/req/getRequests`)
      .then(result => {
        setRequests(result.data);
      })
      .catch(err => {
        console.log("Error fetching requests:", err);
      });
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Requests List</Text>
      <ScrollView>
      {requests.map((request, index) => (
        <View >
          <View style={styles.requestContainer}>
            <View style={styles.requestInfo}>
              <View style={styles.requestIdContainer}>
                <Text style={styles.requestId}>REQUEST ID: {request.idrequest}</Text>
              </View>
              <Text style={styles.requestDetail}>Brand: {request?.brand}</Text>
              <Text style={styles.requestDetail}>Category: {request?.problem}</Text>
              <Text style={styles.requestDetail}>Description: {request?.description}</Text>
              <Text style={styles.requestDetail}>More Description: {request?.moredescription}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DetailsRequest', { item : request })}>
                <Text style={styles.viewDetails}>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  requestContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  requestInfo: {
    flex: 1,
  },
  requestIdContainer: {
    backgroundColor: 'rgb(58,159,253)',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  requestId: {
    color: 'black',
    fontWeight: 'bold',
  },
  requestDetail: {
    fontSize: 16,
    marginBottom: 5,
    color: '#000',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'rgb(58,159,253)',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  viewDetails: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Professional;
