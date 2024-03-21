import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Pressable, Image, StyleSheet, TextInput, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { IP } from '../../ip.json';

import io from 'socket.io-client'
const socket = io.connect(`http://${IP}:8080`)
const ChatDetail = ({ route }) => {
  const { senderid, user2Id, receiverName } = route.params;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [convid, setConvid] = useState(1);
  const [selectedImageUri, setSelectedImageUri] = useState(null)
  const [lastDisplayedDate, setLastDisplayedDate] = useState(null); 
  const scrollViewRef = useRef(null); 

  useEffect(() => {
    socket.on("newMessage", (data) => {
    
    })
    fetchMessagesBetweenUsers();
    scrollToBottom();
  }, []);

console.log("sender usr",user2Id,senderid);
  const fetchMessagesBetweenUsers = async () => {
    try {
      const response = await axios.get(`http://${IP}:8080/chat/messages/${senderid}/${user2Id}`);
      setMessages(response.data);
      setLastDisplayedDate(null);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleSend = async () => {
    try {
      await axios.post(`http://${IP}:8080/chat/messages/send`, {
        text: message,
        senderId: senderid,
        conversationId: convid,
        recipientId: user2Id
      });
      

    
      fetchMessagesBetweenUsers();
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  const handleImageSend = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
  
    if (!result.cancelled) {
      setSelectedImageUri(result.uri); 
      try {
        const formData = new FormData();
        formData.append('image', {
          uri: result.uri,
          type: 'image/jpeg',
          name: 'photo.jpg',
        });
  
        // await axios.post(`http://${IP}:8080/chat/messages/send`, formData, {
        //   headers: {
        //     'Content-Type': 'multipart/form-data',
        //   },
        //   data: {
        //     senderId: senderid,
        //     conversationId: convid,
        //     recipientId: user2Id
        //   }
        // });
  
        
        
      } catch (error) {
        console.error('Error sending image:', error);
      }
    }

  };
   const getTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  };

  const getTimeFromDate = (dateString) => {
    const date = new Date(dateString);
    const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return time;
  };

  const getDateFromDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: '2-digit' });
    return formattedDate;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/avatar.png')} style={styles.receiverImageIcon} />
        <Text style={styles.receiverName}>{receiverName}</Text>
      </View>
      <ScrollView 
  ref={scrollViewRef} 
  contentContainerStyle={styles.chatContainer}
  onContentSizeChange={() => scrollToBottom()} 
>
  {messages.map((msg, index) => (
    <View key={msg.id}>
      {(index === 0 || getDateFromDate(msg.createdAt) !== getDateFromDate(messages[index - 1].createdAt)) && (
        <Text style={styles.dateText}>{getDateFromDate(msg.createdAt)}</Text>
      )}
      <View
        style={[
          styles.messageContainer,
          msg.senderId === senderid ? styles.senderMessage : styles.receiverMessage
        ]}
      >
        {msg.text && <Text style={msg.senderId === senderid ? styles.sendermessageText : styles.receivermessageText}>{msg.text}</Text>}
        {msg.image && <Image source={{ uri: msg.image }} style={styles.image} />}
        <Text style={styles.timestamp}>{getTimeFromDate(msg.createdAt)}</Text>
      </View>
    </View>
  ))}
  {selectedImageUri && (
    <View style={styles.messageContainer}>
      <Image source={{ uri: selectedImageUri }} style={styles.image} />
      <Text style={styles.timestamp}>{getTime()}</Text>
    </View>
  )}
</ScrollView>
      <View style={styles.inputArea}>
        <Pressable onPress={handleImageSend} style={styles.attachButton}>
          <Image
            style={styles.attachIcon}
            source={require('../../assets/attach2.png')}
          />
        </Pressable>
        <TextInput
          style={styles.inputText}
          placeholder="Type your message..."
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <Pressable onPress={handleSend} style={styles.sendButton}>
          <Image
            style={styles.sendIcon}
            source={require('../../assets/send.png')}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderBottomColor: '#CCCCCC',
    borderRadius: 100,
    marginTop: 2
  },
  receiverImageIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  receiverName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  chatContainer: {
    flexGrow: 1,
    paddingVertical: 16,
  },
  messageContainer: {
    maxWidth: '80%',
    borderRadius: 16,
    marginVertical: 2,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  senderMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#3A9FFD',
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 4,
    marginBottom: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: '#3A9FFD',
    borderRadius: 16,
  },
  receiverMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 16,
  },
  sendermessageText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  receivermessageText: {
    fontSize: 16,
    color: 'black',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
    marginVertical: 8,
  },
  timestamp: {
    fontSize: 12,
    color: '#757575',
    marginTop: 16, 
    alignSelf: 'flex-end',
  },
  dateText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#757575',
    alignSelf: 'center',
    marginVertical: 8,
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
  },
  attachButton: {
    padding: 8,
    marginRight: 8,
    borderRadius: 20,
    backgroundColor: "#F0F0F0"
  },
  attachIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#F0F0F0'
  },
  inputText: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    backgroundColor: 'white',
  },
  sendButton: {
    padding: 8,
    borderRadius: 25,
    backgroundColor: '#1976D2',
  },
  sendIcon: {
    width: 24,
    height: 24,
    tintColor: 'white',
  },
});

export default ChatDetail;
