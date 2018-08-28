import React, { Component } from 'react';
import {
  Animated,
  Easing,
  Alert
} from 'react-native';
import { Container, Drawer } from 'native-base';
import { withNavigation} from 'react-navigation';

import HeaderDashboard from './Header';
/* import Drawer from 'react-native-drawer'; */
import Menu from './Menu';

import { styles, drawerStyles } from '../../styles/drawerStyles';


class DashboardLayout extends Component {


  static navigationOptions = {
    header: null,
  };



  state = {
    contentToLeft:new Animated.Value(0),
    /* openMenu:false,
    leftMenu:new Animated.Value(-1000) */
  }


  openMenu = () => {
    this.drawer._root.open()

    Animated.timing(
      this.state.contentToLeft,
      {
        toValue:400,
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


  render(){
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

          {/* <Animated.View
            style={{
              left:this.state.leftMenu,
              position:'absolute',
              top:0,
              bottom:0,
              width:'80%'
            }}
          >
            <Menu
              closeMenu={this.closeMenu}
            />
          </Animated.View> */}


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
          </Container>
      </Drawer>
      )
    }

  }





export default withNavigation(DashboardLayout);


