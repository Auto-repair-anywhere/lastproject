import { useEffect,React, useState } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, FlatList, Image, Pressable } from 'react-native';
const ChatList = ({ navigation }) => {
  
  const [chatData,setChatData]  = useState({})
  
  //   {
  //     id: 1,
  //     senderName: 'Achref Farhat',
  //     lastMessage: 'Hey,where are you guys?',
  //     time: '10:30 AM',
  //     unreadCount: 2,
  //     avatar: require('../../assets/avatar.png'), 
  //   },
  //   {
  //     id: 2,
  //     senderName: 'Khaled Nacef',
  //     lastMessage: 'What time is the meeting?',
  //     time: 'Yesterday',
  //     unreadCount: 0,
  //     avatar: require('../../assets/avatar.png'),
  //   },
   
  // ];
  useEffect(() => {
    fetchChats(); 
  }, []);

  
  const fetchChats = async () => {
    try {
      const response = await axios.get(`http://${IP}:8080/chat/${1}/conversations`);
      const conversations = response.data.map(conversation => {
  
        if (conversation.user1Id === 1) {
          
          return conversation.user2
        }
      
        if (conversation.user2Id === 1) {
          
       
          return conversation.user1
        }
        
        return null; // 
      });
      setChatData(conversations);
      console.log(conversations);
    } catch (error) {
      console.error('Error fetching chats:', error);
    }
  };
 

  const renderItem = ({ item }) => (
    <Pressable
      style={styles.itemContainer}
      onPress={() => navigation.navigate('Chat', {senderid:1,user2Id:item.id})}
    >
      <Image source={require('../../assets/avatar.png')} style={styles.avatar} />
      <View style={styles.chatInfo}>
        <Text style={styles.senderName}>{item.firstname} {item.lastname}</Text>
        <Text style={styles.lastMessage}>{item.lastMessage}</Text>
      </View>
      <View style={styles.chatMeta}>
        <Text style={styles.time}>{item.time}</Text>
        {item.unreadCount > 0 && (
          <View style={styles.unreadCountContainer}>
            <Text style={styles.unreadCount}>{item.unreadCount}</Text>
          </View>
        )}
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={chatData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 16,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  chatInfo: {
    flex: 1,
  },
  senderName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  lastMessage: {
    fontSize: 14,
    color: '#666',
  },
  chatMeta: {
    alignItems: 'flex-end',
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
  unreadCountContainer: {
    backgroundColor: '#0B93F6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    marginTop: 8,
  },
  unreadCount: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ChatList;
