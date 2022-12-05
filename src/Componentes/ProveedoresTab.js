import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Proveedor from '../Pantallas/Proveedor';
import EditarProveedor from '../Pantallas/EditarProveedor';
import GuardarProveedor from '../Pantallas/GuardarProveedor';
const Stack = createNativeStackNavigator();

const LoginTab = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <>
                <Stack.Screen name="Proveedor" component={Proveedor} />
                <Stack.Screen name="EditarProveedor" component={EditarProveedor} />
                <Stack.Screen name="GuardarProveedor" component={GuardarProveedor} />

            </>
        </Stack.Navigator>
    );
};

export default LoginTab;