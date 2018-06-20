import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Container, Content, Form, Item, Input, Icon } from 'native-base';
import styles from '../styles/passwordrecoveryStyles'
import Button from 'react-native-button';


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
                        <Button title="Enviar" 
                            style={styles.buttonPwTextEnabled}
                            styleDisabled={styles.buttonPwTextDisabled}
                            disabled={this.state.disabled}
                            containerStyle={styles.buttonStyleEnabled}
                            disabledContainerStyle={styles.buttonStyleDisabled}  
                            onPress={() => this.props.navigation.push('Login')}>
                            Enviar
                        </Button>
                    </View>
                    </Form>
                </Content>
            </Container>
        );
    }
}