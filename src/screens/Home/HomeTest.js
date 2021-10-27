import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image, AsyncStorage } from 'react-native';
import { myFontStyle } from "../../assets/Constance";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors } from '../../assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import { TopBar } from '../../components/TopBar';
// create a component
 const HomeTest = ({navigation}) => {


return (
  <View style={styles.container}>

{/* <TopBar/> */}

</View>
);
};

const styles = StyleSheet.create({

  container: {flex:3,backgroundColor:"#fff"},

menuTitle:{
  fontFamily:"IRANSansBold",
  color:"#fff",
  fontSize:25,
  marginTop:responsiveHeight(1),
}  });

  export default HomeTest;

//make this component available to the <app></app>
