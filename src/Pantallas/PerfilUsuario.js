import { Text, ScrollView, View, Button, ImageBackground, TextInput, Alert, Image, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import Estilos from '../Componentes/Estilos';
import logo01 from '../../assets/logo-01.png';
import UsuarioContext from '../contexto/UsuarioContext';
import Cargando from '../Componentes/Cargando';
import { urlImagenesUsuarios } from '../configuracion/Urls';

const Login = ({ navigation }) => {
    const { usuario, setCerrarSesion } = useContext(UsuarioContext);
    const [nombre, setnombre] = useState(usuario.nombre);
    const [apellido, setApellido] = useState(usuario.apellido);
    const [validarUsuario, setValidarUsuario] = useState(false);
    const [validarContrasena, setValidarContrasena] = useState(false);
    const [nombreCompleto, setNombreCompleto] = useState(nombre + ' ' + apellido);
    const [espera, setEspera] = useState(false);
    const [modificar, setModificar] = useState(false);
    const cambioSwitch = () => setModificar(previousState => !previousState);
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
            <View style={Estilos.contenedorTitulo2}>
                <Text style={Estilos.textoTitulo}>{titulo}</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>

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
                                        source={{uri: urlImagenesUsuarios + usuario.imagen}}
                                    />
                                </View>

                                <TouchableOpacity
                                    style={styles.touch}
                                >
                                    <Text style={Estilos.etiquetaTexto}>Editar imagen</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={Estilos.contenedorControles}>
                                <Text style={Estilos.etiqueta}>{"Nombre: " + nombreCompleto}</Text>
                                <Text style={Estilos.etiqueta}>{"Correo: " + usuario.correo}</Text>
                                <Text style={Estilos.etiqueta}>{"Login: " + usuario.login}</Text>
                                <Text style={Estilos.etiqueta}>{"Imagen: " + usuario.imagen}</Text>
                            </View>

                            <View style={Estilos.contenedorBotones}>
                            <Text style={styles.texto}>{modificar ? "Editando" : "Presione para editar"}</Text>
                                <View style={Estilos.boton}>
                                    <Switch
                                        trackColor={{ false: "red", true: "black" }}
                                        thumbColor={modificar ? "black" : "black"}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={cambioSwitch}
                                        value={modificar}
                                    />
                                </View>    
                            </View>

                            <View style={Estilos.contenedorBotones}>
                                <View style={Estilos.boton}>
                                    <Button
                                        title='Guardar Cambios'
                                        color={'#000'}
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




                            <TouchableOpacity
                                    style={styles.touch}
                                >
                                    <Text style={Estilos.etiquetaTexto}>Editar imagen</Text>
                                </TouchableOpacity>
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
        textDecorationColor: "Red",
        textShadowColor: "red",
        textShadowRadius: 1,
        marginTop: 22,
        marginLeft: 10,
        marginRight: 10,

    }
});
export default Login;