import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import tailwind from 'tailwind-react-native-classnames';
import colors from '../consts/colors';

const ViewCart = ({ total, count }) => {
    const navigation = useNavigation()

    return (
        <>
            {!!count && (
                <TouchableOpacity onPress={() => navigation.navigate("Carrito")} fillColor={colors.primary} style={tailwind`bg-red-500 absolute bottom-5 self-center py-3 px-10 rounded-full z-50`}>
                    <Text style={tailwind`text-white text-sm`}>Ver Carrito • L.{total} ({count})</Text>
                </TouchableOpacity>

            )}
        </>
    );
}
export default ViewCart;
