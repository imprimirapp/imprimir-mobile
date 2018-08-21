import { StyleSheet } from 'react-native';

const colorNav = '#2D3336',
      textColor = '#999999';

export default StyleSheet.create({
  Navbar:{
    width:300,
    flex:1,
    backgroundColor:colorNav,
  },
  NavbarUserProfile:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:15
  },
  imgUser:{
    width:80,
    height:80,
    borderRadius:500,
    resizeMode:'contain'
  },
  infoUser:{
    paddingLeft:20
  },
  nameUser:{
    color:'#fff',
    textAlign:'center',
    fontSize:22,
    fontFamily:'Montserrat',
    fontWeight:'700',
  },
  NavbarlevelRank:{
    backgroundColor:'#282A2B',
    marginTop:20,
    display:'flex',
    alignItems:'center'
  },

  contentRank:{
    flexDirection:'row',
    paddingVertical:15
  },
  freelance:{
    color:'#6CA31E',
    fontFamily:'Montserrat',
    textAlign:'center',
    fontSize:22,
    marginTop:10,
    fontWeight:'600'
  },
  rank:{
    flexDirection:'row',
    alignItems:'center'
  },
  rocket:{
    color:'#008EDF',
    fontSize:22,
    marginLeft:7
  },
  master:{
    color:textColor,
    fontSize:20,
    fontWeight:'300'
  },
  menu:{
    marginTop:50
  },
  menuItem:{
    padding:15
  },
  menuItemText:{
    color:textColor,
    marginLeft:12,
    fontSize:16
  },
  menuItemIcon:{
    color:textColor,
    fontSize:18
  },
  separator:{
    borderWidth:0.5
  }

});