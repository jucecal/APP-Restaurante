
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
import foods from '../consts/foods';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EstilosMenu from '../Componentes/EstilosMenu';
const { width } = Dimensions.get('screen');


const Menu = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={EstilosMenu.categoriesListContainer}>
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
                ...EstilosMenu.categoryBtn,
              }}>
              <View style={EstilosMenu.categoryBtnImgCon}>
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
  const Card = ({ food }) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => Alert.alert('Pressed!', 'info info')}
      >
        <View style={EstilosMenu.card}>
          <View style={{ alignItems: 'center', top: -40 }}>
            <Image source={food.image} style={{ height: 120, width: 120 }} />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{food.name}</Text>
            <Text style={{ fontSize: 14, color: COLORS.grey, marginTop: 2 }}>
              {food.ingredients}
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
              ${food.price}
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
              User
            </Text>
          </View>
          <Text style={{ marginTop: 5, fontSize: 22, color: COLORS.grey }}>
            ¿Estás listo para ordenar?
          </Text>
        </View>
        <Image
          source={require('../../assets/person.png')}
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
            placeholder="Search for food"
          />
        </View>
        <View style={EstilosMenu.sortBtn}>
          <AntDesign name='search1' size={28} color={COLORS.white} />
        </View>
      </View>
      <View>
        <ListCategories />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={foods}
        renderItem={({ item }) => <Card food={item} />}
      />
    </View>
  );
};


export default Menu;