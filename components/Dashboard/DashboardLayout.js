import React, { Component } from 'react';
import { Animated, View } from 'react-native';
import { Container, Drawer } from 'native-base';

import HeaderDashboard from './Header';
import Menu from './Menu';

export default class DashboardLayout extends Component {


  static navigationOptions = {
    header: null
  };


  state = {
    left:new Animated.Value(-1000),
    openMenu:false
  }

  openMenu = () => {
      this.drawer._root.open()
  }

  closeMenu = () => {
    this.drawer._root.close()

  }


  render(){
    return (
      <Drawer
        ref={(ref) => {this.drawer = ref;}}
        content={<Menu navigator={this.navigator} go={this.props.children.props.go} />}
        onClose={() => this.closeMenu()}
      >
        <Container style={this.props.style}>
          <HeaderDashboard
              onPress={this.state.openMenu ? this.closeMenu : this.openMenu}
              titleHeader={this.props.titleHeader}
            />

            { this.props.children }
        </Container>
      </Drawer>
    )
  }

}



