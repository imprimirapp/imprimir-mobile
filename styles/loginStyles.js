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
    },
    buttonLogin: {
      backgroundColor: '#b4c935',
      padding: 50
    },
    buttonLoginText:{
      fontFamily: 'Montserrat',
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold'
    },
    loginForm:{
      marginTop: 20
    },
    buttonTransparent:{
      padding: 10
    },
    buttonSignupText:{
      fontFamily: 'Montserrat',
      fontSize: 16,
      color: '#b4c935',
      fontWeight: '300',
      textAlign: 'center'
    },
    buttonRecoveryText:{
      fontFamily: 'Montserrat',
      fontSize: 14,
      color: '#7f8487',
      fontWeight: '300',
      textAlign: 'center'
    }
});