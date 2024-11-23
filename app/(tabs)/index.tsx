import React from "react";
import { Text, View, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";

const Home = () => {
    const [amount, setAmount] = React.useState('');
    const [result, setResult] = React.useState('');

    const handleConvert = () => {
        if (amount === '') {
            Alert.alert('Please enter a number');
            return;
        }
        const convertedAmount = parseFloat(amount) * 0.85;
        setResult(convertedAmount.toFixed(2));
        Alert.alert('Conversion Result', `Converted Amount :  €${convertedAmount.toFixed(2)}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter Amount (USD):</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Amount"
                value={amount}
                onChangeText={(text) => setAmount(text)}
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.button} onPress={handleConvert}>
                <Text style={styles.buttonText}>Convert</Text>
            </TouchableOpacity>
            {result && <Text style={styles.result}>€{result}</Text>}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        width: '80%',
        padding: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    result: {
        marginTop: 20,
        fontSize: 18,
        color: '#333',
    },
});


export default Home;