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
           <Content style={styles.signupForm}>
                <Form> 
                    <Item>
                        <Icon type="FontAwesome" name="user" style={styles.iconSignup}/>
                        <Input placeholder="Usuario"/>
                    </Item>
                    <Item>
                        <Icon type="FontAwesome" name="envelope" style={styles.iconSignup}/>
                        <Input placeholder="Correo"/>
                    </Item>
                    <Item>
                        <Icon type="FontAwesome" name="lock" style={styles.iconSignup}/>
                        <Input placeholder="Contraseña" secureTextEntry={true}/>
                    </Item>
                    <Item>
                        <Icon type="FontAwesome" name="lock" style={styles.iconSignup}/>
                        <Input placeholder="Repetir Contraseña" secureTextEntry={true}/>
                    </Item>
                </Form>
                <View style={styles.buttonSignupContainer}>
                    <Button style={styles.buttonSignup}>
                        <Text style={styles.buttonSignupText}>Entrar</Text>
                    </Button>
                </View>
            </Content>
        </Container>

    );
  }
}