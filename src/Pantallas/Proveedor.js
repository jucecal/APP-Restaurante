
import React, { useState, useEffect } from 'react';
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
import proveedores from '../consts/proveedores';
import foods from '../consts/foods';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import EstilosAdmin from '../Componentes/EstiloAdmin';
const { width } = Dimensions.get('screen');


const Proveedor = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={EstilosAdmin.categoriesListContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex == index
                    ? COLORS.grey
                    : COLORS.secondary,
                ...EstilosAdmin.categoryBtn,
              }}>
              <View style={EstilosAdmin.categoryBtnImgCon}>
                <ImageBackground
                  source={category.image}
                  style={{ height: 40, width: 40, resizeMode: 'cover' }}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  color:
                    selectedCategoryIndex == index
                      ? COLORS.white
                      : COLORS.primary,
                }}>
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
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
            <Text style={EstilosAdmin.tituloCarta}>{proveedor.proveedor}</Text>
            <Text style={EstilosAdmin.detallesCarta}>
              id: {proveedor.id}
            </Text>
            <Text style={EstilosAdmin.detallesCarta}>
              Nombre de Contacto: {proveedor.nombreContacto}
            </Text>
            <Text style={EstilosAdmin.detallesCarta}>
              Telefono: {proveedor.telefono}
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
              User
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
        data={proveedores}
        renderItem={({ item }) => <Card proveedor={item} />}
      />
    </View>
  );
};


export default Proveedor;