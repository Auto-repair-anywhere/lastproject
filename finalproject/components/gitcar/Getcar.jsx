import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; 
import Nav from '../auth/bottolnav';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import {IP} from '../../Backend/ip.json'
const Getcar = () => {

  const navigation = useNavigation();

  const [firstSection, setFirstSection] = useState('');
  const [secondSection, setSecondSection] = useState('');
  const [car,setCar]=useState("")
  console.log("first",firstSection,"swcond",secondSection);
  const handleSearch = async  () => {

    const inputValue = `${firstSection} TU ${secondSection}`;
    console.log(inputValue);
    axios.post(`http://${IP}:8080/findcar/car-info`,
    {
    licensePlate:inputValue,
    username:"ttttt"
    })
    .then((res)=>{
    setCar(res.data)
    console.log(res.data);
    })
    .catch((err)=>{
    console.log(err);
    })
  
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
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
        onPress={()=>{handleSearch() , navigation.navigate('Confirm')}}
        color="black"
      />
      <View style={{ bottom:-250, width: 422 }}>
        <Nav />
      </View>
    </View>
  );
};

export default Getcar;
