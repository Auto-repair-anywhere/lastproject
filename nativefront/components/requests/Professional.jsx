import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import axios from 'axios'
import {IP} from '../../ip.json'
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const Professional = () => { // Assuming `id` and `navigation` are passed as props
  const [requests, setRequests] = useState([]);
  const navigation = useNavigation();
  
  useEffect(() => {
    axios.get(`http://${IP}:8080/req/getall/${1}`)
      .then(result => {
        setRequests(result.data);
        console.log(requests);
      })
      .catch(err => {
        console.log("Error fetching :", err);
      });
  },[]);
  
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Requests List</Text>
      {/* {requests.map((e) => ( */}
        
        <View style={styles.requestContainer}>
          <View style={styles.requestInfo}>
            <View style={styles.requestIdContainer}>
              <Text style={styles.requestId}>REQUEST ID:{1} </Text>
            </View>
            <Text style={styles.requestDetail}>First Name:khaled </Text>
            <Text style={styles.requestDetail}>Last Name:Nacef</Text>
            <Text style={styles.requestDetail}>Category:Tire</Text>
            <Text style={styles.requestDetail}>Date: 20-11-2021</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RequestDetail')}>
              <Text style={styles.viewDetails}>View Details</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.requestContainer}>
          <View style={styles.requestInfo}>
            <View style={styles.requestIdContainer}>
              <Text style={styles.requestId}>REQUEST ID:{1} </Text>
            </View>
            <Text style={styles.requestDetail}>First Name:Hechmi</Text>
            <Text style={styles.requestDetail}>Last Name:Ben Sessi</Text>
            <Text style={styles.requestDetail}>Category:Tire </Text>
            <Text style={styles.requestDetail}>Date: 20-11-2021</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RequestDetail')}>
              <Text style={styles.viewDetails}>View Details</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.requestContainer}>
          <View style={styles.requestInfo}>
            <View style={styles.requestIdContainer}>
              <Text style={styles.requestId}>REQUEST ID:{1} </Text>
            </View>
            <Text style={styles.requestDetail}>First Name:Achref</Text>
            <Text style={styles.requestDetail}>Last Name:Farhat</Text>
            <Text style={styles.requestDetail}>Category:Tire</Text>
            <Text style={styles.requestDetail}>Date: 20-11-2021</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RequestDetail')}>
              <Text style={styles.viewDetails}>View Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      {/* ))}  */}
    </View>
    </ScrollView>
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
    color: 'black',
    textAlign:'center'
  },
  requestContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
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
    
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  requestId: {
    color:  'rgb(58,159,253)',
    fontWeight: 'bold',
  },
  requestDetail: {
    fontSize: 16,
    marginBottom: 5,
    color: '#000',
    borderColor:'rgb(58,159,253)',
    
  },
  button: {
    backgroundColor: 'rgb(58,159,253)',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    width:130
  },
  viewDetails: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Professional;
