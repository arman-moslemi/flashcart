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
const Ticket = ({navigation}) => {


   const classes =()=>{
   return(
    <View style={styles.container}>
      <View style={{flexDirection:'row',paddingHorizontal:responsiveWidth(4),marginTop:responsiveHeight(2)}}>
<Icon name="textsms" size={30} color={Colors.yellow} style={{marginTop:responsiveWidth(2)}}/>
<View style={{marginLeft:5}}>
    <Text style={styles.txtTitle}>
عنوان پیام
    </Text>
    <View style={{flexDirection:'row'}}>
    <Icon name="query-builder" size={15} color={Colors.gray}/>

    <Text style={styles.textInput}>
        تاریخ ایجاد تیکت:1400/08/08
    </Text>
    </View>
</View>
      </View>
<View>
<View style={styles.viewTicket}>


<Image source={require("../../assets/images/questionProf.png")} />
<View>
<View style={styles.viewBack}>
<View  style={styles.viewHeaderBack}>
<Text style={{...myFontStyle.mediumRegular,color:Colors.white}}>نام کاربر</Text>
<Text style={{...myFontStyle.mediumRegular,color:Colors.white}}>
        تاریخ ایجاد تیکت:1400/08/08
    </Text>
</View>
<Text style={{...myFontStyle.mediumRegular,color:Colors.text,marginHorizontal:responsiveWidth(3)}}>لورم</Text>
</View>

</View>
</View>


<View style={styles.viewTicket2}>


<Image source={require("../../assets/images/customer-support.png")} />
<View>
<View style={styles.viewBack}>
<View  style={styles.viewHeaderBack2}>
<Text style={{...myFontStyle.mediumRegular,color:Colors.white}}>پشتیبان فنی</Text>
<Text style={{...myFontStyle.mediumRegular,color:Colors.white}}>
        تاریخ ایجاد تیکت:1400/08/08
    </Text>
</View>
<Text style={{...myFontStyle.mediumRegular,color:Colors.text,marginHorizontal:responsiveWidth(3)}}>لورم</Text>
</View>

</View>
</View>

<View style={styles.viewTicket}>


<Image source={require("../../assets/images/questionProf.png")} />
<View>
<View style={styles.viewBack3}>
<View  style={styles.viewHeaderBack}>
<Text style={{...myFontStyle.mediumRegular,color:Colors.white}}>نام کاربر</Text>
<Text style={{...myFontStyle.mediumRegular,color:Colors.white}}>
        تاریخ ایجاد تیکت:1400/08/08
    </Text>
</View>
<View style={{alignItems:'center'}}>
<Input placeholder={"پیام خودرا بنویسید"} inputStyle={{borderColor:Colors.gray,height:responsiveHeight(10),color:Colors.text}} containerStyle={{height:responsiveHeight(10)}}/>

</View>
<View style={styles.button}>
      <Text style={{...myFontStyle.mediumBold,color:Colors.white}}>
        ذخیره
      </Text>
    </View>
</View>

</View>
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
  modal:{
    // alignSelf: "center",
    // marginTop: responsiveHeight(30),
     height: responsiveHeight(25),
    width: responsiveWidth(70),
    // justifyContent: 'center',
    // alignItems: 'flex-start',
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding:  responsiveWidth(4),
  },

    textInput:{

        color:Colors.gray,
        ...myFontStyle.smallRegular,


    },
    viewNext:{
        width:responsiveWidth(30),
        height:responsiveHeight(4),
        alignItems:'center',
        borderRadius:5,
    },
    header:{flexDirection:'row',justifyContent:'space-around',marginTop:responsiveHeight(1)},
    txtTitle: {
        color: Colors.text,
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
      },
      textInputLogin:{
        height:responsiveHeight(5),
        ...myFontStyle.mediumRegular,
        borderWidth:0,
        width:responsiveWidth(50),
        borderBottomColor:"#F1F1F1",
        borderBottomWidth:2,
      alignItems:'flex-end'

        },
        viewTicket:{flexDirection:'row-reverse',alignItems:'flex-end',marginTop:responsiveHeight(2),padding:5},
        viewTicket2:{flexDirection:'row',alignItems:'flex-end',marginTop:responsiveHeight(2),padding:5},
        viewBack:{backgroundColor:"#ECEDEF",height:responsiveHeight(15),width:responsiveWidth(70),borderRadius:5},
        viewBack3:{backgroundColor:"#ECEDEF",height:responsiveHeight(20),width:responsiveWidth(70),borderRadius:5},
        viewHeaderBack:{borderTopLeftRadius:5,borderTopEndRadius:5, flexDirection:'row',backgroundColor:"#09B5DB",
        justifyContent:'space-between'
        ,alignItems:'center',paddingHorizontal:responsiveWidth(3)},
        viewHeaderBack2:{borderTopLeftRadius:5,borderTopEndRadius:5, flexDirection:'row',backgroundColor:"#068CC5"
        ,justifyContent:'space-between',alignItems:'center',paddingHorizontal:responsiveWidth(3)},
        button:{marginTop:responsiveHeight(2),width:responsiveWidth(25)
          ,height:responsiveHeight(3),backgroundColor:Colors.yellow,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'flex-end',
        margin:5

        },
});

  export default Ticket;

//make this component available to the <app></app>
