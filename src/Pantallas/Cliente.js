import React, { useState, useEffect, useContext } from 'react';
import {
  Dimensions,
  Image,
  Text,
  FlatList,
  TextInput,
  TouchableHighlight,
  Alert,
  View,
} from 'react-native';

import COLORS from '../consts/colors';
import Axios from '../Componentes/Axios';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import EstilosAdmin from '../Componentes/EstiloAdmin';
import UsuarioContext from '../contexto/UsuarioContext';
import { urlImagenesUsuariosCL } from '../configuracion/Urls';
const { width } = Dimensions.get('screen');


const Cliente = ({ navigation }) => {
  const { usuario, token } = useContext(UsuarioContext);
  const [filtro, setFiltro] = useState(null);
  const [espera, setEspera] = useState(false);
  const [lista, setlista] = useState([]);
  const [validarFiltro, setValidarFiltro] = useState(false);

  useEffect(() => {
    if (!filtro) {
      setValidarFiltro(true);
    }
    else {
      setValidarFiltro(false);
    }
  }, [filtro]);

  useEffect(() => {
    if (!validarFiltro) {
      buscarUno();
    }
  }, [validarFiltro]);
  useEffect(() => {
    if (!filtro) {
      buscar();
    }

  }, [filtro]);
  const buscar = async () => {
    var mensaje = "";
    setEspera(true);
    Axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
    await Axios.get('clientes/listar')
      .then(async (data) => {
        setlista(data.data);
      })
      .catch((er) => {
        console.log(er);
      });
    setEspera(false);
    if (mensaje != '') {
      Alert.alert('Error en la lista', mensaje);
    }
  }
  const buscarUno = async () => {
    if (!validarFiltro) {
      var mensaje = "";
      setEspera(true);
      await Axios.get('clientes/buscarNombre?nombre=' + filtro + '%')
        .then(async (data) => {
          setlista(data.data);

        })
        .catch((er) => {
          console.log(er);
        });
    }

    setEspera(false);
    if (mensaje != '') {
      Alert.alert('Error en la lista', mensaje);
    }
  }

  const irGuardar = () => {
    console.log("Ir a Guardar cliente");
    navigation.navigate('GuardarCliente');
  }

  const irEditar = () => {
    console.log("Ir a Editar cliente");
    navigation.navigate('EditarCliente');
  }


  const Card = ({ cliente }) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => Alert.alert('Pressed!', 'info info')}
      >
        <View style={EstilosAdmin.card}>
          <View style={EstilosAdmin.iconoTipoCarta}>
            <Image
              style={EstilosAdmin.imagen}
              source={{ uri: urlImagenesUsuariosCL + cliente.Foto }}
            />
          </View>
          <View style={EstilosAdmin.textoCarta} >
            <Text style={EstilosAdmin.tituloCarta}>{cliente.Nombre + ' ' + cliente.Apellido}</Text>
            <Text style={EstilosAdmin.detallesCarta}>
              ID: {cliente.Id}
            </Text>
            <Text style={EstilosAdmin.detallesCarta}>
              Telefono: {cliente.Telefono}
            </Text>
            <Text style={EstilosAdmin.detallesCarta}>
              Dirección: {cliente.Direccion}
            </Text>
            <Text style={EstilosAdmin.detallesCarta}>
              Nombre de Usuario: {cliente.Usuario.Nombre}
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
            Administrar Clientes
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
            placeholder="Buscar"
            value={filtro}
            onChangeText={setFiltro}
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
        onPress={irGuardar}
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
        data={lista}
        renderItem={({ item }) => <Card cliente={item} />}
      />
    </View>
  );


};
export default Cliente;