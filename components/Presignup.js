import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Container,Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../styles/presignupStyles'

export default class PresignupScreen extends Component {

    static navigationOptions = {
        header: null
    };

  render() {
    return (
      <Container style={styles.containerPresignup}>
          <Image style={styles.imprimirLogo} source={require('../assets/images/imprimir-png-blanco.png')} />

          {/* Botonera */}
          <View style={styles.buttonPresignupContainer}>

              <Button style={styles.buttonPresignup}>
                  <Icon name="facebook-f" style={[styles.buttonPresignupText,styles.button]}/>
                  <Text style={styles.buttonPresignupText}>Regístrate con Facebook</Text>
              </Button>

              <Button style={styles.buttonPresignup}>
                <Icon name="google" style={[styles.buttonPresignupText,styles.button]}/>
                    <Text style={styles.buttonPresignupText}>Regístrate con Google</Text>
              </Button>

              <Button style={styles.buttonPresignup} onPress={() => this.props.navigation.navigate('Signup')}>
                  <Icon name="user" style={[styles.buttonPresignupText,styles.button]}/>
                  <Text style={styles.buttonPresignupText}>Registrarse con Usuario</Text>
              </Button>
          </View>

          <View style={styles.allButtonsTransparentContainer}>
              <Button transparent style={styles.buttonTransparent} onPress={() => this.props.navigation.navigate('Login')}>
                  <Text style={styles.buttonLoginText}>¿Ya tienes cuenta? Ingresa aquí</Text>
              </Button>
          </View>
      </Container>

    );
  }
}