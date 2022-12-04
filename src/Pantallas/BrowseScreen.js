import React from 'react';
import { View, ImageBackground,StyleSheet, ScrollView, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import Screen from '../Componentes/Screen';
import logo01 from '../../assets/logo-01.png';
import { meals } from '../data/mealsData'
import tailwind from 'tailwind-react-native-classnames';
import colors from '../consts/colors2';
import { Ionicons } from '@expo/vector-icons';

const BrowseScreen = () => {
    return (
        <Screen style={tailwind`flex-1 bg-white`}>
            <View style={styles.contenedorImagen}>
                <ImageBackground
                    source={logo01}
                    style={styles.imagenFondo}
                >
                </ImageBackground>
            </View>
            
            <ScrollView style={tailwind`flex-1`} showsVerticalScrollIndicator={false}>
                <View style={tailwind`mt-2 mx-4 mb-1 relative justify-center`}>
                    
                    <Ionicons name="search-sharp" size={23} color="#F9813A" style={tailwind`absolute left-4 z-10 self-center`} />
                    <TextInput style={[tailwind`rounded-full py-2 px-5 pl-10 bg-gray-100`, styles.input]} placeholder=" Buscar Producto" />
                </View>
                
                <View style={tailwind`flex-row mx-2 flex-wrap justify-between`}>
                    {meals?.map(({ title, image, id }) => (
                        <TouchableOpacity key={id} style={tailwind`w-full my-2 px-5`}>
                            <View style={tailwind`rounded-lg overflow-hidden justify-center items-center w-full`}>
                                <Image source={{ uri: image }} style={tailwind`w-full h-40`} />
                                <View style={[tailwind`absolute top-0 left-0 w-full h-full bg-black rounded-lg z-10`, { opacity: 0.7 }]} />
                                <Text style={tailwind`absolute self-center text-white w-3/4 text-center z-20`} numberOfLines={2}>Come Rico</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    input: {
        borderColor: colors.medium,
        borderWidth: 1,
    },
    contenedorImagen: {
        backgroundColor: '#fff',
        alignItems: 'center',
        height: 110,
        
    },
    imagenFondo: {
        width: 190,
        height: 120,
        backgroundColor: '#fff',
    },
})

export default BrowseScreen;
