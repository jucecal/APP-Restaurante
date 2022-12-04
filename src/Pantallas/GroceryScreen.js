import React from 'react';
import { View, ImageBackground,StyleSheet, ScrollView, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import Screen from '../Componentes/Screen';
import tailwind from 'tailwind-react-native-classnames';
import logo01 from '../../assets/logo-01.png';
import colors from '../consts/colors2';

const GroceryScreen = () => {
    return (
        <Screen style={tailwind`flex-1 bg-white`}>
            <View style={styles.contenedorImagen}>
                <ImageBackground
                    source={logo01}
                    style={styles.imagenFondo}
                >
                </ImageBackground>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={tailwind`flex-1 justify-center items-center`}>
                    <Image source={require('../../assets/store-open.gif')} style={tailwind`w-72 h-72`} />
                    <View style={tailwind`w-3/4`}>
                        <Text style={tailwind`text-lg text-center`}>Lo sentimos, la tienda no está disponible</Text>
                        <Text style={tailwind`text-lg text-center text-xs text-gray-600 mt-3`}>Ve a Come Rico - La Ceiba 🍕🍕</Text>
                    </View>
                </View>
            </ScrollView>


           
        </Screen>
    );
}


const styles = StyleSheet.create({
    input: {
        borderColor: colors.medium,
        borderWidth: 1,
    },
    contenedorImagen: {
        backgroundColor: '#fff',
        alignItems: 'center',
        height: 110,
        
    },
    imagenFondo: {
        width: 190,
        height: 120,
        backgroundColor: '#fff',
    },
})

export default GroceryScreen;
