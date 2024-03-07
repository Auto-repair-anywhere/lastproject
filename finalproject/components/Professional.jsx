import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const Professional = () => {
  const [requests, setRequests] = useState([]);

  // useEffect(() => {
  //   axios.get(`http://localhost:8080/req/getall/${1}`)
  //     .then(result => {
  //       setRequests(result.data);
  //     })
  //     .catch(err => {
  //       console.log("Error fetching data:", err);
  //     });
  // }, []);
  

  return (
    <View style={styles.container}>
      {/* {requests.map(request => ( */}
        <View style={styles.requestContainer}>
          <Text>ID: </Text>
          <Text>First Name: </Text>
          <Text>Last Name: </Text>
          <Text>Problem: </Text>
        </View>
      {/* ))} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, 
  },
  requestContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20, 
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20, 
    width: '100%',
  },
});



export default Professional;
