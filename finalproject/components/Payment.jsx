import React, { useState } from 'react';
import { View, Button, StyleSheet ,Linking} from 'react-native';
import axios from 'axios';
import {IP} from '../ip.json'
import { useNavigation } from '@react-navigation/native';
const Payment = () => {
    const [total, setTotal] = useState(7000);
    const navigation = useNavigation();
    const pay = async () => {
        try {
            const response = await axios.post(`http://${IP}:8080/payment/pay`, { amount: total });
            const { result } = response.data;
            console.log('Payment link:', result.link);
            Linking.openURL(`${result.link}`)
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button title="Proceed to Payment" onPress={pay}  />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        marginVertical: 20,
    },
});

export default Payment;
