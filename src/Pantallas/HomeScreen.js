import React, {useEffect, useState,} from 'react';
import { Text, ScrollView, Alert, ActivityIndicator, View, StyleSheet, TextInput, ImageBackground} from 'react-native';
import logo01 from '../../assets/logo-01.png';
import Screen from '../Componentes/Screen'
import Categories from '../Componentes/Categories'
import RestaurantItem from '../Componentes/RestaurantItem'
import tailwind from 'tailwind-react-native-classnames';
import { localRestaurants } from '../data/localRestaurants';
import colors from '../consts/colors2';

import { Ionicons } from '@expo/vector-icons';
import { urlAPI } from '../configuracion/Urls';
const YELP_API_KEY = "";

const HomeScreen = () => {

    const [restaurantData, setRestaurantData] = useState(localRestaurants)
    const [city, setCity] = useState("San Francisco")
    const [activeTab, setActiveTab] = useState("Delivery");
    const [loading, setLoading] = useState(false)


    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };
        setLoading(true)
        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) => {
                setLoading(false)
                if (json.error) return Alert.alert('¡Lo sentimos!', json.error.description);
                setRestaurantData(
                    json?.businesses?.filter((business) =>
                        business.transactions.includes(activeTab.toLowerCase())
                    )
                )
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        return 
        getRestaurantsFromYelp();
    }, [city, activeTab]);

    return (
        <Screen style={tailwind`bg-white flex-1`}>

        <View style={styles.contenedorImagen}>
            <ImageBackground
                source={logo01}
                style={styles.imagenFondo}
            >
            </ImageBackground>
        </View>

        <View style={tailwind`mt-2 mx-4 mb-2 relative justify-center`}>            
            <Ionicons name="search-sharp" size={23} color="#F9813A" style={tailwind`absolute left-4 top-3 z-10 self-center`} />
            <TextInput style={[tailwind`rounded-full py-2 px-5 pl-10 bg-gray-100`, styles.input]} placeholder=" Buscar Sucursal" />
        </View>
                

        <ScrollView style={tailwind`flex-1`} showsVerticalScrollIndicator={false}>
            {loading && <ActivityIndicator size="large" color='#F9813A' style={tailwind`mt-2 mb-6`} />}
            <RestaurantItem restaurantData={restaurantData} />
        </ScrollView>
    </Screen>

    );
}

const styles = StyleSheet.create({
    input: {
        borderColor: colors.medium,
        borderWidth: 1,
        marginBottom: 10,
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



    

export default HomeScreen;



