import React from 'react';
import { TouchableOpacity, View, Text, ScrollView, Image, Alert } from 'react-native';
import NumericInput from 'react-native-numeric-input'
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../consts/colors';
import imagen from '../../assets/cheesePizza.png';
import EstilosDetalleMenu from '../Componentes/EstilosDetalleMenu';

const DetalleMenu = () => {

    return (
        <View style={{ backgroundColor: COLORS.white }}>
            <View style={EstilosDetalleMenu.header}>
                <AntDesign name='doubleleft' size={28} />
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Descripcion</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 280,
                    }}>
                    <Image source={imagen} style={{ height: 220, width: 220 }} />
                </View>
                <View style={EstilosDetalleMenu.details}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                        <Text
                            style={{ fontSize: 25, fontWeight: 'bold', color: COLORS.white }}>
                            cheese Pizza
                        </Text>

                    </View>
                    <Text style={EstilosDetalleMenu.detailsText}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not
                        only five centuries.
                    </Text>
                    <View style={{ alignItems: "center", marginTop: 10, marginBottom: 10 }}>
                        <NumericInput type='up-down' textColor={COLORS.white} minValue={1} maxValue={10} rounded={true} leftButtonBackgroundColor='#E56B70' onChange={value => console.log(value)} />
                    </View>
                    <View style={{ marginTop: 20, marginBottom: 20 }}>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => Alert.alert('Pressed!', 'info info')}>
                            <View style={{ ...EstilosDetalleMenu.btnContainer, backgroundColor: COLORS.white }}>
                                <Text style={{ ...EstilosDetalleMenu.title, color: COLORS.primary }}>Agregar al carrito</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};



export default DetalleMenu;
