import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles/headerStyles';

const HeaderConversation = props => (
  <View style={styles.header}>
    <View style={styles.imgContent}>
       <Image style={styles.imgUser} source={require('../../../../../assets/images/user_profile.jpg')} />
       <View style={styles.dotActivity}></View>
    </View>
    <View style={styles.contentInfo}>
      <Text style={styles.nameUser}>Maria Jose</Text>
      <Text style={styles.description}>Tarjetas de presetanción - Dulceria, Hela..</Text>
    </View>
  </View>
);


export default HeaderConversation;