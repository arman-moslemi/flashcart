import React, {useState,useRef} from 'react';
import {View, TextInput, Text, TouchableOpacity,TouchableWithoutFeedback,I18nManager} from 'react-native';
//import {create} from 'nahira-react-native-style-sheet';
//import Icon from '@spark/assets/FontIcon';
//import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '../assets/Colors';
import LinearGradient from 'react-native-linear-gradient';
import Drawer from 'react-native-drawer'
import DrawerContent from './drewerContent/DrawerContent';
import { myFontStyle } from "../assets/Constance";

export const TopBar = ({Classes}) => {
  const drawers = useRef(null);
  I18nManager.forceRTL(true);
  return (
    <Drawer
    // type="static"
    type="overlay"
    acceptDoubleTap ={true}
        ref={drawers}
        content={<DrawerContent />}
        tapToClose={true}
  openDrawerOffset={0.4} // 20% gap on the right side of drawer
  panCloseMask={0.2}
  closedDrawerOffset={-3}
  styles={styles.drawerStyles}
  tweenHandler={(ratio) => ({
    main: { opacity:(2-ratio)/2 }
  })}
        >
    <View >



    <LinearGradient colors={['#16B2F5', '#007FB5']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{height:55}}>

      </LinearGradient>


<View style={styles.customRow}>
    <View style={{paddingLeft:20}} >
     <TouchableOpacity onPress={()=>drawers.current.open()}>
     <Icon name={"notes"} style={styles.menuIcon} size={50} color={"#fff"} style={{transform: [{rotateY: '180deg'}]}}/>

     </TouchableOpacity>
     </View>
    <View style={{flex : 2,textAlign:"right"}}>
      <Text style={styles.menuTitle}>نوآوران دانش(ماهان)</Text>
      </View>
    <View style={{flex :0.5}}>
      <TouchableOpacity style={{}}>
        <Icon name={"chevron-left"} color={"#fff"} size={30} style={{marginTop:10}}/>
      </TouchableOpacity>
      </View>

</View>

</View>
<Classes/>
</Drawer>
  );
};

const styles =StyleSheet.create({
    container: {flex:3,backgroundColor:"#fff"},

    menuTitle:{
...myFontStyle.largBold,
      color:"#fff",
      marginTop:responsiveHeight(1),
    },

    page: {
    flexDirection: 'column',
  },customRow:{
    flex:1, flexDirection:"row",
    position:"absolute",
    top:responsiveHeight(0),
    paddingRight:responsiveWidth(5),
    paddingLeft:responsiveWidth(5),
  },
  drawerStyles: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3,zIndex:5},


});

