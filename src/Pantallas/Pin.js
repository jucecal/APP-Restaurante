import { Text, View, Button, ImageBackground, TextInput, Alert } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import Estilos from '../Componentes/Estilos';
import logo from '../../assets/nombre.png';
import AppForm from "../Componentes/forms/AppForm";
import * as yup from "yup";
import UsuarioContext from '../contexto/UsuarioContext';
import AppFormFeilds from "../Componentes/forms/AppFormFeilds";
import AppSubmitButton from '../Componentes/forms/AppSubmitButton';
import Cargando from '../Componentes/Cargando';
import Axios from '../Componentes/Axios';

const PostValidationSchema = yup.object().shape({
    correo: yup
        .string()
        .email("Por favorm envie una dirección de correo valida")
        .required("El correo es requerido")
});

const Pin = ({ navigation }) => {
    const [correo, setCorreo] = useState(null);
    const [espera, setEspera] = useState(false);
    const [msjEspera, setMsjEspera] = useState('Cargando datos');
    const titulo = 'Recuperar contraseña';

    const enviarPin = async ({ correo }) => {
        console.log(correo);
        setEspera(true);
        var textoMensaje = "";
        setMsjEspera('Enviando PIN al correo ' + correo);
        try {
            await Axios.post('/autenticacion/pin', {
                correo: correo
            })
                .then(async (data) => {
                    const json = data.data;
                    if (json.errores.length == 0) {
                        textoMensaje = json.data.msj;
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
        if (textoMensaje == 'Correo Enviado') {
            navigation.navigate('NuevaContrasena', { correo: correo });
        }
    }
    return (
        <View style={Estilos.contenedorPrincipal}>
            <View style={Estilos.contenedorTitulo}>
                <ImageBackground
                    source={logo}
                    style={Estilos.imagenFondo}
                >
                </ImageBackground>
            </View>
            <Text style={Estilos.textoTitulo}>{titulo}</Text>
            <View style={Estilos.contenedorContenido}>
                {
                    espera ? (
                        <Cargando texto={msjEspera}></Cargando>
                    ) : (
                        <>
                            <AppForm
                                initialValues={{ correo: "" }}
                                validationSchema={PostValidationSchema}
                                onSubmit={(values) => enviarPin(values)}
                            >
                                <AppFormFeilds
                                    name="correo"
                                    placeholder="Email"
                                />
                                <AppSubmitButton title="Ingresar" />
                            </AppForm>
                        </>
                    )
                }
            </View>
        </View>
    );
};
export default Pin;