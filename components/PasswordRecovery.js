import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Container, Content, Form, Item, Input, Icon } from 'native-base';
import styles from '../styles/passwordrecoveryStyles'
import Button from 'react-native-button';
import { connect } from 'react-redux';
import { passwordRecovery } from '../actions/index';


class PasswordRecoveryScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            disabled: true
        };
        this.handleInputChange = this.handleInputChange.bind(this); 
    };

    handleInputChange(e){
        this.setState({email: e.nativeEvent.text});
        console.log(e.nativeEvent.text);
        if(e.nativeEvent.text != ''){
            this.setState({disabled: false})
        }
    }

    static navigationOptions = {
        header: null
    };

    componentWillReceiveProps(next_props){
        if(next_props.isEmailSent == true){
            this.props.navigation.push('Home') 
        }
    }
      
    render() {
        return (
            <Container style={styles.containerPw}>
                <Image style={styles.imprimirLogo} source={require('../assets/images/imprimir-png-verde.png')} /> 
                <Text style={styles.texts}>Ingrese su email{"\n"}y se le enviará un correo{"\n"}con las instrucciones{"\n"}para recuperar su contraseña</Text>
                <Content style={styles.pwForm}>
                    <Form> 
                        <Item >
                        <Icon type="FontAwesome" name="envelope" style={styles.iconPw}/>
                        <Input value={this.state.email} placeholder="Email" onChange={this.handleInputChange} style={styles.input}/>
                        </Item>
                        <View style={styles.buttonPwContainer}>
                        <Button title="Enviar" 
                            style={styles.buttonPwTextEnabled}
                            styleDisabled={styles.buttonPwTextDisabled}
                            disabled={this.state.disabled}
                            containerStyle={styles.buttonStyleEnabled}
                            disabledContainerStyle={styles.buttonStyleDisabled}  
                            onPress={()=>{this.props.onSubmitPR({email: this.state.email})}}>
                            Enviar
                        </Button>
                    </View>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    isEmailSent: state.passwordRecovery.isEmailSent
});

const mapDispatchToProps = (dispatch)  => {
    return {
        onSubmitPR: (payload) => {
            dispatch(passwordRecovery(payload.email))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PasswordRecoveryScreen);