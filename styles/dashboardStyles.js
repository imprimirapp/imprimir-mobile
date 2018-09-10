import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    imprimirLogo: {
        height: 120,
        width: 240,
        marginBottom: -20,
        resizeMode: 'contain',
      },
      containerDashboard:{
        backgroundColor: 'white',
        padding: 20,
        alignItems: 'center',
      },
      buttonLogoutContainer: {
        marginTop: 40,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonLogout: {
        backgroundColor: '#b4c935',
        padding: 50
      },
      buttonLogoutText:{
        fontFamily: 'Montserrat',
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
      },
});