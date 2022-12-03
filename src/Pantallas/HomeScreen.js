import React, { useEffect, useState } from 'react';
import { Text, ScrollView, Alert, ActivityIndicator } from 'react-native';
import Screen from '../Componentes/Screen'
import Categories from '../Componentes/Categories'
import RestaurantItem from '../Componentes/RestaurantItem'
import tailwind from 'tailwind-react-native-classnames';
import { localRestaurants } from '../data/localRestaurants';
import colors from '../consts/colors2'

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
                if (json.error) return Alert.alert('Sorry', json.error.description);
                setRestaurantData(
                    json?.businesses?.filter((business) =>
                        business.transactions.includes(activeTab.toLowerCase())
                    )
                )
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        return // Remove return after adding Yelp API key
        getRestaurantsFromYelp();
    }, [city, activeTab]);

    return (
        <Screen style={tailwind`bg-white flex-1`}>
            <Text>Inicio</Text>
            <Categories />
            <ScrollView style={tailwind`flex-1`} showsVerticalScrollIndicator={false}>
                {loading && <ActivityIndicator size="large" color={colors.primary} style={tailwind`mt-2 mb-6`} />}
                <RestaurantItem restaurantData={restaurantData} />
            </ScrollView>
        </Screen>
    );
}

export default HomeScreen;
