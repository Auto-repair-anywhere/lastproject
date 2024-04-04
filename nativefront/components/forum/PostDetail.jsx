import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import { IP } from '../../ip.json';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const PostDetail = ({ route }) => {
  const [data, setData] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const[refresh,setRefresh]=useState(false)


  const { id } = route.params;

  useEffect(() => {
 
    axios.get(`http://${IP}:8080/forum/get/${id}`)
      .then((result) => {
        setData(result.data[0]);
        console.log("this is the post",result.data[0]);
      })
      .catch(err => {
        console.log("Error :", err);
      });
  
    axios.get(`http://${IP}:8080/forum/getCom/${id}`)
      .then((result) => {
        setComments(result.data)
        console.log(result.data)
      })
      .catch(err => {
        console.log("Error :", err);
      });
  }, [refresh]);


  const addComment = () => {
    axios.post(`http://${IP}:8080/forum/add/${id}`, {
      content: newComment,
      userIduser:1
    })
    .then((response) => {
      console.log('Comment added:', response.data);
      setRefresh(!refresh);
    })
    .catch((err) => {

      console.log('Error:', err);
    });
  };
  

  return (

    <View style={styles.container}>
          <ScrollView style={styles.scrollView}>
      <View style={styles.postItem}>
        <Text style={styles.postTitle}>Title: {data.title}</Text>
        <Text style={styles.postContent}>Content: {data.content}</Text>
        <Text style={styles.postCategory}>Category: {data.category}</Text>
        {data.image_url && <Image source={{ uri: data.image_url }} style={styles.postImage} />}
      </View>

      <View style={styles.commentsContainer}>
        <Text style={styles.commentsTitle}>Comments:</Text>
        {comments.map((comment, index) => (
          <View key={index} style={styles.commentItem}>
        <Text>Posted by: {comment.user.firstname} {comment.user.lastname}</Text>

            <Text>{comment.content}</Text>
          </View>
        ))}
<View style={styles.inputContainer}>
  <TextInput
    style={styles.input}
    onChangeText={text => setNewComment(text)}
    value={newComment}
    placeholder="Add a comment..."
    multiline
  />
  <TouchableOpacity onPress={addComment}>
    <Icon name="send" size={25} color="#007bff" />
  </TouchableOpacity>
</View>

      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'white'
  },
  postItem: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  scrollView: {
    width: '100%',
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
  commentsContainer: {
    marginTop: 20,
  },
  commentsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  commentItem: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex:1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginRight: 10 ,
    borderRadius:20,
    
  },
  
});

export default PostDetail;
