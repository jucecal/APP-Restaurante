import React from 'react';
import { View, ImageBackground, StyleSheet, ScrollView, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import Screen from '../Componentes/Screen';
import tailwind from 'tailwind-react-native-classnames';
import colors from '../consts/colors2';

const GroceryScreen = () => {
    return (
        <Screen style={tailwind`flex-1`}>
            <View style={tailwind` justify-center items-center`}>
                <Image source={require('../../assets/nombre.png')} style={tailwind`w-72 h-72`} />
                <Image source={require('../../assets/pizza.gif')} style={tailwind`w-72 h-72`} />
                <View style={tailwind`w-3/4`}>
                    <Text style={tailwind`text-lg text-center`}>Bienvenido al sistema de gestión administrativo</Text>
                </View>
            </View>
        </Screen>
    );
}

export default GroceryScreen;
