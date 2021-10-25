import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image, AsyncStorage } from 'react-native';
import { myFontStyle } from "../../assets/Constance";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors } from '../../assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import {TopBar} from '../../components/TopBar';

// create a component
const PanelMain = ({navigation}) => {
   const classes =()=>{
   return(
    <View style={styles.container}>

    <View style={styles.viewBody}>
    <View style={styles.subViewBody}>
    <View style={{marginRight:responsiveWidth(5)}}>
      <Text style={styles.txtEdit}>
        تمدید اشتراک
      </Text>
    </View>


    <View style={styles.viewProfText}>
      <Text style={{...myFontStyle.largBold}}>امیرحسین مفید</Text>
      <Text style={{...myFontStyle.mediumRegular,color:Colors.gray}}>09398277376</Text>
      <Text style={{...myFontStyle.smallRegular,color:Colors.gray}}>مدت زمان باقی مانده از اشتراک شما:21روز</Text>




    </View>


    <TouchableOpacity

    onPress={() => navigation.navigate('Profile')}

    >


              {/* <Image style={drawerStyles.avatar} source={avatarWoman} /> */}
              <Image style={styles.avatar} source={require("../../assets/images/profi.png")} />
              <TouchableOpacity style={styles.viewIconEdit}>

              <Icon name="create" color={Colors.white} size={20} style={{margin:5}}/>
              </TouchableOpacity>

    </TouchableOpacity>

    </View>
    <View style={{backgroundColor:"#fff"}}>

    </View>
          </View>


    </View>
   )
   }



return (
<TopBar Classes={classes} />

);
};

const styles = StyleSheet.create({

  container: {flex:1,backgroundColor:"#FAFAFB"},
  avatar: {
    width: responsiveWidth(18),
    height: responsiveHeight(10),
    resizeMode: "contain",
    // margin:5,
    marginRight:responsiveWidth(5)

  },
  txtEdit: {
    color: Colors.white,
    ...myFontStyle.mediumRegular,
    borderWidth:1,
    borderColor:Colors.white,
    borderRadius:50,
    paddingVertical:3,
    paddingHorizontal:9,
    backgroundColor:Colors.yellow

  },
  viewBody:{backgroundColor:"#FAFAFB",flex:12},
  subViewBody:{backgroundColor:"#fff",height:responsiveHeight(12),alignItems:'flex-end',flexDirection:'row',justifyContent:'flex-end',paddingBottom:responsiveHeight(2)},
  viewProfText:{marginRight:5,marginTop:responsiveHeight(1),alignItems:'flex-end'},
viewIconEdit:{position:"absolute",bottom:0,right:20,backgroundColor:Colors.yellow,borderRadius:50}
});

  export default PanelMain;

//make this component available to the <app></app>
