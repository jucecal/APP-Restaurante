import { Text, View, Button, ImageBackground, TextInput, Alert } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import Estilos from '../Componentes/Estilos';
import misericordia from '../../assets/pizza.jpg';
import UsuarioContext from '../contexto/UsuarioContext';
import Cargando from '../Componentes/Cargando';
import Axios from '../Componentes/Axios';

const NuevaContrasena = ({ navigation, route }) => {
    const [pin, setPin] = useState(null);
    const { correo } = route.params;
    const [contrasena, setContrasena] = useState(null);
    const [confirmarContrasena, setconfirmarContrasena] = useState(null);
    const [validarPin, setValidarPin] = useState(false);
    const [validarContrasena, setValidarContrasena] = useState(false);
    const [validarConfirmarContrasena, setValidarConfirmarContrasena] = useState(false);
    const { setLogin } = useContext(UsuarioContext);
    const [espera, setEspera] = useState(false);
    const titulo = 'Recuperar Contrasena';
    useEffect(() => {
        if (!pin) {
            setValidarPin(true);
        }
        else if (pin.length < 4) {
            setValidarPin(true);
        }
        else {
            setValidarPin(false);
        }
        if (!contrasena) {
            setValidarContrasena(true);
        }
        else if (contrasena.length < 6) {
            setValidarContrasena(true);
        }
        else {
            setValidarContrasena(false);
        }
        if (!confirmarContrasena) {
            setValidarConfirmarContrasena(true);
        }
        else if (confirmarContrasena.length < 6) {
            setValidarConfirmarContrasena(true);
        }
        else if (contrasena != confirmarContrasena) {
            setValidarConfirmarContrasena(true);
        }
        else {
            setValidarConfirmarContrasena(false);
        }
    }, [pin, contrasena, confirmarContrasena]);
    const iniciarSesion = async () => {
        console.log(correo);
        if (!validarContrasena && !validarConfirmarContrasena && !validarPin) {
            setEspera(true);
            var textoMensaje = '';
            try {
                await Axios.put('/autenticacion/recuperarcontrasena?usuario=' + correo, {
                    pin: pin,
                    contrasena: contrasena
                })
                    .then(async (data) => {
                        const json = data.data;
                        if (json.errores.length == 0) {
                            textoMensaje = "Contrasena Actualizada";
                        }
                        else {
                            textoMensaje = '';
                            json.errores.forEach(element => {
                                textoMensaje += element.mensaje + '. ';
                            });
                        }
                    })
                    .catch((error) => {
                        textoMensaje = "La API no se encuentra activa o no responde";
                        console.log(error);
                    });
            } catch (error) {
                textoMensaje = "Error en la aplicacion";
                console.log(error);
            }
            setEspera(false);
            Alert.alert(titulo, textoMensaje);
            if (textoMensaje == 'Contrasena Actualizada') {
                navigation.navigate('Login');
            }
        }
        else {
            Alert.alert(titulo, 'Debe enviar los datos correctos');
        }
    };
    return (
        <View style={Estilos.contenedorPrincipal}>
            <View style={Estilos.contenedorTitulo}>
                <ImageBackground
                    source={misericordia}
                    resizeMode='stretch'
                    style={Estilos.imagenFondo}
                >
                    <Text style={Estilos.textoTitulo}>{titulo}</Text>
                </ImageBackground>
            </View>
            <View style={Estilos.contenedorContenido}>
                {
                    espera ? (
                        <Cargando texto="Cargando Datos"></Cargando>
                    ) : (
                        <>
                            <View style={Estilos.contenedorControles}>
                                <Text style={Estilos.etiqueta}>Pin</Text>
                                <TextInput style={validarPin ? Estilos.entradaError : Estilos.entrada}
                                    placeholder='Escriba el pin enviado a su correo'
                                    value={pin}
                                    onChangeText={setPin}
                                    type="number"
                                >
                                </TextInput>
                                {
                                    validarPin ? (
                                        <>
                                            <Text style={Estilos.etiquetaError}>Debe escribir el pin enviado a su correo</Text>
                                        </>

                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                            </View>
                            <View style={Estilos.contenedorControles}>
                                <Text style={Estilos.etiqueta}>Contraseña</Text>
                                <TextInput style={validarContrasena ? Estilos.entradaError : Estilos.entrada}
                                    placeholder='Escriba la contraseña'
                                    secureTextEntry={true}
                                    value={contrasena}
                                    onChangeText={setContrasena}
                                >
                                </TextInput>
                                {
                                    validarContrasena ? (
                                        <>
                                            <Text style={Estilos.etiquetaError}>Debe escribir la contrasena</Text>
                                        </>
                                    ) : (<></>)
                                }
                            </View>
                            <View style={Estilos.contenedorControles}>
                                <Text style={Estilos.etiqueta}>Comfirmar Contraseña</Text>
                                <TextInput style={validarContrasena ? Estilos.entradaError : Estilos.entrada}
                                    placeholder='Escriba la contraseña nuevamente'
                                    secureTextEntry={true}
                                    value={confirmarContrasena}
                                    onChangeText={setconfirmarContrasena}
                                >
                                </TextInput>
                                {
                                    validarConfirmarContrasena ? (
                                        <>
                                            <Text style={Estilos.etiquetaError}>La contrasena no son iguales</Text>
                                        </>
                                    ) : (<></>)
                                }
                            </View>
                            <View style={Estilos.contenedorBotones}>
                                <View style={Estilos.boton}>
                                    <Button
                                        title='Entrar'
                                        color={'#000'}
                                        onPress={iniciarSesion}
                                    ></Button>
                                </View>
                                <View style={Estilos.boton}>
                                    <Button
                                        title='Salir'
                                        color={'red'}
                                    ></Button>
                                </View>
                            </View>
                            <View style={Estilos.contenedorBotones}>
                                <View style={Estilos.boton}>
                                    <Button
                                        title='Recuperar Contraseña'
                                        color={'#000'}

                                    ></Button>
                                </View>
                            </View>
                        </>
                    )
                }

            </View>
        </View>
    );
}
export default NuevaContrasena;