import React, { Component } from 'react';
import { Animated, View, Easing } from 'react-native';
import { Container, Drawer } from 'native-base';



import HeaderDashboard from './Header';
import Menu from './Menu';

import { styles, drawerStyles } from '../../styles/drawerStyles';


export default class DashboardLayout extends Component {


  static navigationOptions = {
    header: null
  };



  state = {
    left:new Animated.Value(-1000),
    contentToLeft:new Animated.Value(0)
  }

  openMenu = () => {
    this.drawer._root.open()
  }

  closeMenu = () => {
    this.drawer._root.close()
  }

  handleContentToLeft = () => {

    Animated.timing(
      this.state.contentToLeft,
      {
        toValue:400,
        easing:Easing.in(),
        duration:250
      }
    ).start()
  }

  handleCloseContentToLeft = () => {
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
          ref={(ref) => {this.drawer = ref;}}
          content={<Menu navigator={this.navigator} go={this.props.children.props.go} />}
          onClose={() => this.closeMenu()}
          styles={drawerStyles}
          onOpenStart={this.handleContentToLeft}
          onCloseStart={this.handleCloseContentToLeft}
          tweenDuration={250}
        >
          <Container style={this.props.style}>
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



