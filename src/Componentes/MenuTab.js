import Proveedor from '../Pantallas/Proveedor';
import Cliente from '../Pantallas/Cliente';
import Inventario from '../Pantallas/Inventario';
import Colaborador from '../Pantallas/Colaborador';
import EditarCliente from '../Pantallas/EditarCliente';
import PerfilUsuario from '../Pantallas/PerfilUsuario';
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
                <Tab.Screen name="Proveedores" component={Proveedor} />
                <Tab.Screen name="Clientes" component={Cliente} />
                <Tab.Screen name="Colaboradores" component={Colaborador} />
                <Tab.Screen name="Inventario" component={Inventario} />
                <Tab.Screen name="Perfil" component={PerfilUsuario} />
                
            </>
        </Tab.Navigator>
    );
};

export default MenuTab;