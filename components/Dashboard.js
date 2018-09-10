import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../styles/dashboardStyles'
import { Button } from 'native-base';
import { connect } from 'react-redux';
import { logout } from '../actions/index';

class DashboardScreen extends Component {

static navigationOptions = {
    header: null
};

constructor(props) {
  super(props);
}

componentWillReceiveProps(next_props){
  if(next_props.isLoggedOut == true){
      this.props.navigation.push('Home') 
  }
}

  
  render() {

    return (
        <View style={styles.containerDashboard}>
           <Image style={styles.imprimirLogo} source={require('../assets/images/imprimir-png-verde.png')} />
           <Button style={styles.buttonLogout}  onPress={()=>{this.props.onLogout()}}>
              <Text style={styles.buttonLogoutText}>Salir</Text>
          </Button> 
        </View>
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

