import React from 'react';
import { View, ImageBackground, StyleSheet, ScrollView, Text, TouchableOpacity, Image, TextInput, style } from 'react-native';
import Screen from '../Componentes/Screen';
import logo01 from '../../assets/nombre.png'
import tailwind from 'tailwind-react-native-classnames';
import colors from '../consts/colors';
//<Image source={require('../../assets/nombre.png')} style={tailwind`w-72 h-72`} />

const GroceryScreen = () => {
    return (
        <Screen style={tailwind`flex-1`}>

            <View style={styles.contenedorImagen}>
                <ImageBackground
                    source={logo01}
                    style={styles.imagenFondo}
                >
                </ImageBackground>

                <View style={tailwind` justify-center items-center`}>
                    <View style={styles.Gif}>
                        <Image source={require('../../assets/pizza.gif')} style={tailwind`w-72 h-72`} />
                    </View>

                    <View style={styles.ContenedorTexto}>
                        <Text
                            style={styles.TextoTitulo}
                        >
                            ¡¡Bienvenido!!
                        </Text>

                        <Text
                            style={styles.Texto}
                        >
                            Sistema de Gestión Administrativo.
                        </Text>
                    </View>
                </View>

            </View>    

        </Screen>
    );
}



const styles = StyleSheet.create({
    input: {
        borderColor: colors.medium,
        borderWidth: 1,
        marginBottom: 10,
    },
    contenedorImagen: {
        backgroundColor: '#f6f3e1',
        alignItems: 'center',
        height: 970,

    },
    Gif: {
        paddingTop: 100,
        backgroundColor: '#f6f3e1',
        alignContent:'center',
        height: 350,

    },
    imagenFondo: {
        width: 190,
        height: 120,
        backgroundColor: '#f6f3e1',
    },
    ContenedorTexto: {
        alignItems:'center',
        width: 400,
        height: 320,
    },
    TextoTitulo: {
        color: colors.primary,
        fontSize: 30,
        justifyContent:'center',
    },
    Texto: {
        color: colors.dark,
        fontSize: 17,
        justifyContent:'center',
    },

})


export default GroceryScreen;
