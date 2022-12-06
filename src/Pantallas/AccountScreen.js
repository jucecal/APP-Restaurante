import React, { useContext, useState } from 'react';
import { View, Image, Text, TouchableOpacity, Icon, StyleSheet, ScrollView } from 'react-native';
import Screen from '../Componentes/Screen'
import Cargando from '../Componentes/Cargando';
import tailwind from 'tailwind-react-native-classnames';
import AppHead from '../Componentes/AppHead';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import UsuarioContext from './../contexto/UsuarioContext';
import { urlImagenesUsuariosEM, urlImagenesUsuariosCL } from '../configuracion/Urls';

const AccountScreen = () => {
    const { usuario, setCerrarSesion } = useContext(UsuarioContext);
    const [espera, setEspera] = useState(false);
    const cerrarSesion = async () => {
        await setCerrarSesion();
    };

    return (
        <Screen style={tailwind`flex-1 bg-white`}>
            {
                espera ? (
                    <Cargando texto="Estableciendo conexion con la API"></Cargando>
                ) : (
                    <>
                        <AppHead title={`Cuenta`}
                            icon="settings-outline"
                        />


                        <View style={tailwind`justify-center items-center`}>
                            <View style={tailwind`rounded-full overflow-hidden w-48 h-48 mt-4`}>
                                <Image
                                    style={styles.imagen}
                                    source={{ uri: urlImagenesUsuariosCL + usuario.imagen }}
                                />
                            </View>
                            <Text style={tailwind`mt-4 text-3xl font-bold text-red-500`}>{usuario.nombre}</Text>
                            <Text style={tailwind`text-lg text-indigo-900`}>{usuario.correo}</Text>
                        </View>

                        <ScrollView>
                        <View style={tailwind`mx-4 border-t border-t-2 mt-5 border-gray-100`}>
                            <Text style={tailwind`text-gray-800 mt-2 text-lg mb-2`}>Administrar Opciones</Text>
                            <SavedPlaces
                                text="Términos y privacidad"
                            />
                        </View>

                        <View style={tailwind`mx-4 border-t border-t-2 mt-5 border-gray-100`}>
                            <SavedPlaces
                                text="Política de privacidad y seguridad"
                            />
                        </View>

                        <View style={tailwind`mx-4 border-t border-t-2 mt-5 border-gray-100`}>
                            <SavedPlaces
                                text="Políticas de reembolso"
                            />
                        </View>

                        <View style={tailwind`mx-4 border-t border-t-2 mt-5 border-gray-100`}>
                            <SavedPlaces
                                text="Ayuda"
                            />
                        </View>

                        <View style={tailwind`mx-4 border-t border-t-2 mt-5 border-gray-100`}>
                            <Text style={tailwind`text-gray-800 mt-2 text-lg`}>Otras Opciones</Text>
                            <TouchableOpacity>
                                <Text style={tailwind`text-red-500 my-8 mt-3 text-sm`} onPress={cerrarSesion}>Cerrar Sesión</Text>
                            </TouchableOpacity>
                        </View>
                        </ScrollView>
                        
                    </>
                )
            }
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

const SavedPlaces = ({ text }) => (
    <TouchableOpacity style={tailwind`flex-row items-center my-3`}>
        <View style={tailwind`ml-5`}>
            <Text style={tailwind`text-gray-600 text-xs mt-1`}>{text}</Text>
        </View>
    </TouchableOpacity>
)
