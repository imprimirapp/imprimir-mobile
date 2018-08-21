import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Tabs, Tab } from 'native-base';

import BuzonTab from './tabs/BuzonTab';
import ArchivedTab from './tabs/ArchivedTab';


const green = '#b4c935';
const styles = StyleSheet.create({
  tabs:{
    backgroundColor:green
  },
  tabsTitle:{
    color:'#fff'
  }
})

class MessageView extends Component {

  static navigationOptions = {
    header: null
  };


  render(){
    return(
      <Tabs locked={true}>
        <Tab
          tabStyle={styles.tabs}
          textStyle={styles.tabsTitle}
          activeTabStyle={styles.tabs}
          heading="Buzón">

          <BuzonTab/>
        </Tab>

        <Tab
          tabStyle={styles.tabs}
          textStyle={styles.tabsTitle}
          activeTabStyle={styles.tabs}
          heading="Archivados">
          <ArchivedTab />
        </Tab>
      </Tabs>
    )
  }

};

export default MessageView;