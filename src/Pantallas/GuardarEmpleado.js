import React from 'react';
import { TouchableOpacity, View, Text, ScrollView, TextInput, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppForm from "../Componentes/forms/AppForm";
import COLORS from '../consts/colors';
import * as yup from "yup";
import AppFormFeilds from "../Componentes/forms/AppFormFeilds";
import EstilosEditar from '../Componentes/EstilosEditar';
import Axios from '../Componentes/Axios';
import AppSubmitButton from '../Componentes/forms/AppSubmitButton';

const PostValidationSchema = yup.object().shape({
    nombre: yup
        .string()
        .required("El nombre es requerido")
        .min(4, ({ min }) => `El nombre debe de tener un minimo de ${min} caracteres`),
    apellido: yup
        .string()
        .min(4, ({ min }) => `El apellido debe de tener un minimo de ${min} caracteres`)
        .required("El apellido es requerido"),
    telefono: yup
        .number()
        .min(8, ({ min }) => `El telefono debe de tener un minimo de ${min} caracteres`)
        .integer()
        .positive()
        .required("El telefono es requerido"),
    direccion: yup
        .string(),
    usuarioID: yup
        .number()
        .integer()
        .positive()
        .required("El Id del usuario es requerido"),
    sucursalID: yup
        .number()
        .integer()
        .positive()
        .required("El Id de la sucursal es requerido"),
    cargoID: yup
        .number()
        .integer()
        .positive()
        .required("El Id del cargo es requerido"),
});

const GuardarEmpleado = ({ navigation }) => {

    const guardar = async ({ nombre, apellido, telefono, direccion, usuarioID, sucursalID, cargoID }) => {
        try {
            var textoMensaje = "";

            await Axios.post('/empleados/guardar', {

                nombre: nombre,
                apellido: apellido,
                telefono: telefono,
                direccion: direccion,
                UsuarioId: usuarioID,
                SucursalId: sucursalID,
                CargoId: cargoID
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

        console.log(nombre);
        console.log(apellido);
        console.log(telefono);
        console.log(direccion);
        console.log(usuarioID);
        console.log(sucursalID);
        console.log(cargoID);

    }

    return (
        <View style={{ backgroundColor: COLORS.white }}>
            <View style={EstilosEditar.header}>
                <AntDesign name='doubleleft' size={28} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 20 }}>Guardar Empleado</Text>
            </View>
            <ScrollView style={{ marginTop: 0 }}>
                <View style={styles.form}>
                    <AppForm
                        initialValues={{ nombre: "", apellido: "", telefono: 0, direccion: "", usuarioID: 0, cargoID: 0, sucursalID: 0 }}
                        validationSchema={PostValidationSchema}
                        onSubmit={(values) => guardar(values)}
                    >
                        <AppFormFeilds
                            name="nombre"
                            placeholder="Nombre"
                        />

                        <AppFormFeilds
                            name="apellido"
                            placeholder="Apellido"
                        />

                        <AppFormFeilds
                            name="telefono"
                            placeholder="Telefono"
                        />

                        <AppFormFeilds
                            name="direccion"
                            placeholder="Dirección"
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
                            name="cargoID"
                            placeholder="ID Cargo"
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

export default GuardarEmpleado;