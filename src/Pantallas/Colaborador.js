import React, { useState, useEffect, useContext } from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  View,
  ImageBackground,
} from 'react-native';

import COLORS from '../consts/colors';
import categories from '../consts/categories';
import user from '../../assets/USER.png';
import colaboradores from '../consts/colaboradores';
import foods from '../consts/foods';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import EstilosAdmin from '../Componentes/EstiloAdmin';
import UsuarioContext from '../contexto/UsuarioContext';
const { width } = Dimensions.get('screen');


const Colaborador = () => {
  const { usuario} = useContext(UsuarioContext);

 
  const Card = ({ colaborador }) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => Alert.alert('Información de colaborador!', 'Datos de Colaborador')}
      >
        <View style={EstilosAdmin.card}>
          
          <View style={EstilosAdmin.iconoTipoCarta}>
            <Feather name='user' size={28} color={COLORS.dark} />
          </View>
          <View style={EstilosAdmin.textoCarta} >
            <Text style={EstilosAdmin.tituloCarta}>{colaborador.nombre + ' ' + colaborador.apellido}</Text>
            <Text style={EstilosAdmin.detallesCarta}>
              Código de Cliente: {colaborador.id}
            </Text>
            <Text style={EstilosAdmin.detallesCarta}>
              Telefono: {colaborador.telefono}
            </Text>
            <Text style={EstilosAdmin.detallesCarta}>
              Fecha de Nacimiento: {colaborador.fechaNacimiento}
            </Text>
            <Text style={EstilosAdmin.detallesCarta}>
              Dirección: {colaborador.direccion}
            </Text>
          </View>
          
          <View style={EstilosAdmin.iconoEditar}>
            <Feather name='edit' size={25} color={COLORS.dark} />
          </View>        
        </View>
      </TouchableHighlight>
    );
  };


  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={EstilosAdmin.header}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 28 }}>Hola,</Text>
            <Text style={{ fontSize: 28, fontWeight: 'bold', marginLeft: 10 }}>
              {usuario.nombre}
            </Text>
          </View>
          <Text style={{ marginTop: 5, fontSize: 22, color: COLORS.grey }}>
            Administrar Colaboradores
          </Text>
        </View>
        <Image
          source={require('../../assets/USER.png')}
          style={{ height: 50, width: 50, borderRadius: 25 }}
        />
      </View>

      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={EstilosAdmin.inputContainer}>

          <TextInput
            style={{ flex: 1, fontSize: 18 }}
            placeholder="Buscar por nombre"
          />
        </View>
        <View style={EstilosAdmin.sortBtn}>
          <AntDesign name='search1' size={28} color={COLORS.white} />
        </View>
      </View>
      <TouchableHighlight
        style={{ paddingHorizontal: 20 }}
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => Alert.alert('Agregar Cliente!', 'Escriba la información del cliente.')}
      >
        <View style={{ flexDirection: 'row', padding: 10, backgroundColor: COLORS.primary, width: '40%', borderRadius: 15, elevation: 13, marginVertical: 15 }}>
          <AntDesign name='pluscircle' size={28} color={COLORS.white} />
          <Text style={{ color: COLORS.white, fontSize: 18, marginLeft: 10 }}>
            Agregar
          </Text>
        </View>
      </TouchableHighlight>
      <FlatList
        key={'_'}
        showsVerticalScrollIndicator={false}
        numColumns={1}
        data={colaboradores}
        renderItem={({ item }) => <Card colaborador={item} />}
      />
    </View>
  );


};
export default Colaborador;