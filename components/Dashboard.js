import React, { Component } from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import styles from '../styles/dashboardStyles'
import { Container, Button, Drawer } from 'native-base';
import { connect } from 'react-redux';
import HeaderDashboard from './Header';
import MenuScreen from './Menu';
import { drawerStyles } from '../styles/drawerStyles';
import firebase from 'firebase';
import auth from '../models/connection'

class DashboardScreen extends Component {

static navigationOptions = {
    header: null
};

constructor(props) {
  super(props);
}

state = {
  contentToLeft:new Animated.Value(0),
}


openMenu = () => {
  this.drawer._root.open()

  Animated.timing(
    this.state.contentToLeft,
    {
      toValue:800,
      easing:Easing.in(),
      duration:250
    }
  ).start();

}

closeMenu = () => {

  this.drawer._root.close();

  Animated.timing(
    this.state.contentToLeft,
    {
      toValue:0,
      easing:Easing.in(),
      duration:250
    }
  ).start()
}

componentDidMount(){
  auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => { 
    console.log('Persistido')           
  })

  console.log('DASHBOARD PROPS:', this.props)
}


componentWillReceiveProps(next_props){
  if(next_props.isLoggedOut == true){
      this.props.navigation.push('Home') 
  }
}

  
  render() {

    return (
      <Drawer
        ref={(ref) => this.drawer = ref}
        content={<MenuScreen {...this.props} closeMenu={this.closeMenu}/>}
        onClose={this.closeMenu}
        style={drawerStyles}
        openDrawerOffset={0.2}
        tweenDuration={250}
      >
        <Container>
            <HeaderDashboard
                onPress={this.openMenu}
                titleHeader={this.titleHeader}
              />

            <Animated.View
              style={{
                flex:1,
                position:'relative',
                left:this.state.contentToLeft
              }}
            >
              {this.props.children}
            </Animated.View>
          </Container>
      </Drawer>
    );
  }
}
export default connect(null, null)(DashboardScreen);

