import React, { Component } from 'react';
import HomeScreen from './components/Home';
import LoginScreen from './components/Login';
import PresignupScreen from './components/Presignup';
import PasswordRecoveryScreen from './components/PasswordRecovery';
import SignupScreen from './components/Signup';
import { StackNavigator } from 'react-navigation';

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    Presignup:{
      screen: PresignupScreen
    },
    PasswordRecovery:{
      screen: PasswordRecoveryScreen
    },
    Signup:{
      screen: SignupScreen
    }
  },
  {
    initialRouteName: 'Home',
  }
);


export default class App extends Component {

  render(){
    return <RootStack />;
  }
}