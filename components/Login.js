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
}

onChange(input, val) {
    this.setState({ [input]: val.nativeEvent.text });
}

//When change the props
componentWillReceiveProps(next_props){
    console.log(next_props);
    if(next_props.isLogged == true){
        this.props.navigation.push('Dashboard') 
    }
}


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
                    <Button style={styles.buttonLogin} onPress={()=>{this.props.onSubmit({email: this.state.email, password: this.state.password})}}>
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
    success: state.login.success,
    error: state.login.error,
    isLogged: state.login.isLogged
});

const mapDispatchToProps = (dispatch)  => {
    return {
        onSubmit: (payload) => {
            dispatch(login(payload.email, payload.password))
        }
    }
};
  
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
