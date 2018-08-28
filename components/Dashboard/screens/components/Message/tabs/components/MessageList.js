import React from 'react';
import { Text, FlatList, View } from 'react-native';
import { Container } from 'native-base';

import Message from './Message';
 ;

const messages = [
  {
    img:'https://s3.amazonaws.com/uifaces/faces/twitter/geran7/128.jpg',
    userName:'Orland Kertz',
    message:'Lorem ipsum dolor sit amet const.',
    key:'0'
  },
  {
    img:'https://s3.amazonaws.com/uifaces/faces/twitter/nateschulte/128.jpg',
    userName:'Jabari Schuster',
    message:'Lorem ipsum dolor sit amet const.',
    key:'1'
  },
  {
    img:'https://s3.amazonaws.com/uifaces/faces/twitter/rehatkathuria/128.jpg',
    userName:'Rodger Spencer',
    message:'Lorem ipsum dolor sit amet const.',
    key:'2'
  },
  {
    img:'https://s3.amazonaws.com/uifaces/faces/twitter/craighenneberry/128.jpg',
    userName:'Lonie Klein',
    message:'Lorem ipsam dolor sit amet const.',
    key:'3'
  }
]


const MessageList = props => (
  <Container style={{backgroundColor:'#eee',marginTop:12}}>
    <FlatList
      data={messages}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <Message {...item} />}
      ListEmptyComponent={() => <Text>No tienes ningun Mensaje</Text>}
      ItemSeparatorComponent={() => <View style={{backgroundColor:'#eee',height:10}}></View>}
    />
  </Container>
);

export default MessageList;