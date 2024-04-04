import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import axios from 'axios'
import { IP } from '../../ip.json'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const RequestUser = () => {
    const [requests, setRequests] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userId = await AsyncStorage.getItem('userId');
                const result = await axios.get(`http://${IP}:8080/reqU/getall/${userId}`);
                setRequests(result.data);
            } catch (error) {
                console.log("Error fetching requests:", error);
            }
        };

        fetchData();
    }, []); 

    const handleViewDetails = (request) => {
      navigation.navigate('DetailsRequest', { item : request });
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Requests List</Text>
            {requests.map((request) => (
                <View key={request.idrequest} style={styles.requestContainer}>
                    <View style={styles.requestInfo}>
                        <View style={styles.requestIdContainer}>
                            <Text style={styles.requestId}>REQUEST ID: {request.idrequest} </Text>
                        </View>
                        <Text style={styles.label}>Brand: {request.brand}</Text>
                        <Text style={styles.label}>Problem: {request.problem}</Text>
                        <Text style={styles.label}>Description: {request.description}</Text>
                        <Text style={styles.label}>More Description: {request.moredescription}</Text>
                        <Text style={styles.label}>Milage: {request.milage}</Text>
                        <Text style={styles.label}>Status: {request.status}</Text>
                        <Text style={styles.label}>Image: {request.imageurl}</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleViewDetails(request)}
                    >
                        <Text style={styles.viewDetails}>View Details</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000',
    },
    requestContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    requestInfo: {
        flex: 1,
    },
    requestIdContainer: {
        backgroundColor: 'rgb(58,159,253)',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 10,
    },
    requestId: {
        color: 'black',
        fontWeight: 'bold',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#000',
    },
    button: {
        backgroundColor: 'rgb(58,159,253)',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    viewDetails: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default RequestUser;
