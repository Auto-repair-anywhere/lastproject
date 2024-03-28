import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from './components/chat/Chat.jsx'
import Getcar from './components/gitcar/Getcar.jsx';
import { View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './components/auth/login.jsx';
import Signup from './components/auth/signup.jsx';
import Screenn from './components/auth/home2.jsx';
import ChatDetail from './components/chat/Chat.jsx'
import ChatList from './components/chat/ChatList.jsx'
import Nav from './components/auth/bottolnav.jsx';
import Servicee from './components/auth/servicepage.jsx';
import ServiceePro from './components/auth/servicepro.jsx';
import Professional from './components/requests/Professional.jsx';
import RequestDetail from './components/requests/RequestDetail.jsx';
import RequestUser from './components/requests/RequestUser.jsx'
import Payment from './components/Payment.jsx'
import Confirmcar from './components/gitcar/Confirm.jsx';
import Buttom from './components/ComponentsAchref/Buttom.jsx'
import LandingPage from './components/auth/LandingPage.jsx';
import Onboarding from './components/auth/tipGEner.jsx'
import Shop from './components/auth/shop/shop.jsx';
import Details from './components/auth/shop/productDetails.jsx';
import WishlistScreen from './components/auth/shop/wishlist.jsx';
import HomeScreen from './components/auth/home.jsx';
import Cart from './components/auth/shop/cart.jsx';
import Ho from './components/auth/shop/ho.jsx';
import Category from './components/auth/shop/category.jsx';
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
       initialRouteName="shop"
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
          name="shop"
          component={Shop}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />

<Stack.Screen
          name="ho"
          component={Ho}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
         <Stack.Screen
          name="cart"
          component={Cart}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
        <Stack.Screen
          name="WishlistScreen"
          component={WishlistScreen}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
         <Stack.Screen
          name="category"
          component={Category}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
         <Stack.Screen
          name="details"
          component={Details}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
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
          name="tips"
          component={Onboarding}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
         <Stack.Screen
          name="chatlist"
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
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />

       
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
