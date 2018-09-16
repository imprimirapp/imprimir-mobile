import React, { Component } from 'react';
import { View, Image, Text, Animated, Easing, Alert } from 'react-native';
import styles from '../styles/dashboardStyles'
import { Container, Button, Drawer } from 'native-base';
import { connect } from 'react-redux';
import { logout } from '../actions/index';
import { withNavigation} from 'react-navigation';
import HeaderDashboard from './Header';
import Menu from './Menu';
import { dstyles, drawerStyles } from '../styles/drawerStyles';

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

componentWillReceiveProps(next_props){
  if(next_props.isLoggedOut == true){
      this.props.navigation.push('Home') 
  }
}

  
  render() {

    return (
      <Drawer
        ref={(ref) => this.drawer = ref}
        content={<Menu closeMenu={this.closeMenu}/>}
        onClose={this.closeMenu}
        style={drawerStyles}
        openDrawerOffset={0.2}
        tweenDuration={250}
      >
        <Container>
            <HeaderDashboard
                onPress={this.openMenu}
                titleHeader={this.props.titleHeader}
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
            <View style={styles.containerDashboard}>
              <Button style={styles.buttonLogout}  onPress={()=>{this.props.onLogout()}}>
                  <Text style={styles.buttonLogoutText}>Salir</Text>
              </Button> 
            </View>
          </Container>
      </Drawer>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedOut: state.logout.isLoggedOut
});

const mapDispatchToProps = (dispatch)  => {
  return {
      onLogout: () => {
          dispatch(logout())
      }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);

