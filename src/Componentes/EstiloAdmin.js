
import {
    Dimensions,
    StyleSheet,
  } from 'react-native';
  
  import COLORS from '../consts/colors';
  
  const {width} = Dimensions.get('screen');
  const cardWidth = width / 2 - 20;
  
  const EstilosAdmin = StyleSheet.create({
      header: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      },

      inputContainer: {
        flex: 1,
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: COLORS.light,
        alignItems: 'center',
        paddingHorizontal: 20,
      },

      sortBtn: {
        width: 50,
        height: 50,
        marginLeft: 10,
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },

      categoriesListContainer: {
        paddingVertical: 30,
        alignItems: 'center',
        paddingHorizontal: 20,
        
      },

      categoryBtn: {
        height: 45,
        width: 120,
        marginRight: 7,
        borderRadius: 30,
        alignItems: 'center',
        paddingHorizontal: 5,
        flexDirection: 'row',
      },

      categoryBtnImgCon: {
        height: 35,
        width: 35,      
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },

      card: {
        height: 170,
        flex:1,
        flexDirection:'row',
        marginHorizontal: 20,
        marginVertical:20,
        borderRadius: 15,
        elevation: 13,
        padding:20,
        backgroundColor: COLORS.white,
        alignItems:'center'
        
      },

      iconoTipoCarta:{
        width:'20%',      
        backgroundColor:COLORS.secondary,  
        borderRadius:10,
        height:'50%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginRight:15         
      },
      
      imagen: {
        width:90,
        height: 90,
        resizeMode: "contain",
        borderWidth: 3,
        borderRadius:10
        
    },

      textoCarta:{
        paddingBottom: 10,
        padding: 8,
        width:'65%'
      },

      tituloCarta:{
        fontSize: 18, 
        fontWeight: 'bold'
      },

      detallesCarta:{
        fontSize: 14, 
        color: COLORS.grey, 
        marginTop: 2
      },

      detallesCarta2:{
        fontSize: 14, 
        color: COLORS.dark, 
        marginTop: 2
      },

      iconoEditar:{
        width:'10%',
        marginLeft:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
      },

      addToCartBtn: {
        height: 30,
        width: 30,
        borderRadius: 20,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
      },
    });
  
    export default EstilosAdmin;