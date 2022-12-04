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
import EstilosAdmin from '../Componentes/EstiloAdmin';
import Axios from '../Componentes/Axios';
import UsuarioContext from '../contexto/UsuarioContext';
const { width } = Dimensions.get('screen');


const Inventario = () => {
  const { usuario } = useContext(UsuarioContext);
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
    await Axios.get('inventario/listar')
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
      await Axios.get('inventario/buscarporsucursal?nombre=' + filtro + '%')
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

  const Card = ({ inventario }) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => Alert.alert('Pressed!', 'info info')}
      >
        <View style={EstilosAdmin.card}>

          <View style={EstilosAdmin.iconoTipoCarta}>
            <AntDesign name='barcode' size={28} color={COLORS.dark} />
          </View>
          <View style={EstilosAdmin.textoCarta} >
            <Text style={EstilosAdmin.detallesCarta2}>
              Stock: {inventario.Stock}
            </Text>
            <Text style={EstilosAdmin.detallesCarta2}>
              Producto: {inventario.Insumo.Producto}
            </Text>
            <Text style={EstilosAdmin.detallesCarta2}>
              Sucursal: {inventario.Sucursal.Sucursal}
            </Text>
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
            Inventario
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
            placeholder="Buscar por sucursal"
            value={filtro}
            onChangeText={setFiltro}
          />
        </View>
        <View style={EstilosAdmin.sortBtn}>
          <AntDesign name='search1' size={28} color={COLORS.white} />
        </View>
      </View>

      <FlatList
        key={'_'}
        showsVerticalScrollIndicator={false}
        numColumns={1}
        data={lista}
        renderItem={({ item }) => <Card inventario={item} />}
      />
    </View>
  );
};


export default Inventario;
