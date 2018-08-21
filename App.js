import React, { Component } from 'react';
import HomeScreen from './components/Home';
import LoginScreen from './components/Login';
import PresignupScreen from './components/Presignup';
import PasswordRecoveryScreen from './components/PasswordRecovery';
import OpenDashboardScreen from './components/OpenDashboard';
import DashboardScreen from './components/Dashboard/screens/Dashboard';
import messageDashboard from './components/Dashboard/screens/MessageDashboard';


import SignupScreen from './components/Signup';
import { StackNavigator } from 'react-navigation';
//REDUX / REDUX SAGA IMPLEMENTATION
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers'
//Sagas
import loginSaga from './sagas/loginSaga';

const sagaMiddleware = createSagaMiddleware()

const middleware = applyMiddleware(
  sagaMiddleware
);

const store = createStore(reducers, middleware);
sagaMiddleware.run(loginSaga);


const RootStack = StackNavigator(
  {
    Home: {
      screen: OpenDashboardScreen,
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
    },
    Dashboard:{
      screen: OpenDashboardScreen
    },
    DashboardActivity:{
      screen:DashboardScreen
    },
    messageDashboard:{
      screen:messageDashboard
    }
  },
  {
    initialRouteName: 'Home',
  }
);



export default class App extends Component {

  render(){
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    )
  }
}
