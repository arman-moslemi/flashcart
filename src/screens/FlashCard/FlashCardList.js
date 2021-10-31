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
const FlashCardList = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

   const classes =()=>{
   return(
    <View style={styles.container}>
    <View style={{alignItems:'flex-start',marginTop:responsiveHeight(3),marginLeft:responsiveWidth(5)}}>
<Text style={{...myFontStyle.largBold,color:Colors.appColor}}>لیست کارت ها</Text>

    </View>
{/* <View style={styles.viewBody}> */}

<TouchableOpacity onPress={()=>navigation.navigate("FlashCardView")} style={styles.subViewRead}>
<View style={{flexDirection:'row',alignItems:'center'}}>
<Text style={{...myFontStyle.mediumRegular,color:Colors.gray,marginLeft:2}}>مشاهده کارت</Text>

<Icon name="remove-red-eye" size={30} color={Colors.yellow}/>
</View>

<View style={{flexDirection:'row-reverse',alignItems:"center",justifyContent:'flex-end'}}>
<Text style={{...myFontStyle.normalRegular,color:Colors.black,width:responsiveWidth(50)}}>متن سوال</Text>

<Image source={require('../../assets/images/RectangleYellow.png')} style={{ height:responsiveHeight(8),width:5,marginRight:responsiveWidth(3),marginBottom:responsiveHeight(0.5),marginLeft:responsiveWidth(-5),}}/>
</View>
{/* </View> */}



  </TouchableOpacity>


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
  button:{marginTop:responsiveHeight(2),width:responsiveWidth(30)
    ,height:responsiveHeight(4),backgroundColor:Colors.yellow,
  borderRadius:5,
  alignItems:'center',
  justifyContent:'center'

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
  modal:{
    // alignSelf: "center",
    // marginTop: responsiveHeight(30),
     height: responsiveHeight(63),
    width: responsiveWidth(90),
    // justifyContent: 'center',
    // alignItems: 'flex-start',
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding:  responsiveWidth(4),
  },
  viewRowCart:{flexDirection:'row',justifyContent:'space-between',paddingLeft:responsiveWidth(3),paddingRight:responsiveWidth(3) },
  viewRowCart2:{flexDirection:'row',justifyContent:'space-between',paddingLeft:responsiveWidth(3),paddingRight:responsiveWidth(3) },
  rowCart:{height:responsiveHeight(15),width:responsiveWidth(45),borderRadius:5,alignItems:"center",justifyContent:'center'},
  rowCart2:{height:responsiveHeight(11),borderRadius:5,alignItems:"center",justifyContent:'center',margin:responsiveWidth(3)},
  rowCart3:{height:responsiveHeight(11),borderRadius:5,alignItems:"center",
  justifyContent:'space-between',margin:responsiveWidth(3),flexDirection:'row'},
  viewBody:{backgroundColor:"#FAFAFB",flex:12},
  subViewBody:{backgroundColor:"#fff",
  height:responsiveHeight(12)
  ,alignItems:'flex-end',
  flexDirection:'row',
  justifyContent:'flex-end',
  paddingBottom:responsiveHeight(2)},
  subViewRead:{
    backgroundColor:"#fff",
    elevation:5,
    shadowOpacity:1,
    shadowRadius:10,
    shadowOffset:5,
    borderRadius:5,
    margin:responsiveHeight(2),
  height:responsiveHeight(8),
  marginTop:responsiveHeight(3)
  ,alignItems:'center',
  flexDirection:'row-reverse',
  justifyContent:'space-between',
  padding:responsiveWidth(5),
  paddingBottom:responsiveHeight(2)},
  viewProfText:{marginRight:5,marginTop:responsiveHeight(1),alignItems:'flex-end'},
viewIconEdit:{position:"absolute",bottom:0,right:20,backgroundColor:Colors.yellow,borderRadius:50},
textInputLogin:{
  height:responsiveHeight(15),
  ...myFontStyle.mediumRegular,
  borderColor:"#F1F1F1",
  borderWidth:2,
alignItems:'flex-end'

  },
});

  export default FlashCardList;

