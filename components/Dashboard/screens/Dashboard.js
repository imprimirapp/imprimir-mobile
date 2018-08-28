import React, { Component } from 'react';

import DashboardLayout from '../DashboardLayout';
import Home from './components/Home/Home';



export default class DashboardActivityScreen extends Component {

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <DashboardLayout
        titleHeader={'Dashboard'}
      >
         <Home />
      </DashboardLayout>
    );
  }
}
