import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image, AsyncStorage,ScrollView } from 'react-native';
import { myFontStyle } from "../../assets/Constance";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors } from '../../assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import {TopBar} from '../../components/TopBar';
import Modal from "react-native-modal";
import axios from 'axios';
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";
import { WebView } from 'react-native-webview';
import {Button} from '../../components/Button';

// create a component
const Dargah = ({navigation,route}) => {
    const {id} = route?.params ?? {};
    const [cus,setCus]=useState(0);

  useEffect(() => {

    getUs();

  }, []);

  const  getUs=async()=> {
    const state = await AsyncStorage.getItem("@user");

   setCus(state)


    };


   const classes =()=>{
   return(
       <View style = {{flex:1}}>
    <WebView
    source = {{ uri:
    apiUrl+'Dargah/'+cus+"T"+id+'' ,method:'GET'}}
    style={{height:50}}
    />

      <Button
          //  onPress={()=>     navigation.reset({
          //             index: 0,
          //             routes: [{ name: 'StackNavigatorsAzmoon' }]
          //        })}

                 onPress={()=>     navigation.navigate("PanelMain")}
            //   onPress={()=>mutLogin()}


             // onPress={()=>alert(number)}
             buttonContainer={{marginVertical:responsiveHeight(5)}}

             text={"بازگشت"}


             />
 </View>
   )
   }



return (
<TopBar Classes={classes} navigation={navigation} />

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
    borderLeftWidth:5,
    borderLeftColor:'#FFC444',
    backgroundColor:"#fff",
    elevation:5,
    shadowOpacity:1,
    shadowRadius:10,
    shadowOffset: { width: 2, height: 0},
    borderRadius:5,
    marginRight:responsiveHeight(2),
    marginLeft:responsiveHeight(2),
    marginBottom:0,
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
  sortBtn:{
      backgroundColor:'#FFC444',
      width:responsiveScreenWidth(30),
      height:responsiveHeight(5),
      borderRadius:5,
      elevation:5,
    shadowOpacity:1,
    shadowRadius:10,
    shadowOffset: { width: 2, height: 0},
    justifyContent:'center',
    flexDirection:'row',
  },sortModal:{
    width:responsiveWidth(80),
    marginTop:responsiveHeight(-20),
    backgroundColor:'#fff',
    borderRadius:5,
    shadowColor: '#fff',
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 0},
    shadowRadius: 700,
    elevation: 20,
    alignContent:'center',
    paddingTop:responsiveHeight(3),
    paddingBottom:responsiveHeight(3),
    paddingRight:responsiveWidth(0),
    paddingLeft:responsiveWidth(0),
  }, viewRadio: {flexDirection:'row',alignItems:'center',marginTop:responsiveHeight(1)}
  ,txtRadio: {
    color: Colors.text,
    ...myFontStyle.mediumBold,
    // lineHeight:responsiveHeight(3)

  },notShowBtn:{
    textAlign:'center',
    width:responsiveWidth(25),
   },
   modalBtnText:{
     ...myFontStyle.btnBold,
     color:'#fff',
     textAlign:'center',

   }
});

  export default Dargah;

