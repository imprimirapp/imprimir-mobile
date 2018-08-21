import React from 'react';
import { View, Text } from 'react-native';
import { Container } from 'native-base';

import Search from './components/Search';
import MessageList from './components/MessageList';
import History from './components/History';

import styles from '../styles/BuzonTabStyle';



const BuzonTab = props => (
  <View style={{flex:1}}>
    <Container style={styles.container}>
      <Search />
      <MessageList />
    </Container>
    <History />
  </View>
);


export default BuzonTab;