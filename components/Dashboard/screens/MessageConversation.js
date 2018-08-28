import React, { Component } from 'react';
import { Text } from 'react-native';

import DashboardLayout from '../DashboardLayout';
import HeaderMessage from './components/MessageConversation/headerMessage';
'#6CA31E'
'#6CA31E'
export default class MessageConversation extends Component{

  static navigationOptions = {
    header: null
  };

  render(){
    return(
      <DashboardLayout
        titleHeader="Mensajes"
      >

      <HeaderMessage />


      </DashboardLayout>
    )
  }

}