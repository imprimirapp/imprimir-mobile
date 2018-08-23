import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Tabs, Tab, Container } from 'native-base';

import BuzonTab from './tabs/BuzonTab';
import ArchivedTab from './tabs/ArchivedTab';


const green = '#b4c935';
const styles = StyleSheet.create({
  tabs:{
    backgroundColor:green
  },
  tabsTitle:{
    color:'#fff',
    fontFamily:'Montserrat-Regular'
  }
})

class MessageView extends Component {

  static navigationOptions = {
    header: null
  };


  render(){
    return(
      <View style={{flex:1}}>
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
      </View>
    )
  }

};

export default MessageView;