import React, { useState } from 'react';
import { View, StyleSheet, Text, Modal } from 'react-native';
import Screen from '../Componentes/Screen'
import tailwind from 'tailwind-react-native-classnames';
import AppHead from '../Componentes/AppHead';
import AppButton from '../Componentes/AppButton';
import { selectTotalItems, selectTotalPrice } from '../redux/slices/basketSlice';
import { useSelector } from 'react-redux';
import colors from '../consts/colors';
//import colors from '../consts/colors2';
import CartItems from '../Componentes/CartItems';
import CheckoutModal from '../Componentes/CheckoutModal';
import { Feather } from '@expo/vector-icons';

const CartScreen = () => {
    const totalPrice = useSelector(selectTotalPrice)
    const getAllItems = useSelector(selectTotalItems)
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <Screen style={tailwind`flex-1 bg-white`}>
            <AppHead title={`Carrito (${getAllItems.length})`} icon="basket" />
            <View style={tailwind`flex-1`}>
                <CartItems />
            </View>
            {!!getAllItems.length && (
                <View style={tailwind`flex-row items-center px-5 pb-5`}>
                    <View style={styles.left}>
                        <Text style={styles.total}>Total</Text>
                        <Text style={styles.totalAmount}>L.{totalPrice}</Text>
                    </View>
                    <View style={styles.right}>
                        <AppButton title="Pagar" onPress={() => setModalVisible(true)} color="primary" />
                    </View>
                </View>
            )}
            <Modal visible={modalVisible} animationType="slide" transparent={true}>
                <CheckoutModal setModalVisible={setModalVisible} />
            </Modal>
        </Screen>
    );
}

const styles = StyleSheet.create({
    left: {
        marginRight: 20
    },
    right: {
        flex: 1
    },
    total: {
        fontSize: 14,
        color: colors.title
    },
    totalAmount: {
        fontSize: 23,
    },
})

export default CartScreen;
