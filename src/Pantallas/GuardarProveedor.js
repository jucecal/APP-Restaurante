
import { TouchableOpacity, View, Text, ScrollView, Image, Alert, TextInput } from 'react-native';
import NumericInput from 'react-native-numeric-input'
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../consts/colors';
import EstilosEditar from '../Componentes/EstilosEditar';
//import DatePicker from 'react-DatePicker';
import ComboBox from 'react-native-combobox';
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
                            {/*<DatePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                         onChange={onChange}
                             />*/}
                            )}
                    </View>

                    <View style={EstilosEditar.contenedorContenido}>
                        <Text style={EstilosEditar.etiqueta}>hora</Text>
                        <TextInput style={EstilosEditar.inputs}>2PM</TextInput>
                    </View>

                    <View style={EstilosEditar.contenedorContenido}>
                        <Text style={EstilosEditar.etiqueta}>Cliente </Text>
                        <View style={{ flex: 1, paddingVertical: 80, paddingHorizontal: 40, justifyContent: 'space-between' }}>
                         <ComboBox
                        values={values}
                     onValueSelect={setSelectedValue}
                     />
                     <Text>selected value:          {values[selectedValue]}</Text>
                     </View>
                    </View>

                    <View style={EstilosEditar.contenedorContenido}>
                        <Text style={EstilosEditar.etiqueta}>Mesa</Text>
                        <View style={{ flex: 1, paddingVertical: 80, paddingHorizontal: 40, justifyContent: 'space-between' }}><ComboBox values={values}
                        onValueSelect={setSelectedValue}
                         />
                           <Text>selected value:          {values[selectedValue]}</Text>
                      </View>
                    </View>
                    <View style={EstilosEditar.contenedorContenido}>
                        <Text style={EstilosEditar.etiqueta}>Sucursal</Text>
                        <View style={{ flex: 1, paddingVertical: 80, paddingHorizontal: 40, justifyContent: 'space-between' }}> <ComboBox values={values}
                         onValueSelect={setSelectedValue}
                         />
                <Text>selected value:          {values[selectedValue]}</Text>
                    </View>
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



export default EditarReservacion;