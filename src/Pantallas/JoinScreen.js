import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import colors from '../consts/colors';
import AppButton from '../Componentes/AppButton';


function JoinScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image style={styles.logo} source={require('../../assets/logo-01.png')} />
                <View style={styles.content}>
                    <Text style={styles.title}>Come Rico: ¡Bienvenido!</Text>
                    <Text style={styles.subTitle}>Las mejores pizzas del país en las principales ciudades y a tu alcance.</Text>
                    <AppButton title="¡Vámos!" onPress={() => navigation.navigate("Login")} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        height: 270,
        resizeMode: "contain",
        alignSelf: "center",
        position: 'absolute',
        zIndex: 99999,
        top: 160,
    },
    image: {
        width: '100%',
        resizeMode: 'cover',
        flex: 1,
        position: 'relative',
        justifyContent: 'flex-end',
        backgroundColor: '#F2E8CF',
    },
    content: {
        backgroundColor: colors.white,
        paddingHorizontal: 25,
        paddingBottom: 25,
        paddingTop: 35,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10
    },
    subTitle: {
        fontSize: 16,
        color: colors.gray,
        marginBottom: 10
    },
    input: {
        borderColor: colors.medium,
        backgroundColor: colors.light,
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 15
    },
})

export default JoinScreen