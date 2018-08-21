import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  message:{
    backgroundColor:'#fff',
    flexDirection:'row',
    paddingVertical:8,
    paddingHorizontal:4,
    justifyContent:'center',
    alignItems:'center',
  },
  img:{
    width:70,
    height:70,
    resizeMode:'contain',
    borderRadius:500,
    marginRight:40
  },
  nameUser:{
    color:'#000',
    fontFamily:'Montserrat',
    fontSize:15
  },
  messageDescription:{
    color:'#222',
    fontSize:12
  }
});