import React, { useState, useEffect, useContext } from 'react';
import { TouchableOpacity, View, Text, ScrollView, TextInput, Alert } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../consts/colors';
import EstilosEditar from '../Componentes/EstilosEditar';
import Axios from '../Componentes/Axios';


const GuardarCliente = ({ navigation }) => {
    const [filtro, setFiltro] = useState(null);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [usuarioID, setUsuarioID] = useState("");

    const guardar = async () => {
        try {
            var textoMensaje = "";
            
            await Axios.post('/clientes/guardar', {       
                
                nombre: nombre,
                apellido: apellido,
                telefono: telefono,
                direccion: direccion,
                UsuarioId: usuarioID
            })
                .then(async(data) => {
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
        setNombre("");
        setApellido("");
        setTelefono("");
        setDireccion("");
        setUsuarioID("");
    }

    return (
        <View style={{ backgroundColor: COLORS.white }}>
            <View style={EstilosEditar.header}>
                <AntDesign name='left' size={28} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 20 }}>Guardar Cliente</Text>
            </View>
            <ScrollView style={{ marginTop: 0 }}>
                <View>
                    <View style={EstilosEditar.contenedorContenido}>
                        <Text style={EstilosEditar.etiqueta}>Nombre del Cliente</Text>
                        <TextInput style={EstilosEditar.inputs} value={nombre} onChangeText={setNombre}></TextInput>
                    </View>

                    <View style={EstilosEditar.contenedorContenido}>
                        <Text style={EstilosEditar.etiqueta}>Apellido de Cliente</Text>
                        <TextInput style={EstilosEditar.inputs} value={apellido} onChangeText={setApellido}></TextInput>
                    </View>

                    <View style={EstilosEditar.contenedorContenido}>
                        <Text style={EstilosEditar.etiqueta}>Teléfono</Text>
                        <TextInput style={EstilosEditar.inputs} value={telefono} onChangeText={setTelefono}></TextInput>
                    </View>
                    
                    <View style={EstilosEditar.contenedorContenido}>
                        <Text style={EstilosEditar.etiqueta}>Dirección</Text>
                        <TextInput style={EstilosEditar.inputs} value={direccion} onChangeText={setDireccion}></TextInput>
                    </View>

                    <View style={EstilosEditar.contenedorContenido}>
                        <Text style={EstilosEditar.etiqueta}>ID del Usuario</Text>
                        <TextInput style={EstilosEditar.inputs} value={usuarioID} onChangeText={setUsuarioID}></TextInput>
                    </View>
                </View>

                <View style={{ marginHorizontal: 30 }}>
                    <TouchableOpacity activeOpacity={0.8} onPress={guardar}>
                        <View style={EstilosEditar.btnContainer}>
                            <Text style={EstilosEditar.title}>GUARDAR</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                

            </ScrollView>

        </View>

    );
};

export default GuardarCliente;