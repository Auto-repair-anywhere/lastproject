import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from './components/chat/Chat.jsx'
import ChatList from './components/chat/ChatList.jsx'
import Login from './components/auth/login.jsx';
import Signup from './components/auth/signup.jsx';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="chatlist">
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="chatlist" component={ChatList} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

