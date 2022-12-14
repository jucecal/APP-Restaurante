import { TouchableOpacity, View, Text, ScrollView, Image, Alert, TextInput, StyleSheet } from 'react-native';
import NumericInput from 'react-native-numeric-input'
import AppForm from "../Componentes/forms/AppForm";
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../consts/colors';
import * as yup from "yup";
import AppFormFeilds from "../Componentes/forms/AppFormFeilds";
import Axios from '../Componentes/Axios';
import AppSubmitButton from '../Componentes/forms/AppSubmitButton';
//import DatePicker from 'react-DatePicker';
import ComboBox from 'react-native-combobox';
import React, { useState, useEffect, useContext } from "react";
import EstilosEditar from '../Componentes/EstilosEditar';

const PostValidationSchema = yup.object().shape({
    proveedor: yup
        .string()
        .required("El nombre es requerido")
        .min(4, ({ min }) => `El nombre del proveedor debe de tener un minimo de ${min} caracteres`),
    nombreContacto: yup
        .string()
        .min(4, ({ min }) => `El contacto debe de tener un minimo de ${min} caracteres`)
        .required("El contacto es requerido"),
    telefono: yup
        .number()
        .min(8, ({ min }) => `El telefono debe de tener un minimo de ${min} caracteres`)
        .integer()
        .positive()
        .required("El telefono es requerido"),
});

const GuardarProveedor = ({navigation}) => {

    const guardar = async ({ proveedor, nombreContacto, telefono }) => {
        try {
            var textoMensaje = "";

            await Axios.post('/proveedor/guardar', {

                proveedor: proveedor,
                nombreContacto: nombreContacto,
                telefono: telefono
            })
                .then(async (data) => {
                    const json = data.data;
                    if (json.errores.length == 0) {
                        console.log(data.data);
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

        console.log(proveedor);
        console.log(nombreContacto);
        console.log(telefono);

    }

    return (
        <View style={{ backgroundColor: COLORS.white }}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 30 }}>
            <View style={EstilosEditar.header}>
                <AntDesign name='left' size={28} />
            </View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 20, alignSelf: 'center' }}>Formulario de Proveedores</Text>
                <View style={styles.form}>
                    <AppForm
                        initialValues={{ proveedor: "", nombreContacto: "", telefono: 0 }}
                        validationSchema={PostValidationSchema}
                        onSubmit={(values) => guardar(values)}
                    >
                        <AppFormFeilds
                            name="proveedor"
                            placeholder="Proveedor"
                        />

                        <AppFormFeilds
                            name="nombreContacto"
                            placeholder="Nombre de Contacto"
                        />

                        <AppFormFeilds
                            name="telefono"
                            placeholder="Telefono"
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

export default GuardarProveedor;