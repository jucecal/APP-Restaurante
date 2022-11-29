import { StyleSheet, Text, View, ImageBackground, TextInput, Button, Alert } from 'react-native';
import Estilos from '../Componentes/Estilos';
import imagen from '../../assets/pizza.jpg';
import React, { useState, useEffect, useContext } from 'react';

import UsuarioContext from '../contexto/UsuarioContext';
const Login = () => {
    const [usuario, setUsuario] = useState(null);
    const [contrasena, setContrasena] = useState(null);
    const [validacionUsuario, setValidacionUsuario] = useState(false);
    const [validacionContrasena, setValidacionContrasena] = useState(false);
    const {setLogin, token, setDatos} = useContext(UsuarioContext);
    setDatos();
    useEffect(() => {

        if (!usuario) {
            setValidacionUsuario(true);
        }
        else if (usuario.length < 3) {
            setValidacionUsuario(true);
        }
        else {
            setValidacionUsuario(false)
        }

        if (!contrasena) {
            setValidacionContrasena(true);
        }
        else if (contrasena.length < 6) {
            setValidacionContrasena(true);
        }
        else {
            setValidacionContrasena(false)
        }
    }, [usuario, contrasena]);
    const iniciarSesion = () =>{
        if(validacionUsuario || validacionContrasena){
            Alert.alert('Inicio Sesion', 'Hay errores en los datos');
        }
        else{
            setLogin({usuario: usuario, contrasena: contrasena});
            /*Axios.post(
                'autenticacion/iniciosesion',
                {
                    usuario: usuario,
                    contrasena: contrasena
                }
            ).then((data)=>{                
                const json = data.data;
                console.log(json);
                console.log(json.errores.length);
                if(json.errores.length > 0){
                    console.log(json.errores);
                    const errores = json.errores;
                    var e = '';
                    errores.forEach(element => {
                        e = e + element.mensaje + '. ';
                        
                    });
                    Alert.alert('Inicio sesion', e);
                }
                else{
                    const usu = json.data.usuario;
                    const token = json.data.token;
                    console.log(usu);
                    console.log(token);
                    Alert.alert('Inicio Sesion','Bienvenido '+ usu.nombre + ' ' + usu.apellido);

                }

            }).catch((er)=>{
                console.log(er);
                Alert.alert('Inicio sesion','La API no esta activa o no responde');
            });*/
        }
    };
    const ejemplo = () =>{
        Alert.alert('Inicio sesion ', token )
    }
    return (
        <View style={Estilos.contenedorPrincipal}>
            <View style={Estilos.contenedorTitulo}>
                <ImageBackground
                    source={imagen}
                    resizeMode='stretch'
                    style={Estilos.imagenFondo}
                >
                    <Text style={Estilos.textoTitulo}>Inicio Sesion</Text>
                </ImageBackground>
            </View>
            <View style={Estilos.contenedorContenido}>
                <View style={Estilos.contenedorControles}>
                    <Text style={Estilos.etiqueta}>Usuario</Text>
                    <TextInput
                        style={validacionUsuario? Estilos.entradasError:Estilos.entradas}
                        placeholder='Escriba el correo o nombre de usuario'
                        onChangeText={setUsuario}
                    ></TextInput>
                    {
                        validacionUsuario ? (
                            <>
                                <Text style={Estilos.etiquetaError}>Escriba los datos del usuario correctamente</Text>
                            </>
                        ):
                        (
                            <>

                            </>
                        )
                    }

                </View>
                <View style={Estilos.contenedorControles}>
                    <Text style={Estilos.etiqueta}>Contraseña</Text>
                    <TextInput
                        style={validacionContrasena? Estilos.entradasError: Estilos.entradas}
                        placeholder='Escriba la contraseña'
                        secureTextEntry={true}
                        onChangeText={setContrasena}
                    ></TextInput>
                    {
                        validacionContrasena ? (
                            <>
                                <Text style={Estilos.etiquetaError}>Escriba la contraseña correctamente</Text>
                            </>
                        ):
                        (
                            <>

                            </>
                        )
                    }

                </View>
                <View style={Estilos.contenedorBotones}>
                    <View style={Estilos.boton}>
                        <Button
                            title='Entrar'
                            color={'#000'}
                            onPress = {iniciarSesion}
                        ></Button>
                    </View>
                    <View style={Estilos.boton}>
                        <Button
                            title='Cerrar'
                            color={'red'}
                            onPress ={ejemplo}
                        ></Button>
                    </View>
                </View>

            </View>
        </View>
    );
};

export default Login;