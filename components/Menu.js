import React from 'react';
import {
  View,
  Image,
  Text,
  FlatList
} from 'react-native';
import { Icon as IconBase } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../styles/menuStyles';
import { Button } from 'native-base';
import { withNavigation } from 'react-navigation';


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
      <Image style={styles.imgUser} source={require('../assets/images/userprofile.jpg')}/>
      <View style={styles.infoUser}>
        <Text style={styles.nameUser}>Ulises Vargas</Text>
        <View style={styles.contentAddress}>
          <IconBase style={styles.iconAddress} name="md-pin" />
          <Text style={styles.addressUser}>Medellín, Colombia </Text>
        </View>
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
            onPress={() =>{
              props.navigation.navigate(item.link)
              props.closeMenu()
            }}
            style={styles.menuItem}
            >
          <Icon solid style={styles.menuItemIcon} name={item.icon}/>
          <Text style={styles.menuItemText}>{item.title}</Text>
          </Button>
        )}

      />
    </View>

    <View style={styles.options}>
      <Button  transparent>
        <Icon style={styles.iconOptions} solid name="power-off" />
      </Button>
      <Button transparent>
        <Icon style={styles.iconOptions} solid name="cog" />
      </Button>
    </View>

  </View>
);

export default withNavigation(Menu);