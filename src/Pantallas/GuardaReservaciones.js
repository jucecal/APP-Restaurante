import React from 'react';
import { TouchableOpacity, StyleSheet,View, Text, ScrollView, Image, Alert, TextInput } from 'react-native';
import NumericInput from 'react-native-numeric-input'
import AntDesign from 'react-native-vector-icons/AntDesign';
//import moment from 'moment';
import AppForm from "../Componentes/forms/AppForm";
import COLORS from '../consts/colors';
import * as yup from "yup";
import AppFormFeilds from "../Componentes/forms/AppFormFeilds";
import EstilosEditar from '../Componentes/EstilosEditar';
import Axios from '../Componentes/Axios';
import AppSubmitButton from '../Componentes/forms/AppSubmitButton';

const PostValidationSchema = yup.object().shape({
    fecha: yup        
        .string()               
        .required("La fecha de la reservación es requerida"),
    hora: yup
        .string() 
        .required("La hora de la es requerida"),
    usuarioID: yup
        .number()
        .integer()
        .positive()
        .required("El Id del usuario es requerido"),
    mesaID: yup
        .number()
        .integer()
        .positive()
        .required("El Id de la mesa es requerido"),
    sucursalID: yup
        .number()
        .integer()
        .positive()
        .required("El Id de la sucursal es requerido"),
});

const GuardarReservacion = () => {

    const guardar = async ({ fecha, hora, usuarioID, mesaID, sucursalID }) => {
        try {
            var textoMensaje = "";

            await Axios.post('/reservaciones/guardar', {
                fecha: fecha,
                hora: hora,
                UsuarioId: usuarioID,
                MesaId: mesaID,
                SucursalId: sucursalID
            })
                .then(async (data) => {
                    const json = data.data;
                    if (json.errores.length == 0) {
                        console.log(data.data);
                    }
                    else {
                        textoMensaje = 'error1';
                        /*json.errores.forEach(element => {
                            textoMensaje += element.mensaje + '. ';
                        });*/
                    }
                })
                .catch((error) => {
                    textoMensaje = 'error2';
                });
        } catch (error) {
            textoMensaje = 'error3';
            console.log(error);
        }
        Alert.alert("Error", textoMensaje);
        console.log(fecha);
        console.log(hora);
        console.log(usuarioID);
        console.log(mesaID);
        console.log(sucursalID);
    }

    return (
        <View style={{ backgroundColor: COLORS.white }}>
            <View style={EstilosEditar.header}>
                <AntDesign name='doubleleft' size={28} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 20 }}>Reservaciones</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 30 }}>
                <View style={styles.form}>
                    <Text style={{ color: COLORS.dark, textAlign: 'center', marginTop: 10 }}>
                        Formulario
                    </Text>
                    <AppForm
                        initialValues={{ fecha: "", hora: 0, usuarioID: 0, mesaID: 0, sucursalID: 0 }}
                        validationSchema={PostValidationSchema}
                        onSubmit={(values) => guardar(values)}
                    >
                        <AppFormFeilds
                            name="fecha"
                            placeholder="YYYY-MM-DD"
                        />

                        <AppFormFeilds
                            name="hora"
                            placeholder="Hora"
                        />

                        <AppFormFeilds
                            name="usuarioID"
                            placeholder="ID Usuario"
                        />

                        <AppFormFeilds
                            name="sucursalID"
                            placeholder="ID Sucursal"
                        />

                        <AppFormFeilds
                            name="mesaID"
                            placeholder="ID Mesa"
                        />
                        <AppSubmitButton title="Ingresar" />
                    </AppForm>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        justifyContent: 'center'
    },
    wrapper: {
        paddingHorizontal: 20,
    },
    logo: {
        height: 280,
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: 10,
    },
    wellcomeTo: {
        fontSize: 23,
        fontWeight: "700",
        color: COLORS.dark,
        marginTop: 10,
        textAlign: "center",
    },
    brand: {
        fontSize: 23,
        color: COLORS.primary,
        textAlign: "center",
        fontWeight: "500",
    },
    form: {
        marginTop: 10,
    },
    join: {
        marginTop: 16,
        textAlign: "center",
        color: COLORS.dark,
    },
    or: {
        color: COLORS.grey,
        textAlign: "center",
        marginVertical: 20,
    },
});


export default GuardarReservacion;