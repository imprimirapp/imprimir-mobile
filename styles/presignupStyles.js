import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    imprimirLogo: {
        height: 120,
        width: 240,
        marginBottom: -20,
        resizeMode: 'contain',
    },
    containerPresignup:{
        flex: 1,
        backgroundColor: '#009bdb',
        alignItems: 'center',
        justifyContent: 'center',
      },
      contentPresigup:{
        marginTop: 20,
      },
      buttonPresignupContainer: {
        marginTop: 20,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonPresignup: {
        backgroundColor: 'white',
        padding: 50
      },
      buttonPresignupText:{
        fontFamily: 'Montserrat',
        fontSize: 18,
        color: '#009bdb',
        fontWeight: 'bold'
      },
      buttonLoginText:{
        fontFamily: 'Montserrat',
        fontSize: 16,
        color: 'white',
        fontWeight: '300',
        textAlign: 'center'
      },
});