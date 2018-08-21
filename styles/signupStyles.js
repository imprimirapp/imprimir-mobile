import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    imprimirLogo: {
        height: 120,
        width: 240,
        marginBottom: -20,
        resizeMode: 'contain',
      },
      containerSignup:{
        backgroundColor: 'white',
        padding: 20,
        alignItems: 'center',
        justifyContent:'space-between'
      },
      buttonSignupContainer: {
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
      buttonSignup: {
        margin:'auto',
        width:250,
        height:60,
        alignSelf:'center',
        backgroundColor: '#b4c935',
        padding:5,
        justifyContent:'center'
      },
      buttonSignupText:{
        fontFamily: 'Montserrat',
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
      },
      signupForm:{
        marginTop: 20
      },
      buttonTransparent:{
        padding: 10
      },
      buttonLoginText:{
        fontFamily: 'Montserrat',
        fontSize: 16,
        color: '#b4c935',
        fontWeight: '300',
        textAlign: 'center'
      },
      iconSignup:{
        fontFamily: 'Montserrat',
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold'
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
      paddingHorizontal:20
    }
});