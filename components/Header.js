import React , { Component } from 'react';
import { View } from 'react-native';
import {
  Header,
  Body,
  Right,
  Button,
  Icon,
  Title,
} from 'native-base';
import styles from '../styles/headerStyles';

export default class HeaderDashboard extends Component {
  static navigationOptions = {
      header: null
  };

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <Header style={styles.header}>
        <Body>
          <Title style={styles.titleHeader}>{this.props.titleHeader}</Title>
        </Body>
        <Right>
          <Button
            transparent
            style={styles.hamburguerButton}
            onPress={this.props.onPress}
            >
            <Icon name='menu' style={styles.icon}/>
            <View style={styles.pointNotify}></View>
          </Button>
        </Right>
      </Header>
    )
  }

}
