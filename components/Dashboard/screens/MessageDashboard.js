import React, { Component } from 'react';

import DashboardLayout from '../DashboardLayout';
import MessageView from './components/Message/MessageView';

export default class MessageDashboard extends Component{

  static navigationOptions = {
    header: null
  };

  render(){
    return(
      <DashboardLayout
        titleHeader={'Mensajes'}
      >
        <MessageView go={this.props.navigation} />
      </DashboardLayout>
    );
  }

}