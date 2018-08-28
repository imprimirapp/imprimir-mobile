import React, { Component } from 'react';
import { View } from 'react-native';

import DashboardLayout from '../DashboardLayout';
import HeaderChat from './components/chat/HeaderChat';
import ChatView from './components/chat/ChatView';
import FormChat from './components/chat/FormChat';

export default class Chat extends Component{

  static navigationOptions = {
    header: null
  };

  render(){
    return(
      <DashboardLayout
        titleHeader="Mensajes"
      >

        <View style={{flex:1,position:'relative'}}>
          <HeaderChat />

          <ChatView/>

           <FormChat />
        </View>

      </DashboardLayout>
    )
  }

}