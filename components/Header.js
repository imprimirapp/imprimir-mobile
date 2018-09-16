import React from 'react';
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


const HeaderDashboard = props => (
  <Header style={styles.header}>
    <Body>
      <Title style={styles.titleHeader}>{props.titleHeader}</Title>
    </Body>
    <Right>
      <Button
        transparent
        style={styles.hamburguerButton}
        onPress={props.onPress}
        >
        <Icon name='menu' style={styles.icon}/>
        <View style={styles.pointNotify}></View>
      </Button>
    </Right>
  </Header>
);


export default HeaderDashboard;