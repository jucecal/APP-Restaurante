import React, { useContext } from 'react';
import { View, Image, Text, TouchableOpacity, Icon } from 'react-native';
import Screen from '../Componentes/Screen'

import tailwind from 'tailwind-react-native-classnames';
import UsuarioContext from '../contexto/UsuarioContext';
import AppHead from '../Componentes/AppHead';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import UsuarioContext from '../contexto/UsuarioContext';
import { urlImagenesUsuariosEM, urlImagenesUsuariosCL } from '../configuracion/Urls';

const AccountScreen = () => {
    const { usuario, setCerrarSesion } = useContext(UsuarioContext);
    const [espera, setEspera] = useState(false);
    const cerrarSesion = async () => {
        await setCerrarSesion();
    };

    return (
        <Screen style={tailwind`flex-1 bg-white`}>
            {
                espera ? (
                    <Cargando texto="Estableciendo conexion con la API"></Cargando>
                ) : (
                    <>
                        <AppHead title={`Cuenta`}
                            icon="settings-outline"
                        />

                        <View style={tailwind`justify-center items-center`}>
                            <View style={tailwind`rounded-full overflow-hidden w-48 h-48 mt-4`}>
                                <View style={styles.contenedorImagen}>
                                    <Image
                                        style={styles.imagen}
                                        source={{ uri: urlImagenesUsuariosCL + usuario.imagen }}
                                    />
                                </View>
                            </View>
                            <Text style={tailwind`mt-4 text-3xl font-bold text-red-500`}>{usuario.nombre}</Text>
                            <Text style={tailwind`text-lg text-indigo-900`}>{usuario.correo}</Text>
                        </View>

                        <View style={tailwind`mx-4 border-t border-t-2 mt-5 border-gray-100`}>
                            <Text style={tailwind`text-gray-800 mt-2 text-lg mb-2`}>Administrar Opciones</Text>
                            <SavedPlaces
                                title="Clientes"
                                text="Agregar, editar y eliminar clientes."
                                Icon={() => <AntDesign name="user" size={24} color="black" />}
                            />
                            <SavedPlaces
                                title="Empleados"
                                text="Agregar, editar y eliminar empleados."
                                Icon={() => <AntDesign name="idcard" size={24} color="black" />}
                            />

                            <SavedPlaces
                                title="Proveedores"
                                text="Agregar, editar y eliminar proveedores."
                                Icon={() => <Feather name="truck" size={24} color="black" />}
                            />
                            <SavedPlaces
                                title="Inventario"
                                text="Ver Inventario."
                                Icon={() => <Feather name="list" size={24} color="black" />}
                            />
                        </View>
            <View style={tailwind`mx-4 border-t border-t-2 mt-5 border-gray-100`}>
                <Text style={tailwind`text-gray-800 mt-2 text-lg mb-2`}>Administrar Opciones</Text>
                <SavedPlaces
                    title="Términos y condiciones"
                />
            </View>

            <View style={tailwind`mx-4 border-t border-t-2 mt-5 border-gray-100`}>
                <SavedPlaces
                    title="Privacidad"
                />
            </View>

            <View style={tailwind`mx-4 border-t border-t-2 mt-5 border-gray-100`}>
                <SavedPlaces
                    title="Ayuda"
                />
            </View>

            <View style={tailwind`mx-4 border-t border-t-2 mt-5 border-gray-100`}>
                <Text style={tailwind`text-gray-800 mt-2 text-lg`}>Otras Opciones</Text>
                <TouchableOpacity>
                    <Text style={tailwind`text-red-500 mt-3 text-sm`} onPress={cerrarSesion}>Cerrar Sesión</Text>
                </TouchableOpacity>
            </View>

                        <View style={tailwind`mx-4 border-t border-t-2 mt-5 border-gray-100`}>
                            <Text style={tailwind`text-gray-800 mt-2 text-lg`}>Otras Opciones</Text>
                            <TouchableOpacity>
                                <Text style={tailwind`text-red-500 mt-3 text-sm`} onPress={cerrarSesion}>Cerrar Sesión</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )
            }
        </Screen>
    );
}

export default AccountScreen;

const SavedPlaces = ({ title}) => (
    <TouchableOpacity style={tailwind`flex-row items-center my-3`}>
        <View style={tailwind`ml-5`}>
            <Text style={tailwind`text-gray-800`}>{title}</Text>
        </View>
    </TouchableOpacity>
)
