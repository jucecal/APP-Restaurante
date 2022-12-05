import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../consts/colors';
import { Ionicons } from '@expo/vector-icons';

const TabCartButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Ionicons name="md-cart" color='#F9813A' size={30} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        height: 60,
        width: 60,
        borderRadius: 30,
        bottom: 30,
        borderColor: '#ffe7d9',
        borderWidth: 5,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default TabCartButton;
