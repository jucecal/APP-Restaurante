import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginTab from './LoginTab';
import MenuTab from './MenuTab';
//import OpcionesTab from './OpcionesTab';
import UsuarioContext from '../contexto/UsuarioContext';
import Cargando from './Cargando';
import DetailsScreen from '../Pantallas/DetailsScreen';
import SuccessScreen from '../Pantallas/SuccessScreen';
import MainTabNavigator from './MainTabNavigator';
import ClientesTab from './ClientesTab';


const Stack = createNativeStackNavigator();

const Pantallas = () => {
    const { aplicacionIniciada, setDatos, sesionIniciada, usuario } = React.useContext(UsuarioContext);
    setDatos();
    const verificarUsuario = () => {
        var tipoCliente = false;
        if (usuario.tipo == 'CLI') {
            tipoCliente = true;
        }
        return tipoCliente;
    }


    if (aplicacionIniciada) {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                {sesionIniciada ? (
                    <>
                        {verificarUsuario() ? (

                            <>
                                <Stack.Screen name="HomeScreen" component={MainTabNavigator} />
                                <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
                                <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
                            </>
                        ) : (
                            <>
                                <Stack.Screen name="TabMenu" component={MenuTab} />
                                <Stack.Screen name="ClientesTab" component={ClientesTab} />

                            </>

                        )}

                    </>
                ) : (

                    <>
                        <Stack.Screen name="LoginMenu" component={LoginTab} />
                    </>

                )
                }
            </Stack.Navigator>
        );

    }
    else {
        return <Cargando texto="Cargando aplicación" />;
    }

}
export default Pantallas;