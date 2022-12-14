import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from '../Pantallas/DetailsScreen';
import SuccessScreen from '../Pantallas/SuccessScreen';
import CheckoutScreen from '../Pantallas/CheckoutScreen';// FALTA ESTE
import MainTabNavigator from './MainTabNavigator';

const Stack = createStackNavigator();

export default function HomeNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <>
                <Stack.Screen name="HomeScreen" component={MainTabNavigator} />
                <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
                <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
            </>

        </Stack.Navigator>
    )
}