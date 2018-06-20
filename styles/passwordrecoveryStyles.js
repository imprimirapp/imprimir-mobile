import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
        color: '#7f8487',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20
    },
    containerPw:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconPw:{
        fontFamily: 'Montserrat',
        fontSize: 18,
        color: '#b4c935',
        fontWeight: 'bold'
    },
    pwForm:{
        marginTop: 50
    },
    buttonPwContainer: {
        marginTop: 40,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonPwText:{
        fontFamily: 'Montserrat',
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    }
});