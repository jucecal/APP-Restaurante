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
                        <Stack.Screen name="TabMenu" component={MenuTab} />
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
        return <Cargando texto="Cargando aplicación"/>;
    }

}
export default Pantallas;