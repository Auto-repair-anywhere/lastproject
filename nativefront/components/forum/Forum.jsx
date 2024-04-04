import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';
import axios from 'axios';
import { IP } from '../../ip.json';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker'
import * as ImagePicker from 'expo-image-picker';

const Forum = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState();
  const [image, setImage] = useState(null); // State to hold the selected image
  const [show, setShow] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
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
  const fetchFilteredData = async () => {
    try {
      const response = await axios.get(`http://${IP}:8080/forum/getOne/${category}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching filtered data:', error);
    }
  }
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      
      setImage(result.assets[0].uri);
      
    }
  };
  const addPost = async () => {
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      formData.append('category', category);
      formData.append('userId', 1); // Assuming userId is always 1
  
      
      if (image) {
        formData.append("image", {
          uri: image,
          type: "image/jpeg",
          name: "photo.jpg",
        });
       
      }
      console.log(image,category,title,content);
      console.log(formData);
  
     const response = await axios.post(`http://${IP}:8080/forum/post`,formData,
     {
       headers: {
         "Content-Type": "multipart/form-data",
       },
     }
   );
      console.log('Posted:', response.data);
      fetchData();
      // Reset the form fields and selected image
      setTitle('');
      setContent('');
      setCategory('');
      setImage(null);
    } catch (err) {
      console.log('Error in Axios request:', err);
    }
  }

  const inputFields = () => {
    setShow(!show);
  }

  const categoryselected = (selectedCategory) => {
    setCategory(selectedCategory);
    fetchFilteredData();
    setModalVisible(false);
  }

  const getDateFromDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: '2-digit' });
    return formattedDate;
  };

  
  

  
  
  return (
    <View style={styles.container}>
    <View style={styles.navBar}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.navButton} onPress={() => fetchData()}>
          <Text style={styles.navButtonText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => categoryselected("News")}>
          <Text style={styles.navButtonText}>News</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => categoryselected("Safety")}>
          <Text style={styles.navButtonText}>Safety</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => categoryselected("Travel")}>
          <Text style={styles.navButtonText}>Travel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => categoryselected("Vehicle Maintenance")}>
          <Text style={styles.navButtonText}>Vehicle Maintenance</Text>
        </TouchableOpacity>
       
      </ScrollView>

    </View>
    <TouchableOpacity style={styles.navButton} onPress={inputFields}>
          <Text style={styles.navButtonText}>{show ? "Hide Input" : "Add POST"}</Text>
        </TouchableOpacity>

    {show && (
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
        <Picker
          selectedValue={category}
          onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
        >
          <Picker.Item label="News" value="News" />
          <Picker.Item label="Safety" value="Safety" />
          <Picker.Item label="Travel" value="Travel" />
          <Picker.Item label="Vehicle Maintenance" value="Vehicle Maintenance" />
        </Picker>
        <TouchableOpacity style={styles.button} onPress={pickImage}>
            <Text style={styles.buttonText}>Select Image</Text>
          </TouchableOpacity>

    {image && <Image source={{ uri: image }} style={styles.selectedImage} />}
          <TouchableOpacity style={styles.button} onPress={addPost}>
            <Text style={styles.buttonText}>Add Post</Text>
          </TouchableOpacity>
      </View>
    )}


      <ScrollView style={styles.scrollView}>
        {data.map((e, index) => (
          <TouchableOpacity key={index} onPress={() => navigation.navigate('PostDetail', { id: e.id })}>
            <View style={styles.card}>
              <Text style={styles.postTitle}>Title: {e.title}</Text>
              <Text>Category: {e.category}</Text>
              <Text>{getDateFromDate(e.createdAt)}</Text>
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
  navBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    backgroundColor:'white',
    padding:10,
    borderRadius:20,
    marginBottom:20,
    marginTop:15
  },
  navButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom:5,
    backgroundColor:'white',
    borderRadius:20,
    
  },
  navButtonText: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
    marginTop:30
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
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  pickerLabel: {
    marginRight: 10,
  },
  pickerButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
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
