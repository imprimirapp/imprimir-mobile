import React , { Component } from 'react';
import {
  View,
  Image,
  Text,
  FlatList
} from 'react-native';
import { Icon as IconBase } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../styles/menuStyles';
import { Button, Container } from 'native-base';
import { connect } from 'react-redux';
import { logout } from '../actions/index';


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

class MenuScreen extends Component {
  static navigationOptions = {
      header: null
  };

  constructor(props) {
    super(props);
  }

  
  componentDidMount(){
    console.log('MENU PROPS', this.props);
  }

  componentWillReceiveProps(next_props){
    if(next_props.isLoggedOut == true){
        this.props.navigation.push('Home') 
    }
  }

  render(){
    return (

      <Container >
        <View style={styles.Navbar}>
          <View style={styles.NavbarUserProfile}>
            <Image style={styles.imgUser} source={require('../assets/images/userprofile.jpg')}/>
            <View style={styles.infoUser}>
              <Text style={styles.nameUser}>{this.props.success.displayName}</Text>
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
                    this.props.navigation.navigate(item.link)
                    this.props.closeMenu()
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
              <Icon style={styles.iconOptions} solid name="power-off"  onPress={()=>{this.props.onLogout()}} />
            </Button>
            <Button transparent>
              <Icon style={styles.iconOptions} solid name="cog" />
            </Button>
          </View>

        </View>
      </Container>

      
    )
  }
}

const mapStateToProps = (state) => ({
  isLoggedOut: state.logout.isLoggedOut,
  success: state.login.success
});

const mapDispatchToProps = (dispatch)  => {
  return {
      onLogout: () => {
          dispatch(logout())
      }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);
//export default withNavigation(Menu);