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

// create a component
const EditProfile = ({navigation}) => {

   const classes =()=>{
   return(
    <View style={styles.container}>
        <View style={{flexDirection:'row',margin:responsiveHeight(2),alignItems:"center"}}>
        <Icon name={"create"} size={20} color={Colors.appColor}/>
        <Text style={styles.txtTitle}>ویرایش اطلاعات کاربری</Text>

        </View>
        <View style={{backgroundColor:Colors.white,height:responsiveHeight(30),marginTop:responsiveHeight(1),marginHorizontal:responsiveWidth(2),borderRadius:5,shadowColor: '#878B92',
      shadowOpacity: 0.1,
      shadowOffset: { width: 2, height: 0},
      shadowRadius: 700,
      elevation: 20,}}>
<View style={styles.header}>
<View style={{  width:responsiveWidth(40),borderBottomColor:"#CBCBCB",borderBottomWidth:1 }}>
<Text style={styles.txtTitleInput}>نام</Text>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>

<Text style={styles.txtInput}>امیرحسین</Text>
<Icon name={"create"} size={20}/>
</View>
{/* <Input isIconLeft={"create"} inputStyle={styles.textInput}  containerStyle={styles.textInputLogin}/> */}
</View>
<View style={{flexDirection:'row',justifyContent:'space-around' }}>
<View style={{  width:responsiveWidth(40),borderBottomColor:"#CBCBCB",borderBottomWidth:1 }}>
<Text style={styles.txtTitleInput}> نام خانوادگی</Text>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>

<Text style={styles.txtInput}>مفید</Text>
<Icon name={"create"} size={20}/>
</View>
</View>
</View>





</View>


<View style={styles.header}>
<View style={{  width:responsiveWidth(40),borderBottomColor:"#CBCBCB",borderBottomWidth:1 }}>
<Text style={styles.txtTitleInput}>کد ملی</Text>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>

<Text style={styles.txtInput}>0020124569</Text>
<Icon name={"create"} size={20}/>
</View>
{/* <Input isIconLeft={"create"} inputStyle={styles.textInput}  containerStyle={styles.textInputLogin}/> */}
</View>
<View style={{flexDirection:'row',justifyContent:'space-around' }}>
<View style={{  width:responsiveWidth(40),borderBottomColor:"#CBCBCB",borderBottomWidth:1 }}>
<Text style={styles.txtTitleInput}> شماره موبایل</Text>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>

<Text style={styles.txtInput}>09398277376</Text>
<Icon name={"create"} size={20}/>
</View>
</View>
</View>





</View>
<View style={{alignItems:'flex-end',paddingVertical:responsiveWidth(10),paddingHorizontal:responsiveWidth(2)}}>
<LinearGradient   colors={['#FFC444', '#F36F56']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.viewNext}>

<Text style={{...myFontStyle.mediumBold,color:Colors.white}}>
ذخیره اطلاعات</Text>

</LinearGradient>
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
  textInputLogin:{
    // borderBottomColor:"#ffb921",
    // borderBottomWidth:2,
    // width:"100%",
    // fontFamily:"IRANSans",
    ...myFontStyle.largeRegular,
    color:Colors.gray,
    // margin:5,

    width:responsiveWidth(40),
    },
    textInput:{
        borderWidth:0,
        borderBottomWidth:1,
        borderBottomColor:Colors.gray

    },
    viewNext:{
        width:responsiveWidth(30),
        height:responsiveHeight(4),
        alignItems:'center',
        borderRadius:5,
    },
    header:{flexDirection:'row',justifyContent:'space-around',marginTop:responsiveHeight(1)},
    txtTitle: {
        color: Colors.appColor,
        ...myFontStyle.normalBold,
        // lineHeight:responsiveHeight(3)

      },
    txtTitleInput: {
        color: Colors.text,
        ...myFontStyle.normalBold,
        // lineHeight:responsiveHeight(3)

      },
      txtInput:{
        color: Colors.gray,
        ...myFontStyle.mediumRegular,
      }
});

  export default EditProfile;

//make this component available to the <app></app>
