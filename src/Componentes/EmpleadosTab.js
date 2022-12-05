import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Empleado from '../Pantallas/Empleado';
import EditarEmpleado from '../Pantallas/EditarEmpleado';
import GuardarEmpleado from '../Pantallas/GuardarEmpleado';

const Stack = createNativeStackNavigator();

const LoginTab = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <>
                <Stack.Screen name="Empleado" component={Empleado} />
                <Stack.Screen name="EditarEmpleado" component={EditarEmpleado} />
                <Stack.Screen name="GuardarEmpleado" component={GuardarEmpleado} />

            </>
        </Stack.Navigator>
    );
};

export default LoginTab;