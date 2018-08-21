import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#b4c935',
    },
    carousel:{
      marginTop:50
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    imageItem: {
      height: 150,
      width: 300,
      resizeMode: 'contain'
    },
    imprimirLogo: {
      height: 120,
      width: 240,
      marginBottom: -20,
      resizeMode: 'contain',
      marginTop:20
    },
    texts:{
      fontFamily: 'Montserrat',
      fontWeight: '600',
      fontSize: 24,
      color: 'white',
      textAlign: 'center',
      marginBottom: 10
    },
    buttonSignUpContainer: {
      marginTop: 20
    },
    buttonSignUp: {
      backgroundColor:'white',
      height:60,
      padding: 50
    },
    buttonSignUpText:{
      fontFamily: "Montserrat",
      fontSize: 18,
      color: '#b4c935',
      fontWeight: 'bold'
    },
    buttonLogin:{
      padding: 20
    },
    buttonLoginText:{
      fontFamily: 'Montserrat',
      fontSize: 16,
      color: 'white',
      fontWeight: '300',
    },
  });
