import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Button, Container, Content, Form, Item, Input, Label } from 'native-base';
import styles from '../styles/loginStyles'


export default class LoginScreen extends Component {

static navigationOptions = {
    header: null
};
  
  render() {
    return (
        <Container style={styles.containerLogin}>
           <Image style={styles.imprimirLogo} source={require('../assets/images/imprimir-png-verde.png')} /> 
           <Content style={styles.loginForm}>
                <Form> 
                    <Item floatingLabel>
                    <Label>Usuario</Label>
                    <Input />
                    </Item>
                    <Item floatingLabel last>
                    <Label>Contraseña</Label>
                    <Input />
                    </Item>
                </Form>
                <View style={styles.buttonLoginContainer}>
                    <Button style={styles.buttonLogin}>
                        <Text style={styles.buttonLoginText}>Entrar</Text>
                    </Button>
                </View>
            </Content>
            <View style={styles.allButtonsTransparentContainer}>
                <Button transparent style={styles.buttonTransparent} onPress={() => this.props.navigation.push('PasswordRecovery')}>
                    <Text style={styles.buttonRecoveryText}>¿Olvidaste tu contraseña? Haz clic aquí</Text>
                </Button>
            </View>
            <View style={styles.allButtonsTransparentContainer}>
                <Button transparent style={styles.buttonTransparent} onPress={() => this.props.navigation.push('Presignup')}>
                    <Text style={styles.buttonSignupText}>¿Aún no tienes una cuenta? Regístrate aquí</Text>
                </Button>
            </View>
        </Container>

    );
  }
}