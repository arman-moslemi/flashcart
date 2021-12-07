import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image, AsyncStorage } from 'react-native';
import { myFontStyle } from "../../assets/Constance";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors } from '../../assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import {TopBar} from '../../components/TopBar';
import Modal from "react-native-modal";
import DropDownPicker from 'react-native-dropdown-picker';
import {Input} from '../../components/Input';
import { Button } from '../../components/Button';
import { RadioButton } from 'react-native-paper';
// create a component
const Rules = ({navigation}) => {

   const classes =()=>{
   return(
    <View style={styles.container}>
   <ScrollView>
   <View style={{flexDirection:'row',marginTop:responsiveHeight(3),marginLeft:responsiveWidth(5),marginRight:responsiveWidth(5),justifyContent:'space-between'}}>
    <View style={{backgroundColor:'#fff',width:responsiveWidth(90),borderRadius:5,padding:20 ,shadowColor: '#878B92',
  shadowOpacity: 0.1,
  shadowOffset: { width: 2, height: 0},
  shadowRadius: 700,
  elevation: 20,}}>
        <View style={styles.viewHeader}>

    <Text style={{...myFontStyle.textOnImg,color:'#0384BC'}}>قوانین و مقررات</Text>
   </View>
    <Text style={styles.questionText}>
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
ست چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
ست چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
ست چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
   </Text>

    </View>

    </View>
   </ScrollView>
{/* <View style={styles.viewBody}> */}



</View>
   )
   }



return (
<TopBar Classes={classes} navigation={navigation} />

);
};

const styles = StyleSheet.create({

  container: {flex:1,backgroundColor:"#FAFAFB"},

  questionText:{
    ...myFontStyle.normalRegular,

    color:'#000',

  marginLeft:10,
  marginTop:10,
  marginRight:10,
    textAlign:'left',
    lineHeight:responsiveHeight(4),

    paddingBottom:responsiveHeight(5),
  },
  viewHeader:{alignItems:'flex-start',marginTop:responsiveHeight(0),marginLeft:responsiveWidth(5)},


});

  export default Rules;

