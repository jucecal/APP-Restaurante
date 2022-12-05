import React, { useContext } from 'react';
import { View, Image, Text, TouchableOpacity, Icon } from 'react-native';
import Screen from '../Componentes/Screen'

import tailwind from 'tailwind-react-native-classnames';
import AppHead from '../Componentes/AppHead';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import UsuarioContext from '../contexto/UsuarioContext';

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
                    title="Términos y condiciones"
                />
            </View>

            <View style={tailwind`mx-4 border-t border-t-2 mt-5 border-gray-100`}>
                <SavedPlaces
                    title="Privacidad"
                />
            </View>

            <View style={tailwind`mx-4 border-t border-t-2 mt-5 border-gray-100`}>
                <SavedPlaces
                    title="Ayuda"
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

export default AccountScreen;

const SavedPlaces = ({ title}) => (
    <TouchableOpacity style={tailwind`flex-row items-center my-3`}>
        <View style={tailwind`ml-5`}>
            <Text style={tailwind`text-gray-800`}>{title}</Text>
        </View>
    </TouchableOpacity>
)
