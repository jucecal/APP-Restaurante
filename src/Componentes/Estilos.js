import { StyleSheet } from "react-native";

const Estilos = StyleSheet.create({

    contenedorPrincipal: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      contenedorTitulo:{
        backgroundColor: "#000",
        alignItems:"stretch",
        justifyContent:"flex-end",
        width:"100%",
        height:150,

      },
    
      textoTitulo:{
        color:"#000",
        fontSize:30,
        fontWeight:"900",
        textAlign:"center"
      },
    
      imagenFondo:{
        flex:1,
        justifyContent:"flex-end",
        padding:20,


      },
      contenedorContenido:{
        flex: 1,
        flexDirection: "column",
        backgroundColor:"#fff",
        alignItems:"stretch",
        justifyContent:"flex-start",
        borderColor: "#000",
        borderWidth: 1,
        width:"100%",
        borderRadius: 20,
        padding: 15
      },

      contenedorImagen:{
        flex: 1,
        justifyContent:"flex-end",
        marginTop: 10,
        marginBottom: 10,
      },
      
      contenedorControles:{
        flexDirection:'column',
        marginTop: 10,
        marginBottom:10,
      },

      entradasError:{
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        fontSize: 16,
      },

      entradas:{
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        fontSize: 16,
      },

      etiquetaError:{
        fontSize: 12,
        marginBottom: 5,
        marginLeft:5,
        color:'red'
      },

      etiqueta:{
        fontSize: 20,
        marginBottom: 5,
      },

      contenedorBotones:{
        flex: 1,
        alignItems: "stretch",
        borderRadius: 100,
        padding: 10,
        marginTop: 20,
        marginBottom: 20,
      },
});
export default Estilos

