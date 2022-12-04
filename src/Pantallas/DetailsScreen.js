import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView } from 'react-native'
import colors from '../consts/colors'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'
import tailwind from 'tailwind-react-native-classnames';
import { Foundation } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import RestaurantMap from '../Componentes/RestaurantMap'
import MenuItems from '../Componentes/MenuItems'
import ViewCart from '../Componentes/ViewCart';
import { selectTotalItems, selectTotalPrice } from '../redux/slices/basketSlice';
import { useSelector } from 'react-redux';

const DetailsScreen = ({ route, navigation }) => {
    const [mapActive, setMapActive] = useState(false)
    const { categories, coordinates, image_url, name, price, rating, review_count } = route?.params?.item
    const totalPrice = useSelector(selectTotalPrice)
    const getAllItems = useSelector(selectTotalItems)

    return (
        <View style={styles.container}>
            <TouchableOpacity style={tailwind`absolute top-9 left-4 z-30 w-9 h-9 rounded-full bg-white justify-center items-center shadow`} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={18} color={colors.black} />
            </TouchableOpacity>

            <View style={styles.mapImageWrpper}>
                {mapActive ? (
                        <RestaurantMap coordinates={coordinates} title={name} />
                    ) : (
                        <Image source={{ uri: image_url }} style={styles.image} />
                    )}          
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={tailwind`z-20`}>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Platos</Text>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <View style={styles.info}>
                            <View style={styles.infoItem}>
                                <AntDesign name="star" size={12} color="#FFC238" />
                                <Text style={styles.infoText}>{rating} • ({review_count})</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <AntDesign name="clockcircleo" size={10} color='dark' />
                                <Text style={styles.infoText}>20-30 • min</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Foundation name="dollar" size={16} color={colors.dark} />
                                <Text style={styles.infoText}>• Lempira</Text>
                            </View>
                        </View>
                    </View>

                    <View style={tailwind`mt-1`}>
                        <Text style={[tailwind`text-gray-900 font-bold border-b`, { borderBottomColor: colors.primary, fontSize: 17 }]}></Text>
                        {categories.map(({ title }, index) => (
                            <Text key={index} style={tailwind`text-xs text-gray-700`}><Text style={{ color: colors.primary }}></Text> {title}</Text>
                        ))}
                    </View>
                    
                    {/* MenuItems */}
                    <MenuItems resName="Pedido" resImage={image_url} />
                </View>
            </ScrollView>
            <ViewCart total={totalPrice} count={getAllItems.length} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        position: 'relative',
        flex: 1
    },
    mapImageWrpper: {
        position: 'absolute',
        width: '100%',
    },
    image: {
        width: '100%',
        resizeMode: 'cover',
        height: 260
    },
    content: {
        position: 'relative',
        zIndex: 20,
        backgroundColor: colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 25,
        paddingHorizontal: 25,
        marginTop: 220,
        paddingBottom: 10
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8
    },
    title: {
        fontSize: 23,
        color: colors.title,
        fontWeight: '700',
        maxWidth: '80%'
    },
    price: {
        fontSize: 20,
        color: colors.primary,
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 6,
        paddingVertical: 3,
        backgroundColor: '#F9F9F9',
        borderRadius: 5,
        marginRight: 7
    },
    infoText: {
        marginLeft: 4,
        fontSize: 12
    },
})

export default DetailsScreen;
