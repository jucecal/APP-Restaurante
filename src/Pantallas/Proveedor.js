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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import EstilosAdmin from '../Componentes/EstiloAdmin';
import UsuarioContext from '../contexto/UsuarioContext';
import Axios from '../Componentes/Axios';
const { width } = Dimensions.get('screen');

const Proveedor = () => {
  const { usuario } = useContext(UsuarioContext);
  const [filtro, setFiltro] = useState(null);
  const [lista, setlista] = useState([]);
  const [espera, setEspera] = useState(false);
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
    await Axios.get('proveedor/listar')
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
      await Axios.get('proveedor/buscarNombre?proveedor=' + filtro + '%')
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

  const Card = ({ proveedor }) => {
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
            <Text style={EstilosAdmin.tituloCarta}>{proveedor.Proveedor}</Text>
            <Text style={EstilosAdmin.detallesCarta}>
              id: {proveedor.Id}
            </Text>
            <Text style={EstilosAdmin.detallesCarta}>
              Nombre de Contacto: {proveedor.Contacto}
            </Text>
            <Text style={EstilosAdmin.detallesCarta}>
              Telefono: {proveedor.Telefono}
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
          source={require('../../assets/person.png')}
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
        data={lista}
        renderItem={({ item }) => <Card proveedor={item} />}
      />
    </View>
  );
};

export default Proveedor;