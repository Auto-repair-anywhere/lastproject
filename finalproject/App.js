import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from './components/chat/Chat.jsx'
import ChatList from './components/chat/ChatList.jsx'
import Login from './components/auth/login.jsx';
import Signup from './components/auth/signup.jsx';
import HomeScreen from './components/auth/home.jsx';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
