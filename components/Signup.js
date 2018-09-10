import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Button, Container, Content, Form, Item, Input, Label, Icon } from 'native-base';
import styles from '../styles/signupStyles'
import { connect } from 'react-redux';
import { signup } from '../actions/index';

class SignupScreen extends Component {

static navigationOptions = {
    header: null
};

constructor(props) {
    super(props);
    this.state = {
        username: '', 
        email: '', 
        password: ''
    };
    this.onChange = this.onChange.bind(this);
}

onChange(input, val) {
    this.setState({ [input]: val.nativeEvent.text });
}

componentWillReceiveProps(next_props){
    if(next_props.isSignedUp == true){
        this.props.navigation.push('Dashboard') 
    }
}
  
  render() {
    return (
        <Container style={styles.containerSignup}>
           <Image style={styles.imprimirLogo} source={require('../assets/images/imprimir-png-verde.png')} /> 
           <Content style={styles.signupForm}>
                <Form> 
                    <Item>
                        <Icon type="FontAwesome" name="user" style={styles.iconSignup}/>
                        <Input placeholder="Usuario" value={this.state.username} onChange={this.onChange.bind(this, 'username')}/>
                    </Item>
                    <Item>
                        <Icon type="FontAwesome" name="envelope" style={styles.iconSignup}/>
                        <Input placeholder="Correo" value={this.state.email} onChange={this.onChange.bind(this, 'email')}/>
                    </Item>
                    <Item>
                        <Icon type="FontAwesome" name="lock" style={styles.iconSignup}/>
                        <Input placeholder="Contraseña" secureTextEntry={true} value={this.state.passwprd} onChange={this.onChange.bind(this, 'password')}/>
                    </Item>
                    <Item>
                        <Icon type="FontAwesome" name="lock" style={styles.iconSignup}/>
                        <Input placeholder="Repetir Contraseña" secureTextEntry={true}/>
                    </Item>
                </Form>
                <View style={styles.buttonSignupContainer}>
                    <Button style={styles.buttonSignup} onPress={()=>{this.props.onSubmitSignup({username: this.state.username, email: this.state.email, password: this.state.password})}}>
                        <Text style={styles.buttonSignupText}>Entrar</Text>
                    </Button>
                </View>
            </Content>
        </Container>

    );
  }
}

const mapStateToProps = (state) => ({
    success: state.signup.success,
    error: state.signup.error,
    isSignedUp: state.signup.isSignedUp
});

const mapDispatchToProps = (dispatch)  => {
    return {
        onSubmitSignup: (payload) => {
            dispatch(signup(payload.username, payload.email, payload.password))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);
