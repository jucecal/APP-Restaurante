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
import foods from '../consts/foods';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EstilosMenu from '../Componentes/EstilosMenu';
import UsuarioContext from '../contexto/UsuarioContext';
import { urlImagenesMenu } from '../configuracion/Urls';
import { urlImagenesUsuariosEM, urlImagenesUsuariosCL } from '../configuracion/Urls';
import Axios from '../Componentes/Axios';
const { width } = Dimensions.get('screen');


const Menu = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
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
    await Axios.get('menu/listar')
      .then(async (data) => {
        setlista(data.data);
        console.log(data.data);
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
      await Axios.get('menu/buscarNombre?nombre=' + filtro + '%')
        .then(async (data) => {
          setlista(data.data);
          console.log(data.data);

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

  
  const Card = ({ menu }) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => Alert.alert('Pressed!', 'info info')}
      >
        <View style={EstilosMenu.card}>
          <View style={{ alignItems: 'center', top: -40 }}>
            <Image
              style={{height: 120, width: 120, borderRadius:40}}
              source={{ uri: urlImagenesMenu + menu.Imagen }}
            />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{menu.Nombre}</Text>
            <Text style={{ fontSize: 14, color: COLORS.grey, marginTop: 2 }}>
              {menu.Descripcion}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              $ {menu.Precio}
            </Text>
            <View style={EstilosMenu.addToCartBtn}>
              <AntDesign name='plus' size={20} color={COLORS.white} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={EstilosMenu.header}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 28 }}>Hola,</Text>
            <Text style={{ fontSize: 28, fontWeight: 'bold', marginLeft: 10 }}>
              {usuario.nombre}
            </Text>
          </View>
          <Text style={{ marginTop: 5, fontSize: 22, color: COLORS.grey }}>
            ¿Estás listo para ordenar?
          </Text>
        </View>
        <Image
          source={{ uri: urlImagenesUsuariosEM + usuario.imagen }}
          style={{ height: 50, width: 50, borderRadius: 25 }}
        />
      </View>
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={EstilosMenu.inputContainer}>

          <TextInput
            style={{ flex: 1, fontSize: 18 }}
            placeholder="Buscar"
            value={filtro}
            onChangeText={setFiltro}
          />
        </View>
        <View style={EstilosMenu.sortBtn}>
          <AntDesign name='search1' size={28} color={COLORS.white} />
        </View>
      </View>
      
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={lista}
        renderItem={({ item }) => <Card menu={item} />}
      />
    </View>
  );
};

export default Menu;