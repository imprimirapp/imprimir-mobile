import { StyleSheet, PixelRatio } from 'react-native';

const green = '#b4c935'

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
    backgroundColor:green,
    flex:1,
    justifyContent:'space-between'
  },
  roundedCenter:{
    width:300,
    height:300,
    backgroundColor:'#fff',
    borderRadius:300 / PixelRatio.get(),
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  title:{
    color:'#6CA31E',
    fontFamily: 'Montserrat-Black',
    fontSize:50,
    lineHeight:55,
    textAlign:'center'
  },
  button:{
    backgroundColor:'#fff',
    width:260,
    height:60,
    alignSelf:'center',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText:{
    color:'#6CA31E',
    fontSize:20,
    fontFamily:'Montserrat-Regular',
    fontWeight:"600"
  },
  buttonOut:{
    backgroundColor:'transparent',
    shadowColor:'transparent',
    alignSelf:'center'
  },
  buttonOutText:{
    color:'#fff'
  }

});
