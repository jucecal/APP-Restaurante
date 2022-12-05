import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cliente from '../Pantallas/Cliente';
import EditarCliente from '../Pantallas/EditarCliente';
import GuardarCliente from '../Pantallas/GuardarCliente';

const Stack = createNativeStackNavigator();

const LoginTab = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <>
                <Stack.Screen name="Cliente" component={Cliente} />
                <Stack.Screen name="EditarCliente" component={EditarCliente} />
                <Stack.Screen name="GuardarCliente" component={GuardarCliente} />

            </>
        </Stack.Navigator>
    );
};

export default LoginTab;