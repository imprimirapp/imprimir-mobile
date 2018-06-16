import React, { Component } from 'react';
import { View } from 'native-base';
import styles from './styles/homeStyles'
import Home from './Home';

export default class App extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Home />
      </View>
    )
  }
}