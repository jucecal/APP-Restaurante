import { StyleSheet } from 'react-native';
const Estilos = StyleSheet.create({
    contenedorPrincipal: {
        flex: 1,//ocupa todo el espacio.
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    contenedorTitulo: {
        backgroundColor: '#000',
        alignItems: 'stretch',
        justifyContent: 'flex-end',
        width: '100%',
        height: 150,
        
    },
    contenedorContenido: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'flex-start',       
        width: '100%',        
        padding: 10 

    },
    textoTitulo: {
        color: '#fff',
        fontSize: 26,
        fontWeight: '900',
        textAlign: 'center'
    },
    imagenFondo: {
        flex: 1,
        justifyContent: 'flex-end',
        padding:20
    },
    contenedorControles: {
        flexDirection: 'column',
        marginTop: 10,
        marginBottom: 10,
    },
    contenedorBotones: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
        marginBottom: 10,
    },
    entradas: {
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        fontSize: 16,
    },
    entradasError: {
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        fontSize: 16,
    },
    etiqueta: {
        fontSize: 20,
        marginBottom: 5
    },
    etiquetaError: {
        fontSize: 12,
        marginBottom: 5,
        marginLeft: 5,
        color:'red'
    },
    boton: {
        flex: 1,
        alignItems: "stretch",
        marginTop: 10,
        marginBottom: 10,
    }
});

export default Estilos;