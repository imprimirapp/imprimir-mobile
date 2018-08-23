import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Button } from 'native-base';
import styles from '../styles/dashboardStyles'


export default class DashboardScreen extends Component {

static navigationOptions = {
    header: null
};

  render() {
    return (
        <View style={styles.containerDashboard}>
           <Image style={styles.imprimirLogo} source={require('../assets/images/imprimir-png-blanco.png')} />

           <View style={styles.roundedCenter}>
             <Text style={styles.title}>Diseña...</Text>
             <Text style={styles.title}>¡Imprime!</Text>
           </View>

          <View>
            <Button style={styles.button} onPress={() => this.props.navigation.navigate('DashboardActivity')}>
              <Text style={styles.buttonText}>Mi Dashboard</Text>
            </Button>

            <Button transparent style={styles.buttonOut} >
              <Text style={styles.buttonOutText}>Salir</Text>
            </Button>
          </View>

        </View>
    );
  }
}
