import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import { IP } from '../../ip.json';

const PostDetail = ({ route }) => {
  const [data, setData] = useState([]);
  const { id } = route.params;
console.log(data);
  useEffect(() => {
    axios.get(`http://${IP}:8080/forum/get/${id}`)
    .then((result) => {
      setData(result.data[0]);
    })
    .catch(err => {
      console.log("Error fetching :", err);
    });
}, []);


  return (
     <View style={styles.container}>
      <View style={styles.postItem}>
        <Text style={styles.postTitle}>Title: {data.title}</Text>
        <Text style={styles.postContent}>Content: {data.content}</Text>
        <Text style={styles.postCategory}>Category: {data.category}</Text>
        {data.image_url && <Image source={{ uri: data.image_url }} style={styles.postImage} />}
    
      </View>
          
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  postItem: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postContent: {
    fontSize: 16,
    marginBottom: 10,
  },
  postCategory: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  postImage: {
    width: '100%',
    height: 200, 
    borderRadius: 8,
    marginBottom: 10,
  },
});

export default PostDetail;
