import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  containerPresignup:{
    flex: 1,
    backgroundColor: '#009bdb',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imprimirLogo: {
    height: 50,
    width: 240,
    marginTop:50,
    resizeMode: 'contain',
  },
  buttonPresignupContainer: {
    marginTop:-20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPresignup: {
    width:300,
    height:70,
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    borderRadius:50
  },
  buttonPresignupText:{
    fontFamily: 'Montserrat',
    fontSize: 18,
    color: '#009bdb',
    fontWeight: '700'
  },
  button:{
    position:'relative',
    right:10
  },
  buttonLoginText:{
    fontFamily: 'Montserrat',
    fontSize: 16,
    color: 'white',
    fontWeight: '300',
    textAlign: 'center'
  },
});