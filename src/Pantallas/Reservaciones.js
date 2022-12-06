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
import reservaciones from '../consts/reservaciones';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import EstilosAdmin from '../Componentes/EstiloAdmin';
import UsuarioContext from '../contexto/UsuarioContext';
const { width } = Dimensions.get('screen');


const Reservaciones = () => {
  const { usuario } = useContext(UsuarioContext);

  const Card = ({ reservacion }) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => Alert.alert('Pressed!', 'info info')}
      >
        <View style={EstilosAdmin.card}>

          <View style={EstilosAdmin.iconoTipoCarta}>
            <Feather name='truck' size={28} color={COLORS.dark} />
          </View>
          <View style={EstilosAdmin.textoCarta} >
            <Text style={EstilosAdmin.tituloCarta}>{reservacion.reservacion}</Text>
            <Text style={EstilosAdmin.detallesCarta}>
              id: {reservacion.id}
            </Text>
            <Text style={EstilosAdmin.detallesCarta}>
              fecha: {reservacion.fecha}
            </Text>
            <Text style={EstilosAdmin.detallesCarta}>
              hora: {reservacion.hora}
            </Text>
            <Text style={EstilosAdmin.detallesCarta}>
              Sucursal: {reservacion.Sucursal}
            </Text>
            <Text style={EstilosAdmin.detallesCarta}>
              mesa: {reservacion.mesa}
            </Text>
            <Text style={EstilosAdmin.detallesCarta}>
              Cliente: {reservacion.Cliente}
            </Text>
          </View>
          <View style={EstilosAdmin.iconoEditar}>
            <Feather name='edit' size={20} color={COLORS.dark} />
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
            Administrar Proveedores
          </Text>
        </View>
        <Image
          source={{ uri: urlImagenesUsuariosCL + usuario.imagen }}
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
        onPress={() => Alert.alert('Pressed!', 'info info')}
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
        data={reservaciones}
        renderItem={({ item }) => <Card proveedor={item} />}
      />
    </View>
  );
};


export default Reservaciones;