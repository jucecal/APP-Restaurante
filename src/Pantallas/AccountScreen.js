import React, { useContext, useState } from 'react';
import { View, Image, Text, TouchableOpacity, Icon, StyleSheet } from 'react-native';
import Screen from '../Componentes/Screen'

import tailwind from 'tailwind-react-native-classnames';
import AppHead from '../Componentes/AppHead';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import UsuarioContext from './../contexto/UsuarioContext';
import { urlImagenesUsuariosEM, urlImagenesUsuariosCL } from '../configuracion/Urls';

const AccountScreen = () => {
    const { setCerrarSesion } = useContext(UsuarioContext);
    const cerrarSesion = async () => {
        await setCerrarSesion();
    };

    return (
        <Screen style={tailwind`flex-1 bg-white`}>
            <AppHead title={`Cuenta`}
                icon="settings-outline"
            />

            <View style={tailwind`justify-center items-center`}>
                <View style={tailwind`rounded-full overflow-hidden w-48 h-48 mt-4`}>
                    <Image source={require('../../assets/avatar.gif')} style={tailwind`w-48 h-48`} />
                </View>
                <Text style={tailwind`mt-4 text-3xl font-bold text-red-500`}>Lewa</Text>
                <Text style={tailwind`text-lg text-indigo-900`}>Lewa@gmail.com</Text>
            </View>

            <View style={tailwind`mx-4 border-t border-t-2 mt-5 border-gray-100`}>
                <Text style={tailwind`text-gray-800 mt-2 text-lg mb-2`}>Administrar Opciones</Text>
                <SavedPlaces
                    title="Clientes"
                    text="Agregar, editar y eliminar clientes."
                    Icon={() => <AntDesign name="user" size={24} color="black" />}
                />
                <SavedPlaces
                    title="Empleados"
                    text="Agregar, editar y eliminar empleados."
                    Icon={() => <AntDesign name="idcard" size={24} color="black" />}
                />

                <SavedPlaces
                    title="Proveedores"
                    text="Agregar, editar y eliminar proveedores."
                    Icon={() => <Feather name="truck" size={24} color="black" />}
                />
                <SavedPlaces
                    title="Inventario"
                    text="Ver Inventario."
                    Icon={() => <Feather name="list" size={24} color="black" />}
                />
            </View>

            <View style={tailwind`mx-4 border-t border-t-2 mt-5 border-gray-100`}>
                <Text style={tailwind`text-gray-800 mt-2 text-lg`}>Otras Opciones</Text>
                <TouchableOpacity>
                    <Text style={tailwind`text-red-500 mt-3 text-sm`} onPress={cerrarSesion}>Cerrar Sesión</Text>
                </TouchableOpacity>
            </View>

        </Screen>
    );
}

const styles = StyleSheet.create({
    sombraControles: {
        shadowColor: "#000",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    touch: {
        alignItems: "center",
        margin: 15,
        backgroundColor: "#000",
        padding: 10,
        borderRadius: 30,
    },
    entradas: {
        alignItems: "center",
        marginBottom: 20,
        padding: 10,
        fontSize: 20,
        fontWeight: "400",
        color: "#495057",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#ced4da",
        borderRadius: 15,
    },
    contenedorImagen: {
        alignItems: 'center',
        backgroundColor: "#ddd",
        width: 180,
        height: 180,
        borderRadius: 100,
        marginLeft: 100,
        marginRight: 100,
        marginBottom: 10
    },
    imagen: {
        width: 180,
        height: 180,
        resizeMode: "contain",
        borderWidth: 3,
        borderColor: "#dedede",
        borderRadius: 90,
    },

    texto: {
        color: "black",
        textDecorationColor: "black",
        textShadowColor: "#F9813A",
        textShadowRadius: 1,
        marginTop: 22,
        marginLeft: 10,
        marginRight: 10,

    }
});

export default AccountScreen;

const SavedPlaces = ({ title, text, Icon }) => (
    <TouchableOpacity style={tailwind`flex-row items-center my-3`}>
        <Icon />
        <View style={tailwind`ml-5`}>
            <Text style={tailwind`text-gray-800`}>{title}</Text>
            <Text style={tailwind`text-gray-600 text-xs mt-1`}>{text}</Text>
        </View>
    </TouchableOpacity>
)
