import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    imprimirLogo: {
      height: 120,
      width: 240,
      marginBottom: -20,
      resizeMode: 'contain',
    },
    containerLogin:{
      backgroundColor: 'white',
      padding: 20,
      alignItems: 'center',
    },
    wrapperLogin:{
      alignItems:'center'
    },
    buttonLoginContainer: {
      marginTop: 40,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    allButtonsTransparentContainer: {
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf:'center'
    },
    field:{
      width:'100%',
      height:60,
      borderWidth:1,
      borderColor:'#000',
      marginTop:20,
      borderRadius:200,
      flexDirection:'row',
      alignItems:'center',
      paddingHorizontal:20,
    },
    iconSignup:{
      fontFamily: 'Montserrat',
      fontSize: 18,
      color: '#000',
      fontWeight: 'bold'
    },
    buttonLogin: {
      backgroundColor: '#b4c935',
      width:250,
      height:60,
      justifyContent:'center',
      alignItems:'center',
    },
    buttonLoginText:{
      fontFamily: 'Montserrat',
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',
      alignSelf:'center'
    },
    loginForm:{
      marginTop: 60
    },
    buttonTransparent:{
      padding: 10,
      alignItems:'center',
      justifyContent:'center'
    },
    buttonSignupText:{
      fontFamily: 'Montserrat',
      fontSize: 13,
      color: '#000',
      fontWeight: '300',
    },
    buttonRecoveryText:{
      fontFamily: 'Montserrat',
      fontSize: 13,
      color: '#000',
      fontWeight: '300',
    }
});