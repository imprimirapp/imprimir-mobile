import React, { Component } from 'react';
import { View, Image, Text, Button } from 'react-native';
import { Container, Content, Form, Item, Input, Icon } from 'native-base';
import styles from '../styles/passwordrecoveryStyles'



export default class PasswordRecoveryScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: '',
            disabled: true
        };
        this.handleInputChange = this.handleInputChange.bind(this); 
    };

    handleInputChange(e){
        this.setState({value: e.nativeEvent.text});
        console.log(e.nativeEvent.text);
        if(e.nativeEvent.text != ''){
            this.setState({disabled: false})
        }
    }

    static navigationOptions = {
        header: null
    };
      
    render() {
        return (
            <Container style={styles.containerPw}>
                <Image style={styles.imprimirLogo} source={require('../assets/images/imprimir-png-verde.png')} /> 
                <Text style={styles.texts}>Ingrese su email{"\n"}y se le enviará un correo{"\n"}con las instrucciones{"\n"}para recuperar su contraseña</Text>
                <Content style={styles.pwForm}>
                    <Form> 
                        <Item >
                        <Icon type="FontAwesome" name="envelope" style={styles.iconPw}/>
                        <Input value={this.state.value} placeholder="Email" onChange={this.handleInputChange} style={styles.input}/>
                        </Item>
                        <View style={styles.buttonPwContainer}>
                        <Button title="Enviar" disabled={this.state.disabled} color='#b4c935' onPress={() => this.props.navigation.push('Login')}>
                            <Text style={styles.buttonPwText}>Enviar</Text>
                        </Button>
                    </View>
                    </Form>
                </Content>
            </Container>
        );
    }
}