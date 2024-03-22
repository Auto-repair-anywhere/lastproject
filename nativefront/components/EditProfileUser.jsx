import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'; 
import { IP } from '../../nativefront/ip.json';
const EditProfileUser =  () => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const[Number,setNumber]=useState('')
    const [email, setEmail] = useState('');
    const [oldPassWord, setOldPassWord] = useState('');
    const [password, setPassword] = useState('');
    const [passWordr, setPasswordr] = useState('');
    const navigation = useNavigation(); 

    const updateProfile = async () => {
        try {
            const response = await axios.put(`http://${IP}:8080/user/put/${1}`, {
                firstname:firstname,
                lastname:lastname,
                email:email,
                password:password,
                Number:Number  
            });
            console.log(response.data); 
        } catch (error) {
            console.log("aaaaa",error);  
        }
    };

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}> My Account</Text>
                </View>
            </View>

            <View style={styles.content}>
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Edit Your Profile</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="First name"
                        value={firstname}
                        onChangeText={text => setFirstname(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Last name"
                        value={lastname}
                        onChangeText={text => setLastname(text)}
                    />
                      <TextInput
                        style={styles.input}
                        placeholder="Number"
                        value={Number}
                        onChangeText={text => setNumber(text)}
                    />
        
                    <TextInput
                        style={styles.input}
                        placeholder="Email address"
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Current password"
                        secureTextEntry={true}
                        value={oldPassWord}
                        onChangeText={text => setOldPassWord(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="New password"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm password"
                        secureTextEntry={true}
                        value={passWordr}
                        onChangeText={text => setPasswordr(text)}
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('')}>
                            <Text style={styles.button}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={updateProfile}>
                            <Text style={styles.buttonConfirm}>Confirm Changes</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 12
    },
    header: {
        flexDirection: 'row'
    },
    headerText: {
        color: '#007bff'
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginHorizontal: 28,
        marginVertical: 30
    },
    formContainer: {
        padding: 14
    },
    title: {
        color: '#007bff'
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: '#808080',
        fontSize: 20,
        marginVertical: 8
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 20
    },
    button: {
        marginRight: 20
    },
    buttonConfirm: {
        color: '#fff',
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20
    }
});

export default EditProfileUser;
