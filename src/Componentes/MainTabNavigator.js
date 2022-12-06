import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons';
import colors from '../consts/colors2';
import HomeScreen from '../Pantallas/HomeScreen'
import TabCartButton from '../Componentes/TabCartButton'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import BrowseScreen from '../Pantallas/BrowseScreen';
import CartScreen from '../Pantallas/CartScreen';
import AccountScreen from '../Pantallas/AccountScreen';
import GuardarReservacion from '../Pantallas/GuardaReservaciones';

const Tab = createBottomTabNavigator()

const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.activeTintColor,
                tabBarInactiveTintColor: colors.inActiveTintColor,
                headerShown: false,
                tabBarStyle: {
                    borderTopWidth: 0,
                    paddingTop: 10,
                    paddingBottom: 10,
                    height: 60,
                },
            }}
        >
            <Tab.Screen name="Inicio" component={BrowseScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="home" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen name="Menú" component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="appstore-o" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen name="Carrito" component={CartScreen}
                options={({ navigation }) => ({
                    tabBarButton: () => <TabCartButton onPress={() => navigation.navigate('Carrito')} />
                })}
            />

            <Tab.Screen name="Reservaciones" component={GuardarReservacion}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="calendar" color={color} size={size} />
                    )
                }}
            />

            <Tab.Screen name="Cuenta" component={AccountScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="user" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}


export default MainTabNavigator;
