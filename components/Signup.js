import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Button, Container, Content, Form, Item, Input, Label, Icon } from 'native-base';
import styles from '../styles/signupStyles'


export default class SignupScreen extends Component {

static navigationOptions = {
    header: null
};

  render() {
    return (
        <Container style={styles.containerSignup}>
           <Image style={styles.imprimirLogo} source={require('../assets/images/imprimir-png-verde.png')} />
           <View style={styles.signupForm}>
                <Form style={{width:300}}>
                    <View style={styles.field}>
                        <Icon type="FontAwesome" name="user" style={styles.iconSignup}/>
                        <Input style={styles.input} placeholder="Usuario"/>
                    </View>
                    <View style={styles.field}>
                        <Icon type="FontAwesome" name="envelope" style={styles.iconSignup}/>
                        <Input style={styles.input} placeholder="Correo"/>
                    </View>
                    <View style={styles.field}>
                        <Icon type="FontAwesome" name="lock" style={styles.iconSignup}/>
                        <Input style={styles.input} placeholder="Contraseña" secureTextEntry={true}/>
                    </View>
                    <View style={styles.field}>
                        <Icon type="FontAwesome" name="lock" style={styles.iconSignup}/>
                        <Input style={styles.input} placeholder="Repetir Contraseña" secureTextEntry={true}/>
                    </View>
                </Form>
                <View style={styles.buttonSignupContainer}>
                    <Button style={styles.buttonSignup}>
                        <Text style={styles.buttonSignupText}>Entrar</Text>
                    </Button>
                    <Text>Acepto las condiciones</Text>
                </View>
            </View>
        </Container>

    );
  }
}