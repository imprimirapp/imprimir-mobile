import React, { Component } from 'react';

import DashboardLayout from '../DashboardLayout';
import Home from './components/Home/Home';

import styles from '../../../styles/dashboardActivityStyles';



export default class DashboardActivityScreen extends Component {

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <DashboardLayout
        style={styles.container}
        titleHeader={'Dashboard'}
      >
         <Home go={this.props.navigation} />
      </DashboardLayout>
    );
  }
}
