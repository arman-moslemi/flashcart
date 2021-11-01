import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image, AsyncStorage } from 'react-native';
import { myFontStyle } from "../../assets/Constance";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors } from '../../assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import {TopBar} from '../../components/TopBar';
import { ScrollView } from 'react-native-gesture-handler';
import Box1 from '../../assets/images/box1';
import Box2 from '../../assets/images/box2';
import Box3 from '../../assets/images/box3';
import Box4 from '../../assets/images/box4';
import Box5 from '../../assets/images/box5';
// create a component
 const LitnearBox = ({navigation}) => {

  const classes =()=>{
return (
  <View style={styles.container}>
        <View style={styles.pageBody}>
        <Text style={styles.pageHeader}>لایتنر</Text>
        <ScrollView>
          <View style={styles.arrowRow}>
            <View style={styles.arrow} >
              <Image source={require('../../assets/images/red.png')} style={styles.redArrow}/>
            </View>
            <View style={styles.arrow} >
              <Image source={require('../../assets/images/orange.png')} style={styles.orangeArrow}/>
            </View>
            <View style={styles.arrow} >
              <Image source={require('../../assets/images/Green.png')} style={styles.greenArrow}/>
            </View>
            <View style={styles.arrow} >
              <Image source={require('../../assets/images/lightGreen.png')} style={styles.lightGreenArrow}/>
            </View>
            </View>
          <View style={{flexDirection:'row',marginTop:-2}}>
            <View style={styles.miniBoxL}>
              <Box1/>
              </View>
              <View style={styles.miniBoxL}>
              <Box2/>
              </View>
              <View style={styles.miniBoxL}>
              <Box3/>
              </View>
              <View style={styles.miniBoxL}>
              <Box4/>
              </View>
              <View style={styles.miniBoxL}>
              <Box5/>
              </View>  
          </View>
        </ScrollView>
        </View>
     


</View>
)}
return (
  <TopBar Classes={classes} />
  
  );
};

const styles = StyleSheet.create({

  container: {flex:3,backgroundColor:'#FAFAFB'},
  pageHeader:{
    ...myFontStyle.textOnImg,
    color:'#0384BC',
   
},pageBody:{
  paddingTop:responsiveHeight(2),
  paddingRight:responsiveWidth(6),
  paddingBottom:responsiveHeight(2),
  paddingLeft:responsiveWidth(6),
},
menuTitle:{
  fontFamily:"IRANSansBold",
  color:"#fff",
  fontSize:25,
  marginTop:responsiveHeight(1),
},miniBoxL:{
  width:responsiveWidth(15),
  backgroundColor:'#fff',
  borderRadius:5,
  shadowColor: '#DEE0E3',
    shadowOpacity: 0.9,
    shadowOffset: { width: 2, height: 0},
    shadowRadius: 700,
    elevation: 10,
    padding:10,
    margin:responsiveWidth(1.5),
    justifyContent:'center',
    alignContent:'center',
    textAlign:'center',
  
},arrowRow:{
  marginTop:responsiveHeight(5)
},arrow:{

}
,redArrow:{
  position:'absolute',
  bottom:0,
  left:responsiveWidth(44),
},orangeArrow:{
  position:'absolute',
  bottom:0,
  left:responsiveWidth(44),
},greenArrow:{
  position:'absolute',
  bottom:0,
  left:responsiveWidth(44),
},lightGreenArrow:{
  position:'absolute',
  bottom:0,
  left:responsiveWidth(44),
}


});

  export default LitnearBox;

//make this component available to the <app></app>
