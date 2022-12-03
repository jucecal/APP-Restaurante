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
import GroceryScreen from '../Pantallas/GroceryScreen';
import AccountScreen from '../Pantallas/AccountScreen';

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
            <Tab.Screen name="Inicio" component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="home" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen name="Buscar" component={BrowseScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="md-search-sharp" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen name="Carrito" component={CartScreen}
                options={({ navigation }) => ({
                    tabBarButton: () => <TabCartButton onPress={() => navigation.navigate('Carrito')} />
                })}
            />
            
            <Tab.Screen name="Reservaciones" component={GroceryScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="clipboard" color={color} size={size} />
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
