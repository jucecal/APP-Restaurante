import React from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../consts/colors';
import foods from '../consts/foods';


const Carrito = () => {
    const CartCard = ({ item }) => {
        return (
            <View style={style.cartCard}>
                <Image source={item.image} style={{ height: 80, width: 80 }} />
                <View
                    style={{
                        height: 100,
                        marginLeft: 10,
                        paddingVertical: 20,
                        flex: 1,
                    }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
                    <Text style={{ fontSize: 13, color: COLORS.grey }}>
                        {item.ingredients}
                    </Text>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>${item.price}</Text>
                </View>
                <View style={{ marginRight: 20, alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>3</Text>
                    <View style={style.actionBtn}>
                        <AntDesign name="minus" size={23} color={COLORS.white} />
                        <AntDesign name="plus" size={23} color={COLORS.white} />
                    </View>
                </View>
            </View>
        );
    };
    return (
        <View style={{ backgroundColor: COLORS.white, flex: 1 }}>
            <View style={style.header}>
                <AntDesign name="left" size={28} />
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}></Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 80 }}
                data={foods}
                renderItem={({ item }) => <CartCard item={item} />}
                ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
                ListFooterComponent={() => (
                    <View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginVertical: 15,
                            }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                Total Price
                            </Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>$50</Text>
                        </View>
                        <View style={{ marginHorizontal: 30 }}>
                            <TouchableOpacity activeOpacity={0.8} >
                                <View style={style.btnContainer}>
                                    <Text style={style.title}>CHECKOUT</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};
const style = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop:40
    },
    cartCard: {
        height: 100,
        elevation: 15,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionBtn: {
        width: 80,
        height: 30,
        backgroundColor: COLORS.primary,
        borderRadius: 30,
        paddingHorizontal: 5,
        paddingVertical:2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    title: { 
        color: COLORS.white, 
        fontWeight: 'bold', 
        fontSize: 18 
    },
    btnContainer: {
        backgroundColor: COLORS.primary,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Carrito;
