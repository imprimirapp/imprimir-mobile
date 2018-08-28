import {  StyleSheet } from 'react-native';

const green = '#b4c935';

export default StyleSheet.create({
  header:{
    backgroundColor:green,
    position:'relative',
  },
  hamburguerButton:{
    backgroundColor:green,
    position:'relative',
    zIndex:99999
  },
  titleHeader:{
    fontFamily:'Montserrat-Regular'
  },
  icon:{
    shadowColor:'transparent',
    fontSize:35,
    position:'relative'
  },
  pointNotify:{
    width:10,
    height:10,
    backgroundColor:'#FF0000',
    position:'absolute',
    borderRadius:10 / 2,
    top:8,
    right:10
  }
});
