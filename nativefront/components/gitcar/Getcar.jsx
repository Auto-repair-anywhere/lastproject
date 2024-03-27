import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Alert, Image,Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; 
import Nav from '../auth/bottolnav';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import {IP} from '../../ip.json'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Getcar =  () => {
const [user,setUser]=useState([])
useEffect(()=>{
  AsyncStorage.getItem('user').then((res)=>{
    setUser(JSON.parse(res))
   }).catch((err)=>{
     console.log(err);
   })
},[])  

console.log(user.iduser)
  const navigation = useNavigation()

    const handleSearch = async () => {
        const inputValue = `${firstSection} TU ${secondSection}`;
        console.log(inputValue);
        const id = await AsyncStorage.getItem('userId');
      
        axios.post(`http://${IP}:8080/findcar/car-info/${id}`, {
            licensePlate: inputValue,
            username: "achrefff",
            serie: inputValue,
          })
          .then((res) => {
            setCar(res.data);
            console.log(res.data);
            
            navigation.navigate('Confirm', { carData: res.data });
          })
          .catch((err) => {
            console.log(err);
          });
      };



  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
          <Text style={{marginLeft:-320,top:-20}} >
            Name
          </Text>
      <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 90, width: 360, borderWidth: 1, borderColor: 'gray', borderRadius: 6, overflow: 'hidden',marginLeft:-10,height:60 }} >
      <Text>
        {user.firstname}
      </Text>
        </View>

        <Text style={{marginLeft:-320,top:-20}} >
            Service
          </Text>
      <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 120, width: 360, borderWidth: 1, borderColor: 'gray', borderRadius: 6, overflow: 'hidden',marginLeft:-10,height:60 }} >
      <Text>
        {user.lastname} 
      </Text>
        </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, width: 180, borderWidth: 1, borderColor: 'gray', borderRadius: 5, overflow: 'hidden' }}>
        <TextInput
          style={{ flex: 1, height: 40, paddingHorizontal: 10 }}
          value={firstSection}
          onChangeText={setFirstSection}
          placeholder="XXX"
          keyboardType="numeric"
          maxLength={3}
        />
        <Image
          source={{ uri: 'https://www.stickerni.tn/wp-content/uploads/2022/03/Arabic-Tunisia.png' }}
          style={{ width: 50, height: 50 }}
        />
        <TextInput
          style={{ flex: 1, height: 40, paddingHorizontal: 10 }}
          value={secondSection}
          onChangeText={setSecondSection}
          placeholder="XXXX"
          keyboardType="numeric"
          maxLength={4}
        />
      </View>
      <Button
        title="Search"
        onPress={()=> handleSearch()}
        color="black"
      />
      <View style={{ bottom:-250, width: 422 }}>
        <Nav />
      </View>
    </View>
  );
};

export default Getcar;

