import React from 'react';
import { Tabs, Tab } from 'native-base';
import GeneralTab from './tabs/generalTab';
import ActivityTab from './tabs/ActivityTab';
import styles from './homeStyle';


const Home = props => (
  <Tabs locked={true}>
    <Tab
      tabStyle={styles.tabs}
      textStyle={styles.tabsTitle}
      activeTabStyle={styles.tabs}
      heading="General">
      <GeneralTab />
    </Tab>

    <Tab
      tabStyle={styles.tabs}
      textStyle={styles.tabsTitle}
      activeTabStyle={styles.tabs}
      heading="Actividad">
      <ActivityTab />
    </Tab>
  </Tabs>

);


export default Home;