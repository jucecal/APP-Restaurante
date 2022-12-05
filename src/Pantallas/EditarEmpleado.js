import React from 'react';
import { TouchableOpacity, View, Text, ScrollView, TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../consts/colors';
import EstilosEditar from '../Componentes/EstilosEditar';

const EditarEmpleado = () => {

    return (
        <View style={{ backgroundColor: COLORS.white }}>
            <View style={EstilosEditar.header}>
                <AntDesign name='doubleleft' size={28} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 20 }}>Editar Empleado</Text>
            </View>
            <ScrollView style={{ marginTop: 0 }}>
                <View>
                    <View style={EstilosEditar.contenedorContenido}>
                        <Text style={EstilosEditar.etiqueta}>Nombre</Text>
                        <TextInput style={EstilosEditar.inputs}>Jesús</TextInput>
                    </View>

                    <View style={EstilosEditar.contenedorContenido}>
                        <Text style={EstilosEditar.etiqueta}>Apellido</Text>
                        <TextInput style={EstilosEditar.inputs}>López</TextInput>
                    </View>

                    <View style={EstilosEditar.contenedorContenido}>
                        <Text style={EstilosEditar.etiqueta}>Teléfono</Text>
                        <TextInput style={EstilosEditar.inputs}>88106527</TextInput>
                    </View>

                    <View style={EstilosEditar.contenedorContenido}>
                        <Text style={EstilosEditar.etiqueta}>Fecha de Nacimiento</Text>
                        <TextInput style={EstilosEditar.inputs}>20-08-2000</TextInput>
                    </View>

                    <View style={EstilosEditar.contenedorContenido}>
                        <Text style={EstilosEditar.etiqueta}>Dirección</Text>
                        <TextInput style={EstilosEditar.inputs}>La Ceiba</TextInput>
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
                    <Text style={EstilosEditar.etiquetaCreacion}>Creado el 24/11/2022</Text>
                    <TouchableOpacity style={EstilosEditar.botonBorrado}>
                        <AntDesign name='delete' size={15} color={COLORS.white}></AntDesign>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default EditarEmpleado;