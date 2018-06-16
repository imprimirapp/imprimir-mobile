import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#b4c935',
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
    },
    texts:{
      fontFamily: 'Montserrat',
      fontWeight: '300',
      fontSize: 24,
      color: 'white',
      textAlign: 'center',
      marginBottom: 10
    },
    buttonContainer: {
      marginTop: 20
    },
    buttonSignUp: {
      backgroundColor: 'white',
      padding: 50
    },
    buttonText:{
      fontFamily: 'Montserrat',
      fontSize: 18,
      color: '#b4c935',
      fontWeight: 'bold'
    }
  });
  