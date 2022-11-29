import Principal from '../Pantallas/Principal';
import PerfilUsuario from '../Pantallas/PerfilUsuario';
import ListaUsuarios from '../Pantallas/ListaUsuarios';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const MenuTab = ()=>{
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <>
                <Tab.Screen name="Principal" component={Principal} />
                <Tab.Screen name="Perfil" component={PerfilUsuario} />
                <Tab.Screen name="ListaUsuarios" component={ListaUsuarios} />
            </>
        </Tab.Navigator>
    );
};

export default MenuTab;