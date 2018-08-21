import React from 'react';
import {
  View,
  Image,
  Text,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from '../../styles/menuStyle';
import { Button } from 'native-base';

const menuItems = [
  {
    title:'Mensajes',
    icon:'comment-alt',
    link:'messageDashboard',
    key:'0'
  },
  {
    title:'Notificaciones',
    icon:'bell',
    link:'notificaciones',
    key:'1'
  },
  {
    title:'Tus Proyectos',
    link:'proyectos',
    icon:'file',
    key:'2'
  },
  {
    title:'Membresía',
    link:'membresia',
    icon:'gem',
    key:'3'
  }
];

const Menu = props => (
  <View style={styles.Navbar}>

    <View style={styles.NavbarUserProfile}>
      <Image style={styles.imgUser} source={require('../../assets/images/user_profile.jpg')}/>
      <View style={styles.infoUser}>
        <Text style={styles.nameUser}>Luis Castellanos</Text>
        <Text style={styles.addressUser}> Medellín, Colombia</Text>
      </View>
    </View>


   <View style={styles.NavbarlevelRank}>
      <View>
        <Text style={styles.freelance}>Freelance</Text>
        <View style={styles.contentRank}>
          <Text style={styles.master}>Master:</Text>
          <View style={styles.rank}>
            <Icon style={styles.rocket} name={'rocket'} solid />
            <Icon style={styles.rocket} name={'rocket'} solid />
            <Icon style={styles.rocket} name={'rocket'} solid />
            <Icon style={styles.rocket} name={'rocket'} solid />
            <Icon style={{color:'#fff',fontSize:22,marginLeft:7}} name={'rocket'} solid />
          </View>
        </View>
      </View>
   </View>

    <View style={styles.menu}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => (
          <Button
            transparent
            onPress={() => props.go.push(item.link)}
            style={styles.menuItem}
            >
          <Icon solid style={styles.menuItemIcon} name={item.icon}/>
            <Text style={styles.menuItemText}>{item.title}</Text>
          </Button>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      />
    </View>

  </View>
);

export default Menu;