import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../styles/dashboardStyles'

export default class DashboardScreen extends Component {

static navigationOptions = {
    header: null
};
  
  render() {

    return (
        <View style={styles.containerDashboard}>
           <Image style={styles.imprimirLogo} source={require('../assets/images/imprimir-png-verde.png')} /> 
        </View>
    );
  }
}