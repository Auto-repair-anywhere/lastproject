import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const RequestDetail = () => {
  const [requests, setRequests] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:8080/req/getall/${1}`);
  //       setRequests(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <View style={styles.container}>
      {/* {requests.map((e, index) => ( */}
        <View style={styles.requestDetails}>
          <Text style={styles.label}>Request ID:</Text>
          {/* {e.idrequest} */}
          <Text style={styles.label}>Brand:</Text>
          {/* {e.brand} */}
          <Text style={styles.label}>Problem:</Text>
          {/* {e.problem} */}
          <Text style={styles.label}>Description:</Text>
          {/* {e.description} */}
          <Text style={styles.label}>More Description:</Text>
          {/* {e.moredescription} */}
          <Text style={styles.label}>Milage:</Text>
          {/* {e.milage} */}
          <Text style={styles.label}>Status:</Text>
          {/* {e.status} */}
          <Text style={styles.label}>Image:</Text>
          {/* {e.imageurl} */}
          <Text style={styles.label}>Latitude:</Text>
          {/* {e.latitude} */}
          <Text style={styles.label}>Longitude:</Text>
          {/* {e.longitude} */}
          <Text style={styles.label}>First Name:</Text>
          {/* {e.fistname} */}
          <Text style={styles.label}>Last Name:</Text>
          {/* {e.lastname} */}
        </View>
      {/* ))} */}
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
