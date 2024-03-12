// import React, { useState, useEffect } from 'react';
// import { View, Text, Pressable, Image, StyleSheet, TextInput, ScrollView } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import axios from 'axios';
// import {IP} from '../../Backend/ip.json'

// const ChatDetail = ({route}) => {
  
//     const { senderid,user2Id } = route.params;
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [convid, setconvid] = useState(1);
  
//   useEffect(() => {
//    getconvid()
//     fetchMessagesBetweenUsers();
//   }, []);

  
//   const getconvid =  async()=>{
//     try{
//       const response = await axios.get(`http://${IP}:8080/chat/${senderid}/${user2Id}`);
//       setconvid(response.data.id);
   
//     } catch (error) {
//       console.error('Error ', error);
//     }
//   };

    
  

//   const fetchMessagesBetweenUsers = async () => {
//     try {

//       const response = await axios.get(`http://${IP}:8080/chat/messages/${senderid}/${user2Id}/${convid}`);
//       setMessages(response.data);
//       console.log( response.data)
//     } catch (error) {
//       console.error('Error fetching messages between users:', error);
//     }
//   };

//   const handleSend = async () => {
//     if (!message.trim()) return;
//     const newMessage = { id: messages.length + 1, text: message, sender: senderid, timestamp: getTime() };
//     setMessages([...messages, newMessage]);
//     setMessage('');

//     // Send message to the server
//     try {
//       await axios.post(`http://${IP}:8080/chat/messages/send`, { text:message,
//       senderId:senderid,
//       conversationId:convid,
//       recipientId:user2Id});
//     } catch (error) {
//       console.error('Error sending message:', error);
//     }
//   };

//   const handleImageSend = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       quality: 1,
//     });

//     if (!result.cancelled) {
//       const imageUrl = result.uri;
//       const newMessage = { id: messages.length + 1, image: imageUrl, sender: senderid, timestamp: getTime() };
//       setMessages([...messages, newMessage]);

//       // Send image to the server
//       try {
//         await axios.post(`http://${IP}:8080/chat`, { image: imageUrl });
//       } catch (error) {
//         console.error('Error sending image:', error);
//       }
//     }
//   };

//   const getTime = () => {
//     const now = new Date();
//     return now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.chatContainer}>
//         {messages.map((msg) => (
//           <View key={msg.id} style={[styles.messageContainer, msg.sender === senderid && styles.senderMessage]}>
//             {msg.text && <Text style={styles.messageText}>{msg.text}</Text>}
//             {msg.image && <Image source={{ uri: msg.image }} style={styles.image} />}
//             <Text style={styles.timestamp}>{msg.timestamp}</Text>
//           </View>
//         ))}
//       </ScrollView>
//       <View style={styles.inputArea}>
//         <Pressable onPress={handleImageSend} style={styles.attachButton}>
//           <Image
//             style={styles.attachIcon}
//             source={require('../../assets/attach2.png')}
//           />
//         </Pressable>
//         <TextInput
//           style={styles.inputText}
//           placeholder="Type your message..."
//           value={message}
//           onChangeText={(text) => setMessage(text)}
//         />
//         <Pressable onPress={handleSend} style={styles.sendButton}>
//           <Image
//             style={styles.sendIcon}
//             source={require('../../assets/send.png')}
//           />
//         </Pressable>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },
//   chatContainer: {
//     flexGrow: 1,
//     paddingVertical: 16,
//   },
//   messageContainer: {
//     maxWidth: '70%',
//     alignSelf: 'flex-start',
//     backgroundColor: '#E0E0E0',
//     borderRadius: 16,
//     marginVertical: 8,
//     marginLeft: 16,
//     padding: 12,
//   },
//   senderMessage: {
//     alignSelf: 'flex-end',
//     backgroundColor: '#2196F3',
//   },
//   messageText: {
//     fontSize: 16,
//   },
//   image: {
//     width: 200,
//     height: 200,
//     resizeMode: 'cover',
//     borderRadius: 8,
//     marginVertical: 8,
//   },
//   timestamp: {
//     fontSize: 12,
//     color: '#757575',
//     marginTop: 8,
//     alignSelf: 'flex-end',
//   },
//   inputArea: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//   },
//   attachButton: {
//     padding: 8,
//     marginRight: 8,
//   },
//   attachIcon: {
//     width: 24,
//     height: 24,
    
//   },
//   inputText: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#BDBDBD',
//     borderRadius: 25,
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     marginRight: 8,
//   },
//   sendButton: {
//     padding: 8,
//     borderRadius: 25,
//     backgroundColor: '#1976D2',
//   },
//   sendIcon: {
//     width: 24,
//     height: 24,
//     tintColor: 'white',
//   },
// });

// export default ChatDetail;

import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Image, StyleSheet, TextInput, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { IP } from '../../Backend/ip.json';

const ChatDetail = ({ route }) => {
  const { senderid, user2Id } = route.params;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [convid, setConvid] = useState(1);

  useEffect(() => {
    
    fetchMessagesBetweenUsers();
  }, []);

  // const getConvid = async () => {
  //   try {
  //     const response = await axios.get(`http://${IP}:8080/chat/${senderid}/${user2Id}`);
  //     setConvid(response.data.id);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  const fetchMessagesBetweenUsers = async () => {
    try {
      const response = await axios.get(`http://${IP}:8080/chat/messages/${senderid}/${user2Id}`);
      setMessages(response.data);
      console.log(senderid, user2Id)
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleSend = async () => {
    if (!message.trim()) return;
    const newMessage = { id: messages.length + 1, text: message, senderId: senderid, timestamp: getTime() };
    setMessages([...messages, newMessage]);
    setMessage('');

    try {
      await axios.post(`http://${IP}:8080/chat/messages/send`, {
        text: message,
        senderId: senderid,
        conversationId: convid,
        recipientId: user2Id
      });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleImageSend = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      const imageUrl = result.uri;
      const newMessage = { id: messages.length + 1, image: imageUrl, sender: senderid, timestamp: getTime() };
      setMessages([...messages, newMessage]);

      try {
        await axios.post(`http://${IP}:8080/chat`, { image: imageUrl });
      } catch (error) {
        console.error('Error sending image:', error);
      }
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
          <View
            key={msg.id}
            style={[
              styles.messageContainer,
              msg.senderId === senderid ? styles.senderMessage : styles.receiverMessage
            ]}
          >
            {msg.text && <Text style={styles.messageText}>{msg.text}</Text>}
            {msg.image && <Image source={ require("../../assets/avatar.png") } style={styles.image} />}
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

inputArea: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#F0F0F0', // Lighter background color
  paddingHorizontal: 16,
  paddingVertical: 8,
  borderTopWidth: 1, // Add border to separate input area from messages
  borderTopColor: '#CCCCCC', // Lighter border color
},
attachButton: {
  padding: 10,
  marginRight: 8,
  backgroundColor: '#CCCCCC', // Lighter background color for attach button
  borderRadius: 20,
},
attachIcon: {
  width: 24,
  height: 24,
},
inputText: {
  flex: 1,
  borderWidth: 0, // Remove border to make it cleaner
  borderRadius: 20,
  paddingHorizontal: 16,
  paddingVertical: 10,
  backgroundColor: 'white', // White background for input text field
  marginRight: 8,
},
sendButton: {
  padding: 12,
  borderRadius: 20,
  backgroundColor: '#1976D2', // Bold color for send button
},

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
  receiverMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#BDBDBD',
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

