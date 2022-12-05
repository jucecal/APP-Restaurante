import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import Estilos from '../Componentes/Estilos';
import tailwind from 'tailwind-react-native-classnames';
import colors from '../consts/colors';

const ViewCart = ({ total, count }) => {
    const navigation = useNavigation()

    return (
        <>
            {!!count && (
                /*
                <TouchableOpacity onPress={() => navigation.navigate("Carrito")} style={tailwind`bg-red-500 absolute bottom-5 self-center py-3 px-10 rounded-full z-50`}>
                    <Text style={tailwind`text-white text-sm`}>Ver Carrito • L.{total} ({count})</Text>
                </TouchableOpacity>
                 */
                <View style={estiloboton.contenedorControles}>

                    <TouchableOpacity onPress={() => navigation.navigate("Carrito")}
                        style={estiloboton.touch}
                    >
                        <Text style={tailwind`text-white text-sm`}>Ver Carrito • L.{total} ({count})</Text>
                    </TouchableOpacity>

                </View>
            )}
        </>
    );
}

const estiloboton = StyleSheet.create({
    touch: {
        alignItems: 'center',
        margin: 25,
        backgroundColor: "#F9813A",
        padding: 15,
        borderRadius: 30,
        width: 250,
        height: 50,
    },
    contenedorControles: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 2,
        marginBottom: 4,
    },
});
export default ViewCart;
