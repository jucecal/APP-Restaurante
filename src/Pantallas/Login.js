import React, { useState, useEffect, useContext } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import AppForm from "../Componentes/forms/AppForm";
import Screen from "../Componentes/Screen";
import colors from "../consts/colors";
import * as yup from "yup";
import AppFormFeilds from "../Componentes/forms/AppFormFeilds";
import AppSubmitButton from "../Componentes/forms/AppSubmitButton";
import tailwind from 'tailwind-react-native-classnames';
import UsuarioContext from '../contexto/UsuarioContext';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});

function Login({ navigation }) {
 
  const { setLogin } = useContext(UsuarioContext);  
  
  const iniciarSesion = async ({ email, password }) => {    
      
      await setLogin({ usuario: email, contrasena: password });      
    
  };
  const LoginUser = ({ email, password }) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        if (error.code === "auth/invalid-password") {
          Alert.alert("Error", "Invalid password!")
        }
        if (error.code === "auth/invalid-email") {
          Alert.alert("Error", "That email address is invalid!")
        }
        Alert.alert('ERROR: ', error.message);
      });
  };

  const irpin = () =>{
    console.log("Ir a PIN");
    navigation.navigate('Pin');
  }
  return (
    <Screen style={styles.container}>
      <View style={styles.wrapper}>
        <View style={tailwind`py-4 rounded-2xl`}>
          <Image style={styles.logo} source={require("../../assets/logo.png")} />
        </View>
        <Text style={styles.wellcomeTo}>
          Login to Come <Text style={styles.brand}>Rico</Text>
        </Text>
        <View style={styles.form}>
          <AppForm
            initialValues={{ email: "", password: "" }}
            validationSchema={loginValidationSchema}
            onSubmit={(values) => iniciarSesion(values)}
          >
            <AppFormFeilds
              name="email"
              placeholder="Correo"
              keyboardType="email-address"
            />
            <AppFormFeilds
              name="password"
              placeholder="Contraseña"
              autoCompleteType="off"
              password={true}
            />
            <AppSubmitButton title="Ingresar" />            
          </AppForm>
        </View>

        <Text style={styles.join}>
          No eres miembro?{" "}
          <Text
            onPress={() => navigation.navigate("Signup")}
            style={{ color: colors.primary }}
          >
            Sign Up
          </Text>
        </Text>
        <Text onPress={irpin}
          style={{ color: colors.dark, textAlign: 'center',marginTop:10 }}
        >
          ¿Olvidaste tu contraseña?          
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    justifyContent: 'center'
  },
  wrapper: {
    paddingHorizontal: 20,
  },
  logo: {
    height: 280,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 10,
  },
  wellcomeTo: {
    fontSize: 23,
    fontWeight: "700",
    color: colors.dark,
    marginTop: 10,
    textAlign: "center",
  },
  brand: {
    fontSize: 23,
    color: colors.primary,
    textAlign: "center",
    fontWeight: "500",
  },
  form: {
    marginTop: 10,
  },
  join: {
    marginTop: 16,
    textAlign: "center",
    color: colors.black,
  },
  or: {
    color: colors.gray,
    textAlign: "center",
    marginVertical: 20,
  },
});

export default Login;
