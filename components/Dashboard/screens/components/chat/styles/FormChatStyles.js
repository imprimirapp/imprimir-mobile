import { StyleSheet } from 'react-native';

const textColor = '#999999';

export default StyleSheet.create({
  formChat:{
    position:'absolute',
    width:'100%',
    bottom:0,
    left:0,
    backgroundColor:'#fff',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:80,
    paddingVertical:20
  },
  form:{
    width:'70%',
    height:'100%',
    borderLeftColor:'#e5e5e5',
    borderLeftWidth:1,
    borderRightColor:'#e5e5e5',
    borderRightWidth:1,
    paddingLeft:5,
  },
  fieldChat:{
    flex:1,
    fontFamily:'Montserrat-Regular',
    fontSize:15
  },
  button:{
    width:50,
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  icon:{
    color:textColor,
    fontSize:20
  }
});