import React, { Component } from 'react';
import HomeScreen from './components/Home';
import LoginScreen from './components/Login';
import PasswordRecoveryScreen from './components/PasswordRecovery';
import DashboardScreen from './components/Dashboard';
import SignupScreen from './components/Signup';
import MenuScreen from './components/Menu';
import { StackNavigator } from 'react-navigation';
//REDUX / REDUX SAGA IMPLEMENTATION
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers'
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware()

const middleware = applyMiddleware(
  sagaMiddleware
);

const store = createStore(reducers, middleware);
sagaMiddleware.run(rootSaga);

store.subscribe(() => console.log('current store:', store.getState()));

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    PasswordRecovery:{
      screen: PasswordRecoveryScreen
    },
    Signup:{
      screen: SignupScreen
    },
    Menu: {
      screen: MenuScreen
    },
    Dashboard:{
      screen: DashboardScreen
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