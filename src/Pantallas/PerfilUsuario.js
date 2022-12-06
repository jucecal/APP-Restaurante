import { Text, ScrollView, View, Button, ImageBackground, TextInput, Alert, Image, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import Estilos from '../Componentes/Estilos';
import UsuarioContext from '../contexto/UsuarioContext';
import Screen from '../Componentes/Screen'
import Cargando from '../Componentes/Cargando';
import tailwind from 'tailwind-react-native-classnames';
import AppHead from '../Componentes/AppHead';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { urlImagenesUsuariosCL } from '../configuracion/Urls';
import { useNavigation } from '@react-navigation/core';

const Login = () => {
    const { usuario, setCerrarSesion } = useContext(UsuarioContext);
    const [nombre, setnombre] = useState(usuario.nombre);
    const [apellido, setApellido] = useState(usuario.apellido);
    const [validarUsuario, setValidarUsuario] = useState(false);
    const [validarContrasena, setValidarContrasena] = useState(false);
    const [nombreCompleto, setNombreCompleto] = useState(nombre + ' ' + apellido);
    const [espera, setEspera] = useState(false);
    const [modificar, setModificar] = useState(false);
    const cambioSwitch = () => setModificar(previousState => !previousState);
    const navigation = useNavigation()
    useEffect(() => {
        if (!nombre) {
            setValidarUsuario(true);
        }
        else if (nombre.length < 3) {
            setValidarUsuario(true);
        }
        else {
            setValidarUsuario(false);
        }
        if (!apellido) {
            setValidarContrasena(true);
        }
        else if (apellido.length < 6) {
            setValidarContrasena(true);
        }
        else {
            setValidarContrasena(false);
        }
    }, [nombre, apellido]);
    const cerrarSesion = async () => {
        await setCerrarSesion();
    };
    const irCliente = () => {
        console.log("Ir a Cliente");
        navigation.navigate('ClientesTab');
    }
    const irColaborador = () => {
        console.log("Ir a Empleados");
        navigation.navigate('EmpleadosTab');
    }
    const irProveedor = () => {
        console.log("Ir a Proveedor");
        navigation.navigate('ProveedoresTab');
    }
    const irInventario = () => {
        console.log("Ir a Inventario");
        navigation.navigate('Inventario');
    }


    return (
        <Screen style={tailwind`flex-1 bg-white`}>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={Estilos.contenedorContenido}>
                    {
                        espera ? (
                            <Cargando texto="Estableciendo conexion con la API"></Cargando>
                        ) : (
                            <>
                                <AppHead title={`Cuenta`}
                                    icon="settings-outline"
                                />

                                <View style={tailwind`justify-center items-center`}>
                                    <View style={styles.contenedorImagen}>
                                        <Image
                                            style={styles.imagen}
                                            source={{ uri: urlImagenesUsuariosCL + usuario.imagen }}
                                        />
                                    </View>
                                    <Text style={tailwind`mt-4 text-3xl font-bold text-red-500`}>{usuario.nombre}</Text>
                                    <Text style={tailwind`text-lg text-indigo-900`}>{usuario.correo}</Text>
                                </View>

                                <TouchableOpacity
                                    style={styles.touch}
                                >
                                    <Text style={tailwind`text-gray-100 text-sm`}>Editar imagen</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.touch}
                                >
                                    <Text style={tailwind`text-gray-50 text-sm`}>Guardar cambios</Text>
                                </TouchableOpacity>
                                <View style={tailwind`mx-4 border-t border-t-2 mt-5 border-gray-100`}>
                                    <Text style={tailwind`text-gray-800 mt-2 text-lg mb-2`}>Administrar Opciones</Text>

                                    <SavedPlaces
                                        title="Clientes"
                                        text="Agregar, Editar o Eliminar clientes."
                                        Icon={() => <AntDesign name="user" size={28} color="black" />}
                                        func={irCliente}
                                    />

                                    <SavedPlaces
                                        title="Empleados"
                                        text="Agregar, Editar o Eliminar empleados."
                                        Icon={() => <AntDesign name="idcard" size={24} color="black" />}
                                        func={irColaborador}
                                    />

                                    <SavedPlaces
                                        title="Proveedores"
                                        text="Agregar, Editar o Eliminar proveedores."
                                        Icon={() => <Feather name="truck" color="black" size={24} />}
                                        func={irProveedor}
                                    />

                                    <SavedPlaces
                                        title="Inventario"
                                        text="Ver Inventario."
                                        Icon={() => <Feather name="list" color="black" size={24} />}
                                        func={irInventario}
                                    />
                                </View>
                            </>
                        )
                    }
                </View>
                <View style={tailwind`mx-4 border-t border-t-2 mt-5 border-gray-100`}>
                    <Text style={tailwind`text-gray-800 mt-2 text-lg`}>Otras Opciones</Text>
                    <TouchableOpacity>
                        <Text style={tailwind`text-red-500 my-8 mt-3 text-sm`} onPress={cerrarSesion}>Cerrar Sesión</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </Screen>
    );
};
const styles = StyleSheet.create({
    sombraControles: {
        shadowColor: "#000",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    touch: {
        alignItems: "center",
        backgroundColor: "#A7C957",
        margin: 15,
        padding: 10,
        borderRadius: 8,
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
        marginBottom: 10,
        marginTop: 30
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
export default Login;

const SavedPlaces = ({ title, text, Icon, func }) => (
    <TouchableOpacity style={tailwind`flex-row items-center my-3`} onPress={func}>
        <Icon />
        <View style={tailwind`ml-5`}>
            <Text style={tailwind`text-gray-800`}>{title}</Text>
            <Text style={tailwind`text-gray-600 text-xs mt-1`}>{text}</Text>
        </View>
    </TouchableOpacity>
)


