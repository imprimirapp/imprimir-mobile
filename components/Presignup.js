import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Button, Icon } from 'native-base';
import styles from '../styles/presignupStyles'

export default class PresignupScreen extends Component {

    static navigationOptions = {
        header: null
    };
      
      render() {
        return (
            <View style={styles.containerPresignup}>
               <Image style={styles.imprimirLogo} source={require('../assets/images/imprimir-png-blanco.png')} /> 
                <View style={styles.buttonPresignupContainer}>
                    <Button style={styles.buttonPresignup}>
                        <Icon type="FontAwesome" name="facebook-square" style={styles.buttonPresignupText}/>
                        <Text style={styles.buttonPresignupText}>Regístrate con Facebook</Text>
                    </Button>
                </View>
                <View style={styles.buttonPresignupContainer}>
                    <Button style={styles.buttonPresignup}>
                    <Icon type="FontAwesome" name="google" style={styles.buttonPresignupText}/>
                        <Text style={styles.buttonPresignupText}>Regístrate con Google</Text>
                    </Button>
                </View>
                <View style={styles.buttonPresignupContainer}>
                    <Button style={styles.buttonPresignup} onPress={() => this.props.navigation.push('Signup')}>
                        <Text style={styles.buttonPresignupText}>Regístrate</Text>
                    </Button>
                </View>
                <View style={styles.allButtonsTransparentContainer}>
                    <Button transparent style={styles.buttonTransparent} onPress={() => this.props.navigation.push('Login')}>
                        <Text style={styles.buttonLoginText}>¿Ya tienes cuenta? Ingresa aquí</Text>
                    </Button>
                </View>
            </View>
    
        );
      }
    }