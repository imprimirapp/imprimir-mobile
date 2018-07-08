import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Button, Container, Content, Form, Item, Input, Label } from 'native-base';
import styles from '../styles/loginStyles'
import { connect } from 'react-redux';
import { login } from '../actions/index';

class LoginScreen extends Component {

static navigationOptions = {
    header: null
};
 
constructor(props) {
    super(props);
    //States
    this.state = { 
        email: '', 
        password: ''
    };
    //Functions
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}

onChange(input, val) {
    this.setState({ [input]: val.nativeEvent.text });
}

onSubmit() {
    const { email, password } = this.state;
    const dispatch = this.props.dispatch(login(email, password));
   //this.request();
}

/*request(){
    const success = this.props.dispatch());
    console.log(success.type);
    if(success.type === 'LOGIN_SUCCESS'){
        return this.props.navigation.push('Dashboard');
    } else {
        return this.props.navigation.push('Login');
    }
}*/

render() {

    return (
        <Container style={styles.containerLogin}>
           <Image style={styles.imprimirLogo} source={require('../assets/images/imprimir-png-verde.png')} /> 
           <Content style={styles.loginForm}>
                <Form> 
                    <Item floatingLabel>
                    <Label>Email</Label>
                    <Input value={this.state.email} onChange={this.onChange.bind(this, 'email')}/>
                    </Item>
                    <Item floatingLabel last>
                    <Label>Contraseña</Label>
                    <Input secureTextEntry={true} value={this.state.password} onChange={this.onChange.bind(this, 'password')}/>
                    </Item>
                </Form>
                <View style={styles.buttonLoginContainer}>
                    <Button style={styles.buttonLogin} onPress={this.onSubmit}>
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

const mapStateToProps = (state) => ({
    success: state.success,
    error: state.error
});
  
export default connect(mapStateToProps)(LoginScreen);