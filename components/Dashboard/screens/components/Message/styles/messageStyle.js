import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  contentMessage:{
    height:80
  },
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
    marginRight:15
  },
  nameUser:{
    color:'#000',
    fontFamily:'Montserrat-Regular',
    fontSize:15
  },
  messageDescription:{
    color:'#222',
    fontSize:12,
    fontFamily:'Montserrat-Regular'
  }
});