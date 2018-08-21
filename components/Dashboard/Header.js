import React from 'react';
import {
  Header,
  Body,
  Right,
  Button,
  Icon,
  Title,
} from 'native-base';
import styles from '../../styles/dashboardActivityStyles';


const HeaderDashboard = props => (
  <Header style={styles.header}>
    <Body>
      <Title>{props.titleHeader}</Title>
    </Body>
    <Right>
      <Button
        transparent
        style={styles.hamburguerButton}
        onPress={props.onPress}
        >
        <Icon name='menu' style={styles.icon}/>
      </Button>
    </Right>
  </Header>
);


export default HeaderDashboard;