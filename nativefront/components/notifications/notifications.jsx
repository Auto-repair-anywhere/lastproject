import React, { useState, useEffect } from 'react';
import { View, Button, Alert, Text } from 'react-native';
import io from 'socket.io-client';
import {IP} from '../../ip.json';

const Notifications = () => {
  const [socket, setSocket] = useState(null);
  const [receivedNotification, setReceivedNotification] = useState('');
console.log(receivedNotification);
  useEffect(() => {
    const newSocket = io(`http://${IP}:3000`);

    newSocket.on('connect', () => {
      console.log('Connected with socket ID:', newSocket.id);
      setSocket(newSocket);
    });

    newSocket.on('message', (notification) => {
      console.log('Received notification from server:', notification);
      setReceivedNotification(notification.message);
    });

    return () => {
      if (newSocket) {
        newSocket.disconnect();
      }
    };
  }, []);

  const press = () => {
    if (socket) {
      socket.emit('notification', { message: 'Button pressed' /*message to send*/ });
    } else {
      Alert.alert('Socket Error', 'Socket connection not established');
    }
  };

  return (
    <View style={{top:100}} > 
      <Button title="Press Me" onPress={press}  />
      {receivedNotification ? <Text>Received Notification: {receivedNotification}</Text> : null}
    </View>
  );
};

export default Notifications;
