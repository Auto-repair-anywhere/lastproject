import React, { useState } from 'react';
import { View, Text, Pressable, Image, StyleSheet, TextInput, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ChatDetail = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello, how can I help you?', sender: 'recipient', timestamp: '10:30 AM' },
  
  { id: 2, text: 'Hello, how can I help you?', sender: 'recipient', timestamp: '10:30 AM' },
]);

  const handleSend = () => {
    if (!message.trim()) return;
    const newMessage = { id: messages.length + 1, text: message, sender: 'sender', timestamp: getTime() };
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  const handleImageSend = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      
      const imageUrl = result.uri; // Example: URL of the uploaded image
      const newMessage = { id: messages.length + 1, image: imageUrl, sender: 'sender', timestamp: getTime() };
      setMessages([...messages, newMessage]);
    }
  };

  const getTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.chatContainer}>
        {messages.map((msg) => (
          <View key={msg.id} style={[styles.messageContainer, msg.sender === 'sender' && styles.senderMessage]}>
            {msg.text && <Text style={styles.messageText}>{msg.text}</Text>}
            {msg.image && <Image source={{ uri: msg.image }} style={styles.image} />}
            <Text style={styles.timestamp}>{msg.timestamp}</Text>
          </View>
        ))}
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
  chatContainer: {
    flexGrow: 1,
    paddingVertical: 16,
  },
  messageContainer: {
    maxWidth: '70%',
    alignSelf: 'flex-start',
    backgroundColor: '#E0E0E0',
    borderRadius: 16,
    marginVertical: 8,
    marginLeft: 16,
    padding: 12,
  },
  senderMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#2196F3',
  },
  messageText: {
    fontSize: 16,
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
    marginTop: 8,
    alignSelf: 'flex-end',
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  attachButton: {
    padding: 8,
    marginRight: 8,
  },
  attachIcon: {
    width: 24,
    height: 24,
    
  },
  inputText: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
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
