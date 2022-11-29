import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../Pantallas/Login';
import MenuTab from './MenuTab';
import UsuarioContext from '../contexto/UsuarioContext';
import Cargando from './Cargando';


const Stack = createNativeStackNavigator();

const Pantallas = () => {
    const { aplicacionIniciada, setDatos, sesionIniciada } = React.useContext(UsuarioContext);
    setDatos();
    
    if (aplicacionIniciada) {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                {sesionIniciada ? (
                    <>
                        <Stack.Screen name="Menu" component={MenuTab} />
                    </>
                ) : (
                    
                    <>
                        
                        <Stack.Screen name="Login" component={Login} />
                    </>
                    
                )
                }
            </Stack.Navigator>
        );

    }
    else {
        return <Cargando texto="Cargando aplicación"/>;
    }

}
export default Pantallas;