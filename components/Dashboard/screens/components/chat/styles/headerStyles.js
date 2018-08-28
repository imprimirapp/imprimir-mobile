import { StyleSheet  } from 'react-native';

export default StyleSheet.create({
  header:{
    backgroundColor:'#fff',
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:15,
    paddingHorizontal:5
  },
  imgContent:{
    position:'relative'
  },
  dotActivity:{
    position:'absolute',
    width:15,
    height:15,
    backgroundColor:'#6CA31E',
    borderRadius:15 / 2,
    right:0,
    bottom:0
  },
  imgUser:{
    width:60,
    height:60,
    borderRadius:60 / 2
  },
  contentInfo:{
    paddingLeft:10
  },
  nameUser:{
    color:'#000',
    fontSize:15,
    fontFamily:'Montserrat-Regular'
  },
  description:{
    fontSize:10,
    fontFamily:'Montserrat-Regular'
  }
});