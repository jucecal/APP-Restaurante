import Proveedor from '../Pantallas/Proveedor';
import Inventario from '../Pantallas/Inventario';
import Cliente from '../Pantallas/Cliente';
import Colaborador from '../Pantallas/Colaborador';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const OpcionesTab = ()=>{
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <>
                <Tab.Screen name="Clientes" component={Cliente} 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name="user" color={color} size={size} />
                        )
                    }}
                />
                <Tab.Screen name="Colaboradores" component={Colaborador} 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name="idcard" color={color} size={size} />
                        )
                    }}
                />

                <Tab.Screen name="Proveedores" component={Proveedor}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Feather name="truck" color={color} size={size} />
                        )
                    }}
                />
                <Tab.Screen name="Inventario" component={Inventario}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Feather name="list" color={color} size={size} />
                        )
                    }}
                />
                
            </>
        </Tab.Navigator>
    );
};

export default OpcionesTab;