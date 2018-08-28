import { StyleSheet  } from 'react-native';

export default StyleSheet.create({
  chatView:{
    flex:1,
    padding:10
  },
  contentMessage:{
    width:'90%',
    marginTop:10
  },
  contentSend:{
    alignSelf:'flex-end'
  },
  message:{
    paddingVertical:16,
    paddingHorizontal:10,
    borderRadius:5
  },
  textMessage:{
    fontSize:15,
    fontFamily:'Montserrat-Regular'
  },
  messageReceived:{
    backgroundColor:'#80D9EB',
  },
  messageSend:{
    backgroundColor:'#fff'
  },
  hour:{
    alignSelf:'flex-end',
    fontSize:10
  },
  hourSend:{
    alignSelf:'flex-start'
  }

});