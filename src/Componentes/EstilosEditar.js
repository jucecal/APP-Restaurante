import { StyleSheet } from 'react-native';
import COLORS from '../consts/colors';

const EstilosEditar = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 30
    },
    contenedorContenido: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 20,
        marginVertical: 1,
        padding: 10,
        backgroundColor: COLORS.white
    },
    etiqueta: {
        fontSize: 18,
        color: COLORS.dark,
        fontWeight: '500',
        margin: 10
    },
    inputs: {
        width: '100%',
        backgroundColor: COLORS.light,
        height: 45,
        color: COLORS.dark,
        borderRadius: 10,
        padding: 10
    },
    title: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 18
    },
    btnContainer: {
        marginTop: 10,
        backgroundColor: COLORS.primary,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contenedorBorrado: {
        margin: 30,
        borderTopWidth: 1,
        borderTopColor: COLORS.dark,
        flex: 1,
        flexDirection: 'row',
        paddingTop: 25
    },
    etiquetaCreacion: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        color: COLORS.dark,
        fontSize: 15
    },
    botonBorrado: {
        width: '20%',
        backgroundColor: COLORS.primary,
        height: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    }
});

export default EstilosEditar;