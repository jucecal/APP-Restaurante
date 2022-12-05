import React from 'react';
import { TouchableOpacity, View, Text, ScrollView, TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../consts/colors';
import EstilosEditar from '../Componentes/EstilosEditar';

const GuardarProveedor = ({navigation}) => {

    return (
        <View style={{ backgroundColor: COLORS.white }}>
            <View style={EstilosEditar.header}>
                <AntDesign name='doubleleft' size={28} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 20 }}>Guardar Proveedor</Text>
            </View>
            <ScrollView style={{ marginTop: 0 }}>
                <View>
                    <View style={EstilosEditar.contenedorContenido}>
                        <Text style={EstilosEditar.etiqueta}>Nombre</Text>
                        <TextInput style={EstilosEditar.inputs}></TextInput>
                    </View>
                    <View style={EstilosEditar.contenedorContenido}>
                        <Text style={EstilosEditar.etiqueta}>Nombre de Contacto</Text>
                        <TextInput style={EstilosEditar.inputs}></TextInput>
                    </View>
                    <View style={EstilosEditar.contenedorContenido}>
                        <Text style={EstilosEditar.etiqueta}>Telefono</Text>
                        <TextInput style={EstilosEditar.inputs}></TextInput>
                    </View>
                </View>
                <View style={{ marginHorizontal: 30 }}>
                    <TouchableOpacity activeOpacity={0.8} >
                        <View style={EstilosEditar.btnContainer}>
                            <Text style={EstilosEditar.title}>GUARDAR</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={EstilosEditar.contenedorBorrado}>
                    <Text style={EstilosEditar.etiquetaCreacion}>Creado el 05/12/2022</Text>
                </View>

            </ScrollView>

        </View>

    );
};

export default GuardarProveedor;