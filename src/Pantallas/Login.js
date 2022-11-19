import { Text, View, ImageBackground, TextInput, Button, Alert } from 'react-native';
import Estilos from '../Componentes/Estilos';
import pizza from '../../assets/pizza.jpg';
import React,{useState, useEffect} from 'react';
const Login = () => {
  const[usuario, setUsuario]=useState(null)
  const[contrasena, setContrasena]=useState(null)
  const[validacionUsuario, setValidacionUsuario]=useState(false)
  const[validacionContrasena, setValidacionContrasena]=useState(false)
  useEffect(()=>{
    console.log("SE EJECUTO CORRECTAMENTE")
    console.log(usuario)
    //usuario
    if(!usuario){
      setValidacionUsuario(true)
    }
    else if(usuario.length < 3){
      //SI ES TRUE SI TIENE PROBLEMAS
      setValidacionUsuario(true);
    }
    else{
      //SI ES FALSE NO TIENE PROBLEMAS
      setValidacionUsuario(false);
    }

    //CONTRASEÑA
    if(!contrasena){
      setValidacionContrasena(true)
    }
    else if(contrasena.length < 6){
      //SI ES TRUE SI TIENE PROBLEMAS
      setValidacionContrasena(true);
    }
    else{
      //SI ES FALSE NO TIENE PROBLEMAS
      setValidacionContrasena(false);
    }
  },[usuario, contrasena]);

  const iniciarSesion = () =>{
    if(validacionUsuario || validacionContrasena){
      Alert.alert('Inicio Sesion', 'Hay errores en los datos')
    }
    else{
      Alert.alert('Inicio Sesion', 'Datos correctos: ' + usuario + ' ' + contrasena)
    }
  }


  return (
      <View style={Estilos.contenedorPrincipal}>
        <View style={Estilos.contenedorTitulo}>
          <ImageBackground
            source={pizza}
            resizeMode='stretch'
            style={Estilos.imagenFondo}
          >
            <Text style={Estilos.textoTitulo} >Inicio Sesión</Text>
          </ImageBackground>
        </View>
        <View style={Estilos.contenedorContenido}>
          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.etiqueta}>Usuario</Text>
            <TextInput
              style={validacionUsuario? Estilos.entradasError: Estilos.entradas}
              placeholder='Escriba el correo o nombre de usuario'
              onChangeText={setUsuario}
            >
            </TextInput>

            {
              validacionUsuario ?(
                //las llaves grises son contenedores globales
                <>
                  <Text style={Estilos.etiquetaError}>Escriba los datos del usuario correctamente</Text>
                </>
              ):
             (
                <>
                </>
             )
            }
            
          </View>


          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.etiqueta}>Contraseña</Text>
            <TextInput
              style={validacionContrasena? Estilos.entradasError: Estilos.entradas}
              placeholder='Escriba la contraseña'
              secureTextEntry={true}
              onChangeText={setContrasena}
            >
            </TextInput>
            {
              validacionContrasena ?(
                
                <>
                  <Text style={Estilos.etiquetaError}>Escriba la contraseña del usuario correctamente</Text>
                </>
              ):
             (
                <>
                </>
             )
            }
            
          </View>

          <View style={Estilos.contenedorBotones}>
            <View style={Estilos.boton}>
              <Button
                title='Entrar'
                color={'#000'}
                onPress={iniciarSesion}
              >
              </Button>
            </View>
                    
            <View style={Estilos.boton}>
              <Button
                title='Cerrar'
                color={'red'}
              >
              </Button>
            </View>
          </View>
        </View>
      </View>
    );
};
export default Login;
