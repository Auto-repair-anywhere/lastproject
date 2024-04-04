import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Getcar from './components/gitcar/Getcar.jsx';
import { View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './components/auth/login.jsx';
import Signup from './components/auth/signup.jsx';
import Screenn from './components/auth/home2.jsx';
import ChatList from './components/chat/ChatList.jsx'
import Servicee from './components/auth/servicepage.jsx';
import ServiceePro from './components/auth/servicepro.jsx';
import Professional from './components/requests/Professional.jsx';
import RequestDetail from './components/requests/RequestDetail.jsx';
import RequestUser from './components/requests/RequestUser.jsx'
import Payment from './components/Payment.jsx'
import Confirmcar from './components/gitcar/Confirm.jsx';
import Buttom from './components/ComponentsAchref/Buttom.jsx'
import Forum from './components/forum/Forum.jsx'
import PostDetail from './components/forum/PostDetail.jsx';
import EditProfileUser from './components/EditProfileUser.jsx'
import HomeScreen from './components/auth/home.jsx';
import Tire from './components/auth/tirePanne.jsx';
import CreateBreakdownScreen from './components/CreateBreakdownScreen/index.js';
import DetailsScreen from './components/DetailsScreen/index.js';
import DetailsRequestScreen from './components/DetailsRequestScreen/index.js';
import * as Location from 'expo-location';
import { addProfessionelPosition } from './store/actions.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Notifications from './components/notifications/notifications.jsx';

const Stack = createStackNavigator();

const LogoTitle = () => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Image
      style={{ width: 180, height: 60, marginRight: 10 }}
      source={require('./assets/logo.png')}
    />
  </View>
);

const App = () => {

 useEffect(() => {
    const getLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.error('Permission to access location was denied');
          return;
        }
        const userId = await AsyncStorage.getItem('userId');

        let location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        addProfessionelPosition({
          latitude,
          longitude,
          id_driver: userId 
        })
        .then((response) => {
          console.log('Professionel position added successfully:', response);
        })
        .catch((error) => {
          console.error('Error adding professionel position:', error);
        });
      } catch (error) {
        console.error('Error getting user location:', error);
      }
    };
  
    getLocation(); 
  
    const intervalId = setInterval(() => {
      getLocation(); 
    }, 5000);
  
    return () => {
      clearInterval(intervalId); // Cleanup interval on unmount
    };
  }, []);
  

  return (
    <NavigationContainer>
       
     <Stack.Navigator
       initialRouteName="Forum"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'white',
            height: 140,
            elevation: 0, 
            shadowOpacity: 0, 
          },
          headerTintColor: 'black', 
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
          <Stack.Screen
          name="CreateBreakdown"
          options={{ headerShown: false }}
          component={CreateBreakdownScreen} />
        <Stack.Screen
          name="Details"
          options={{ headerShown: false }}
          component={DetailsScreen} />
        <Stack.Screen
          name="DetailsRequest" 
          options={{ headerShown: false }}
          component={DetailsRequestScreen} />
           <Stack.Screen
          name="noti" 
          options={{ headerShown: false }}
          component={Notifications} />

        <Stack.Screen
          name="home"
          component={HomeScreen}
        />
         <Stack.Screen
          name="Forum"
          component={Forum}
        />
          <Stack.Screen
          name="Confirm"
          component={Confirmcar}
        />
      
        <Stack.Screen
          name="Buttom"
          component={Buttom}
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
          name="tire"
          component={Tire}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
         <Stack.Screen
          name="Chatlist"
          component={ChatList}
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
          name="Professional"
          component={Professional}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
          <Stack.Screen
          name="RequestDetail"
          component={RequestDetail}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
        <Stack.Screen
          name="RequestUser"
          component={RequestUser}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
         <Stack.Screen
          name="Payment"
          component={Payment}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
        {/* <Stack.Screen
          name="Forum"
          component={Forum}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        /> */}

      <Stack.Screen
          name="PostDetail"
          component={PostDetail}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
              {/* <Stack.Screen
          name="EditProfileUser"
          component={EditProfileUser}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        /> */}
          <Stack.Screen
          name="ProHome"
          component={ProHome}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
      </Stack.Navigator>
      <Nav/> 
    </NavigationContainer>
  );
};

export default App;
