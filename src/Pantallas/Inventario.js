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
import inventarios from '../consts/inventarios';
import sucursales from '../consts/sucursales';
import foods from '../consts/foods';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import EstilosAdmin from '../Componentes/EstiloAdmin';
import ComboBox from 'react-native-combobox';
import UsuarioContext from '../contexto/UsuarioContext';
const { width } = Dimensions.get('screen');


const Inventario = () => {
  const { usuario} = useContext(UsuarioContext);
  const [selectedValue, setSelectedValue] = useState('');
  
  const values = [
   'La Kennedy',
   'Roble Oeste',
   'El manatial'
  ];

  const Card = ({ inventario }) => {
    return (
      <TouchableHighlight
        
        
      >
        <View style={EstilosAdmin.card}>
          
          <View style={EstilosAdmin.iconoTipoCarta}>
            <AntDesign name='barcode' size={28} color={COLORS.dark} />
          </View>
          <View style={EstilosAdmin.textoCarta} >            
            <Text style={EstilosAdmin.detallesCarta2}>
              Stock: {inventario.stock}
            </Text>
            <Text style={EstilosAdmin.detallesCarta2}>
              Producto: {inventario.producto}
            </Text>
            <Text style={EstilosAdmin.detallesCarta2}>
              Sucursal: {inventario.sucursal}
            </Text>
          </View>  
          <View style={EstilosAdmin.iconoEditar}>
            <AntDesign name='eye' size={20} color={COLORS.dark} />
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
            Administrar Inventario
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
          />
        </View>
        <View style={EstilosAdmin.sortBtn}>
          <AntDesign name='search1' size={28} color={COLORS.white} />
        </View>
      </View>

      <View style={{ flex: 1, paddingBottom:90,paddingTop:30, paddingHorizontal: 40, justifyContent: 'space-between' }}>
        <ComboBox
            values={values}
            onValueSelect={setSelectedValue}
        />
        <Text>selected value:          {values[selectedValue]}</Text>
     </View>

    
      <FlatList
        key={'_'}
        showsVerticalScrollIndicator={false}
        numColumns={1}
        data={inventarios}
        renderItem={({ item }) => <Card inventario={item} />}
      />
    </View>
   
  
  );
};


export default Inventario;
