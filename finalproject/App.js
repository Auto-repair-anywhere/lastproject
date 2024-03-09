
import React from 'react';
import { View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// import Payment from './components/Payment'; 

import HomeScreen from './components/auth/home.jsx';
import Login from './components/auth/login.jsx';
import Signup from './components/auth/signup.jsx';
import Screenn from './components/auth/home2.jsx';
import ChatDetail from './components/chat/Chat.jsx'
import ChatList from './components/chat/ChatList.jsx'
import Nav from './components/auth/bottolnav.jsx';
import Service from './components/auth/servicepage.jsx';
import Servicee from './components/auth/servicepage.jsx';
import ServiceePro from './components/auth/servicepro.jsx';
import Tire from './components/auth/tirePanne.jsx';
import Professional from './components/Professional.jsx';
import RequestDetail from './components/RequestDetail.jsx';
const Stack = createStackNavigator();

const LogoTitle = () => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Image
      style={{ width: 180, height: 60, marginRight: 10 }}
      source={require('../finalproject/assets/logo.png')}
    />
  </View>
);

const App = () => {
  return (
    <NavigationContainer>

     <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'white',
            height: 140, // Adjust the height as needed
            elevation: 0, // Remove shadow on Android
            shadowOpacity: 0, // Remove shadow on iOS
          },
          headerTintColor: 'black', // Adjust text color
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Professional"
          component={Professional}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
         <Stack.Screen
          name="Chat"
          component={ChatDetail}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
         <Stack.Screen
          name="chatlist"
          component={ChatList}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
         <Stack.Screen
          name="tire"
          component={Tire}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
        <Stack.Screen
          name="communtity"
          component={Screenn}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
        <Stack.Screen
          name="proServ"
          component={ServiceePro}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
        <Stack.Screen
          name="Cassistance"
          component={Servicee}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
          <Stack.Screen
          name="professional"
          component={Professional}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
      </Stack.Navigator>
      
      <Nav/>
    </NavigationContainer>
  );
};

export default App;
