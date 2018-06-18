import React, { Component } from 'react';
import HomeScreen from './components/Home';
import LoginScreen from './components/Login'
import { StackNavigator } from 'react-navigation';

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Login: {
      screen: LoginScreen,
    },
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