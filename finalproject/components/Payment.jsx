import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import axios from 'axios';


const Payment = () => {
    const [total, setTotal] = useState(7000);

    const pay = async () => {
        try {
            const response = await axios.post('http://192.168.104.5:8080/payment/pay', { amount: total });
            const { result } = response.data;
            console.log('Payment link:', result.link);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button title="Proceed to Payment" onPress={pay} />
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
