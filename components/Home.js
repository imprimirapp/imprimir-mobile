import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Button, Content } from 'native-base';
import Carousel from 'react-native-carousel-view';
import styles from '../styles/homeStyles'
import getCurrenUserService from '../services/getCurrentUserService'
import auth from "../models/connection";

export default class HomeScreen extends Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    let myProps = this.props;
    auth.onAuthStateChanged(function(user) {
      if(user){
        myProps.navigation.push('Dashboard', {
          userParam: user
        })
      }else{
        console.log(user);
      }
    });
  }


  render() {
    return (
        <View style={styles.container}>
            <Image style={styles.imprimirLogo} source={require('../assets/images/imprimir-png-blanco.png')} />
            <Carousel
              width={375}
              height={300}
              delay={5000}
              indicatorAtBottom={false}
              indicatorSize={20}
              indicatorOffset={-100}
              indicatorColor="white"
              inactiveIndicatorColor='#7f8487'
              indicatorSpace={20}
              >
              <View style={styles.contentContainer}>
                <Text style={styles.texts}>Diseña como{"\n"}un experto{"\n"}desde casa</Text>
                <Image style={styles.imageItem} source={require('../assets/images/tarjetas.png')} />
              </View>
              <View style={styles.contentContainer}>
                <Text style={styles.texts}>Imprime en{"\n"}alta calidad{"\n"}con un solo clic</Text>
                <Image style={styles.imageItem} source={require('../assets/images/flyers.png')} />
              </View>
            </Carousel>
            <Content style={styles.buttonSignUpContainer}>
              <Button style={styles.buttonSignUp} onPress={() => this.props.navigation.push('Signup')}>
                <Text style={styles.buttonSignUpText}>Crea una cuenta</Text>
              </Button>
            </Content>
            <Content>
              <Button transparent style={styles.buttonLogin} onPress={() => this.props.navigation.push('Login')}>
                <Text style={styles.buttonLoginText}>¿Ya tienes una cuenta? Entra aquí</Text>
              </Button>
            </Content> 
        </View>
    );
  }
}