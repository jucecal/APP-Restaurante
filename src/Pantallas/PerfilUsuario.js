import { Text, ScrollView, View, Button, ImageBackground, TextInput, Alert, Image, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import Estilos from '../Componentes/Estilos';
import logo01 from '../../assets/logo-01.png';
import UsuarioContext from '../contexto/UsuarioContext';
import Cargando from '../Componentes/Cargando';
import tailwind from 'tailwind-react-native-classnames';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { urlImagenesUsuariosEM, urlImagenesUsuariosCL } from '../configuracion/Urls';
import { useNavigation } from '@react-navigation/core';
import * as ImagePicker from 'expo-image-picker';
import AxiosImagen from '../Componentes/AxiosImagen';
import Proveedor from '../Pantallas/Proveedor';
import Cliente from './Cliente';

const Login = () => {
    const { usuario, setCerrarSesion, setUsuario } = useContext(UsuarioContext);
    const [nombre, setnombre] = useState(usuario.nombre);
    const [imagen,setImagen] = useState("");
    const [apellido, setApellido] = useState(usuario.apellido);
    const [validarUsuario, setValidarUsuario] = useState(false);
    const [validarContrasena, setValidarContrasena] = useState(false);
    const [nombreCompleto, setNombreCompleto] = useState(nombre + ' ' + apellido);
    const [espera, setEspera] = useState(false);
    const [modificar, setModificar] = useState(false);
    const cambioSwitch = () => setModificar(previousState => !previousState);
    const navigation = useNavigation()
    
    const titulo = 'Perfil de Usuario';
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
        console.log("Ir a Colaborador");
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

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
    
        console.log(result);
        const resultado = result;
    
        if (!result.canceled) {
          setImagen(result.assets[0].uri);
        }
        
        const archivo = new FormData();
        let uriParts = result.assets[0].uri.split('.');
        let tipo = result.assets[0].uri.type + '/' + uriParts[uriParts.length-1];
        uriParts = result.assets[0].uri.split('/');
        let nombre = uriParts[uriParts.length -1];
        uriParts = result.assets[0].uri;
        archivo.append('id', 1);
        archivo.append('img',{
            name: nombre,
            type: tipo,
            uri: uriParts
        });
        
        try {
            var textoMensaje = "";
            
            await AxiosImagen.post('/empleados/imagen', archivo)
                .then(async (data) => {
                    const json = data.data;
                    console.log(data.data);
                    console.log("se pudo-----------------------------")
                    if (json.errores.length == 0) {
                        console.log(data.data);
                        await setUsuario({ usuario: usuario.correo});
                        Alert.alert("LISTO", "la imagen se ha guardado");
                    }
                    else {
                        textoMensaje = '';
                        json.errores.forEach(element => {
                            textoMensaje += element.mensaje + '. ';
                        });
                    }
                })
                .catch((error) => {
                    textoMensaje = error;
                });
        } catch (error) {
            textoMensaje = error;
            console.log(error);
        }
      };

    return (
        <View style={Estilos.contenedorPrincipal}>
            <View style={Estilos.contenedorTitulo}>
                <ImageBackground
                    source={logo01}
                    resizeMode='stretch'
                    style={Estilos.imagenFondo}
                >
                </ImageBackground>
            </View>



            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={Estilos.contenedorTitulo2}>
                    <Text style={Estilos.textoTitulo}>{titulo}</Text>
                </View>

                <View style={Estilos.contenedorContenido}>
                    {
                        espera ? (
                            <Cargando texto="Estableciendo conexion con la API"></Cargando>
                        ) : (
                            <>

                                <View style={Estilos.contenedorControles}>
                                    <View style={styles.contenedorImagen}>
                                        <Image
                                            style={styles.imagen}
                                            source={{ uri: urlImagenesUsuariosEM + usuario.imagen }}
                                        />
                                    </View>

                                    
                                </View>
                                <View style={Estilos.contenedorControles}>
                                    <Text style={Estilos.etiqueta}>{"Nombre: " + nombreCompleto}</Text>
                                    <Text style={Estilos.etiqueta}>{"Correo: " + usuario.correo}</Text>
                                </View>

                                

                                <View style={Estilos.contenedorBotones}>
                                    <View style={Estilos.boton}>
                                        <Button

                                            title='Cambiar Imagen'
                                            color={'#000'}
                                            onPress={ pickImage}
                                        ></Button>
                                    </View>
                                </View>
                                <View style={Estilos.contenedorBotones}>
                                    <View style={Estilos.boton}>
                                        <Button
                                            title='Cerrar Sesión'
                                            color={'#F9813A'}
                                            onPress={cerrarSesion}
                                        ></Button>
                                    </View>
                                </View>



                                <View style={tailwind`mx-4 border-t border-t-2 mt-5 border-gray-100`}>
                                    <Text style={tailwind`text-gray-800 mt-2 text-lg mb-2`}>Administrar Opciones</Text>


                                    <SavedPlaces
                                        title="Clientes"
                                        text="Agregar, Editar o Eliminar clientes."
                                        Icon={() => <AntDesign name="user" size={28} color="black"/>}
                                        func = {irCliente}
                                    />


                                    <SavedPlaces
                                        title="Proveedores"
                                        text="Agregar, Editar o Eliminar proveedores."
                                        Icon={() => <Feather name="truck" color="black" size={24} />}
                                        func = {irProveedor}
                                    />

                                    <SavedPlaces
                                        title="Inventario"
                                        text="Ver Inventario."
                                        Icon={() => <Feather name="list" color="black" size={24} />}
                                        func = {irInventario}
                                    />
                                </View>
                            </>
                        )
                    }
                </View>
            </ScrollView>

        </View>
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


