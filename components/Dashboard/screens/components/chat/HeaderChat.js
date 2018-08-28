import React from 'react';
import { View, Image, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles/headerStyles';

const HeaderChat = props => {
  const { img, userName} = props.navigation.state.params

  return(
    <View style={styles.header}>
      <View style={styles.imgContent}>
        <Image style={styles.imgUser} source={{uri:img}} />
        <View style={styles.dotActivity}></View>
      </View>
      <View style={styles.contentInfo}>
        <Text style={styles.nameUser}>{userName}</Text>
        <Text style={styles.description}>Tarjetas de presetanción - Dulceria, Hela..</Text>
      </View>
    </View>
  )
};


export default withNavigation(HeaderChat);