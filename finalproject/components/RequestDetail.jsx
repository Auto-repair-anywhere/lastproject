import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const RequestDetail = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/req/getall/${1}`);
        setRequests(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      {requests.map((e, index) => (
        <View key={index}>
          <Text>{e.idrequest}</Text>
          <Text>{e.brand}</Text>
          <Text>{e.problem}</Text>
          <Text>{e.description}</Text>
          <Text>{e.moredescription}</Text>
          <Text>{e.milage}</Text>
          <Text>{e.status}</Text>
          <Text>{e.imageurl}</Text>
          <Text>{e.latitude}</Text>
          <Text>{e.longitude}</Text>
          <Text>{e.fistname}</Text>
          <Text>{e.lastname}</Text>
        </View>
      ))}
    </View>
  );
};

export default RequestDetail;
