import React from 'react';
import { TouchableOpacity, View, Text, ScrollView, Image, Alert, TextInput } from 'react-native';
import NumericInput from 'react-native-numeric-input'
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../consts/colors';
import EstilosEditar from '../Componentes/EstilosEditar';
import DatePicker from 'react-DatePicker';
import React, { useState, useEffect, useContext } from "react";

const EditarReservacion = () => {

    return (
        <View style={{ backgroundColor: COLORS.white }}>
            <View style={EstilosEditar.header}>
                <AntDesign name='doubleleft' size={28} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 20 }}>Reservaciones</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 30 }}>
                <View>
                    <View style={EstilosEditar.contenedorContenido}>
                        <Text style={EstilosEditar.etiqueta}>Fecha</Text>
                        <Text>selected: {date.toLocaleString()}</Text>
                        {show && (<DateTimePicker testID="dateTimePicker" value={date}
                            mode={mode} is24Hour={true} onChange={onChange} />)}
                    </View>

                    <View style={EstilosEditar.contenedorContenido}>
                        <Text style={EstilosEditar.etiqueta}>fecha</Text>
                        <TextInput style={EstilosEditar.inputs}>El bicho</TextInput>
                        <Text>selected: {date.toLocaleString()}</Text>
                             {show && (
                            <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                         onChange={onChange}
                            />
                            )}
                    </View>

                    <View style={EstilosEditar.contenedorContenido}>
                        <Text style={EstilosEditar.etiqueta}>hora</Text>
                        <TextInput style={EstilosEditar.inputs}>2PM</TextInput>
                    </View>

                    <View style={EstilosEditar.contenedorContenido}>
                        <Text style={EstilosEditar.etiqueta}>Cliente </Text>
                        <TextInput style={EstilosEditar.inputs}>Juan</TextInput>
                    </View>
                    <View style={EstilosEditar.contenedorContenido}>
                        <Text style={EstilosEditar.etiqueta}>Mesa</Text>
                        <TextInput style={EstilosEditar.inputs}>1</TextInput>
                    </View>
                    <View style={EstilosEditar.contenedorContenido}>
                        <Text style={EstilosEditar.etiqueta}>Sucursal</Text>
                        <TextInput style={EstilosEditar.inputs}>kennedy</TextInput>
                    </View>
                </View>

                <View style={{ marginHorizontal: 30 }}>
                    <TouchableOpacity activeOpacity={0.8} >
                        <View style={EstilosEditar.btnContainer}>
                            <Text style={EstilosEditar.title}>GUARDAR</Text>
                        </View>
                    </TouchableOpacity>
                </View>
              
            </ScrollView>
        </View>
    );
};



export default EditarReservacion;