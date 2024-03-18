import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, ScrollView, KeyboardAvoidingView, Text, Platform, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; 
import Nav from '../auth/bottolnav';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { IP } from '../../ip.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Getcar = () => {
    const navigation = useNavigation();
    const [firstSection, setFirstSection] = useState('');
    const [secondSection, setSecondSection] = useState('');
    const [car, setCar] = useState("");

    console.log("first", firstSection, "second", secondSection);

    const handleSearch = async () => {
        const inputValue = `${firstSection} TU ${secondSection}`;
        console.log(inputValue);
        const id = await AsyncStorage.getItem('userId')
        axios.post(`http://${IP}:8080/findcar/car-info/${id}`,
        {
            licensePlate: inputValue,
            username: "helloo",
            serie: inputValue,
        })
        .then((res) => {
            setCar(res.data);
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
                    <Text style={{ marginLeft: -320, top: -20 }}>
                        Name
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 90, width: 360, borderWidth: 1, borderColor: 'gray', borderRadius: 6, overflow: 'hidden', marginLeft: -10, height: 60 }}>
                    </View>
                    <Text style={{ marginLeft: -320, top: -20 }}>
                        Service
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 120, width: 360, borderWidth: 1, borderColor: 'gray', borderRadius: 6, overflow: 'hidden', marginLeft: -10, height: 60 }}>
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
                        onPress={() => { handleSearch(), navigation.navigate('Confirm') }}
                        color="black"
                    />
                    <View style={{ bottom: -250, width: 422 }}>
                        <Nav />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Getcar;
