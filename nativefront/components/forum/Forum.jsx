import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import { IP } from '../../ip.json';
import { useNavigation } from '@react-navigation/native';

const Forum = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [showInputFields, setShowInputFields] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(`http://${IP}:8080/forum/getAll`)
      .then((result) => {
        setData(result.data);
      })
      .catch(err => {
        console.log("Error fetching data:", err);
      });
  }

  const addPost = () => {
    axios.post(`http://${IP}:8080/forum/post`, {
      title: title,
      content: content,
      category: category,
      image_url: image
    })
      .then((response) => {
        console.log('Posted:', response.data);
        fetchData();
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  }

  const toggleInputFields = () => {
    setShowInputFields(!showInputFields);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>

      {showInputFields && (
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Title"
            value={title}
            onChangeText={text => setTitle(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Content"
            value={content}
            onChangeText={text => setContent(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Category"
            value={category}
            onChangeText={text => setCategory(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Image URL"
            value={image}
            onChangeText={text => setImage(text)}
          />
          <TouchableOpacity style={styles.button} onPress={addPost}>
            <Text style={styles.buttonText}>Add Post</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity style={styles.toggleButton} onPress={toggleInputFields}>
        <Text style={styles.buttonText}>{showInputFields ? "Hide Input" : "ADD POST"}</Text>
      </TouchableOpacity>

      <ScrollView style={styles.scrollView}>
        {data.map((e, index) => (
          <TouchableOpacity key={index} onPress={() => navigation.navigate('PostDetail', { id: e.id })}>
            <View style={styles.card}>
              <Text style={styles.postTitle}>Title: {e.title}</Text>
              <Text>Category: {e.category}</Text>
              {e.image_url && <Image source={{ uri: e.image_url }} style={styles.postImage} />}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 1,
  },
  scrollView: {
    width: '100%',
  },
  card: {
    width: "100%",
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  toggleButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewDetailsButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  viewDetailsText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 200, // Adjust height as needed
    marginTop: 10,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default Forum;
