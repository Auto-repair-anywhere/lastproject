import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'; 
import { IP } from '../../nativefront/ip.json';
import { ScrollView } from 'react-native-gesture-handler';
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
                Number:Number,
                email:email,
                password:password
            });
            console.log(response.data); 
        } catch (error) {
            console.log("aaaaa",error);  
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}> My Account</Text>
                </View>
            </View>

            <View style={styles.content}>
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Edit Your Profile</Text>
                   <View style={{flexDirection:'row'}}>
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
                   </View>
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
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 12,
        backgroundColor:'white'
    },
    header: {
        flexDirection: 'row',
        backgroundColor:'white',
        padding:10,
        borderRadius:20,
    },
    headerText: {
        color: '#007bff',
        fontSize: 25,
        fontWeight:'bold',
        


    },
    content: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginHorizontal: 28,
        marginVertical: 30,
    },
    formContainer: {
        padding: 10,
        marginLeft:25
       
    },
    title: {
        color: '#007bff',
        fontSize: 25,
        backgroundColor:'white',
        padding:10,
        borderRadius:20


    },
    input: {
      backgroundColor:'white',
      border:2 ,
      borderRadius:20,
      marginTop:10,
      padding:5,
      fontSize:20,
      margin:5
      
        
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 20
    },
    button: {
        marginRight: 20,
        color: '#007bff',
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius:10
    },
    buttonConfirm: {
        color: '#007bff',
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius:10
    }
});

export default EditProfileUser;
