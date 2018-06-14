
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Font
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          IMPRIMIR APP BASE
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b4c935',
  },
  welcome: {
    fontFamily: 'Montserrat',
    fontSize: 24,
    fontWeight: 'normal',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
