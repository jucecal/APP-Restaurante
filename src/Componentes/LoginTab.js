import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Pantallas/Login';
import Pin from '../Pantallas/Pin';
import NuevaContrasena from '../Pantallas/NuevaContrasena';
import JoinScreen from '../Pantallas/JoinScreen';

const Stack = createNativeStackNavigator();

const LoginTab = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <>
                <Stack.Screen name="Join" component={JoinScreen} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Pin" component={Pin} />
                <Stack.Screen name="NuevaContrasena" component={NuevaContrasena} />
            </>
        </Stack.Navigator>
    );
};

export default LoginTab;