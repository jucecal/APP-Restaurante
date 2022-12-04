import Proveedor from '../Pantallas/Proveedor';
import Inventario from '../Pantallas/Inventario';
import Carrito from '../Pantallas/Carrito';
import Cliente from '../Pantallas/Cliente';
import Empleado from '../Pantallas/Empleado';
import Menu from '../Pantallas/Menu';
import EditarCliente from '../Pantallas/EditarCliente';
import PerfilUsuario from '../Pantallas/PerfilUsuario';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const MenuTab = ()=>{
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <>
                <Tab.Screen name="Inicio" component={Proveedor} 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name="home" color={color} size={size} />
                        )
                    }}

                />
                <Tab.Screen name="Menú" component={Cliente} 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name="appstore-o" color={color} size={size} />
                        )
                    }}
                />

                <Tab.Screen name="Comprar" component={Empleado}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Entypo name="shopping-bag" color={color} size={size} />
                        )
                    }}
                />
                <Tab.Screen name="Reservaciones" component={Inventario}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name="calendar" color={color} size={size} />
                        )
                    }}
                
                />
                <Tab.Screen name="Perfil" component={PerfilUsuario}
                     options={{
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name="user" color={color} size={size} />
                        )
                    }}
                />
                
            </>
        </Tab.Navigator>
    );
};

export default MenuTab;