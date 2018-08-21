import React from 'react';
import { Text, FlatList, View } from 'react-native';
import { Container } from 'native-base';

import Message from './Message';
 ;

const messages = [
  {
    img:'../../../../../../../assets/images/user_profile.jpg',
    userName:'Maria Jose',
    message:'Lorem ipsum dolor sit amet const.',
    key:'0'
  },
  {
    img:'userImg',
    userName:'Maria Jose',
    message:'Lorem ipsum dolor sit amet const.',
    key:'1'
  },
  {
    img:'userImg',
    userName:'Maria Jose',
    message:'Lorem ipsum dolor sit amet const.',
    key:'2'
  },
  {
    img:'userImg',
    userName:'Maria Jose',
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