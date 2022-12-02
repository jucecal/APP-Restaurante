import { StyleSheet } from 'react-native';
const Estilos = StyleSheet.create({
    contenedorPrincipal: {
        flex: 1,//ocupa todo el espacio.
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        
    },
    contenedorTitulo: {
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
        height: 150,
        alignItems: 'center',
        
    },
    contenedorTitulo2: {
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
        height: 37,
        alignItems: 'center',
        
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
        width: 300,
        height: 200,
        justifyContent: 'flex-end',
        padding:15,
        backgroundColor: '#000'
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
    etiquetaTexto: {
        fontSize: 16,
        color:"#fff"
    },
    etiquetaError: {
        fontSize: 12,
        marginBottom: 5,
        marginLeft: 5,
        color:'red'
    },
    boton: {
        flex: 1,
        alignItems: 'stretch',
        margin: 15,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 30
    }
});

export default Estilos;