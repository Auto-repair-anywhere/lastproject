// mailer.js

import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';
import { IP } from '../ip.json'; 

const Mailer = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = async () => {
    try {
      const data = {
        email: email,
        subject: subject,
        message: message,
      };

      const response = await axios.post(`${IP}/email/sendEmail`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        Alert.alert('Success', 'Email sent successfully');
      } else {
        Alert.alert('Error', 'Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      Alert.alert('Error', 'Failed to send email');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Subject"
        value={subject}
        onChangeText={setSubject}
      />
      <TextInput
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
        multiline
      />
      <Button
        title="Send Email"
        onPress={sendEmail}
      />
    </View>
  );
};

export default Mailer;
