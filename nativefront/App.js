import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from './components/chat/Chat.jsx'
import Getcar from './components/gitcar/Getcar.jsx';
import { View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './components/auth/home.jsx';
import Login from './components/auth/login.jsx';
import Signup from './components/auth/signup.jsx';
import Screenn from './components/auth/home2.jsx';
import ChatDetail from './components/chat/Chat.jsx'
import ChatList from './components/chat/ChatList.jsx'
import Nav from './components/auth/bottolnav.jsx';
import Servicee from './components/auth/servicepage.jsx';
import Tire from './components/auth/tirePanne.jsx';
import Professional from './components/requests/Professional.jsx';
import RequestDetail from './components/requests/RequestDetail.jsx';
import RequestUser from './components/requests/RequestUser.jsx'
import Payment from './components/Payment.jsx'
import Confirmcar from './components/gitcar/Confirm.jsx';
import ProHome from './components/auth/professionalHome.jsx';
import Buttom from './components/ComponentsAchref/Buttom.jsx'
import Forum from './components/forum/Forum.jsx'
import PostDetail from './components/forum/PostDetail.jsx';
import CreateBreakdownScreen from './components/CreateBreakdownScreen';
import DetailsScreen from './components/DetailsScreen';
import DetailsRequestScreen from './components/DetailsRequestScreen';

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


  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'white',
            height: 140,
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: 'black', // Adjust text color
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
          name="home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="getcar"
          component={Getcar}
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
        <Stack.Screen
          name="Forum"
          component={Forum}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />

        <Stack.Screen
          name="PostDetail"
          component={PostDetail}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
        <Stack.Screen
          name="ProHome"
          component={ProHome}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
       

      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
