import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image, AsyncStorage } from 'react-native';
import { myFontStyle } from "../../assets/Constance";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors } from '../../assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import {TopBar} from '../../components/TopBar';
import axios from 'axios';
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";

// create a component
const AzmoonList = ({navigation}) => {

  const [data,setData] = useState([]);
  const [curdata,setCurData] = useState([]);
  useEffect(() => {

    mutLogin();


  }, []);

  const  mutLogin=async()=> {
    const state = await AsyncStorage.getItem("@user");

    axios.post(apiUrl + 'CustomerExamShow',{CustomerID:2})
    .then(function (response) {
      const message = response.data.Data;
      console.log(55);
      console.log(message);
      const result = response.data.result;
      console.log(result);

      if(result == "true"){
        setData(response.data.PastData)
        setCurData(response.data.CurrentData)

        // navigation.navigate("ChangePass",{mobile:user,verify:response.data.Data})
                        }else{

      }
    })
    .catch(function (error) {
      console.log(error);
    });


    };
   const classes =()=>{
   return(
    <View style={styles.container}>
<Text style={{...myFontStyle.UltraBold,color:Colors.appColor,marginLeft:responsiveWidth(5)}}>لیست آزمون ها</Text>
    {/* <View style={styles.viewBody}> */}

{
  curdata.map((item)=>(


    <TouchableOpacity onPress={()=>navigation.navigate("Question")} style={styles.subViewRead}>

<Icon name="chevron-left" size={30} color={Colors.yellow}/>
<View style={{flexDirection:'row-reverse',justifyContent:"space-between",alignItems:"center"}}>
{/* <Text style={{...myFontStyle.mediumBold,color:Colors.gray}}>نمره کسب شده:15</Text> */}
<Text style={{...myFontStyle.mediumBold,color:Colors.gray,marginHorizontal:10}}>{item.Title}</Text>
<Text style={{...myFontStyle.mediumBold,color:Colors.text}}>{item.Text?.substring(0, 20)}... </Text>
{/* <Image source={require('../../assets/images/RectangleGreen.png')} style={{ height:responsiveHeight(10),width:5,marginLeft:responsiveWidth(-5),marginRight:responsiveWidth(3),marginBottom:responsiveHeight(0.5)}}/> */}
</View>
    {/* </View> */}



          </TouchableOpacity>

  )
  )
}
{
  data.map((item)=>(
          <TouchableOpacity onPress={()=>navigation.navigate("Question")} style={styles.subViewRead}>

<Icon name="chevron-left" size={30} color={Colors.yellow}/>
<View style={{flexDirection:'row-reverse',justifyContent:"space-between",alignItems:"center"}}>
<Text style={{...myFontStyle.mediumBold,color:Colors.gray}}>نمره کسب شده:{item.Score}</Text>
<Text style={{...myFontStyle.mediumBold,color:Colors.gray,marginHorizontal:10}}>{item.Title}</Text>
<Text style={{...myFontStyle.mediumBold,color:Colors.text}}>{item.Text?.substring(0, 20)}...</Text>
{/* <Image source={require('../../assets/images/RectangleRed.png')} style={{ height:responsiveHeight(10),width:5,marginLeft:responsiveWidth(-5),marginRight:responsiveWidth(3),marginBottom:responsiveHeight(0.5)}}/> */}
</View>
    {/* </View> */}



          </TouchableOpacity>
           )
  )
}
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
    elevation:5
    ,borderLeftWidth:5,borderLeftColor:"green",
    shadowOpacity:1,
    shadowRadius:10,
    shadowOffset:5,
    borderRadius:5,
    margin:responsiveHeight(2),
  height:responsiveHeight(10)
  ,alignItems:'center',
  flexDirection:'row-reverse',
  justifyContent:'space-between',
  padding:responsiveWidth(5),
  paddingBottom:responsiveHeight(2)},
  subViewRead2:{
    backgroundColor:"#fff",
    elevation:5
    ,borderLeftWidth:5,borderLeftColor:"red",
    shadowOpacity:1,
    shadowRadius:10,
    shadowOffset:5,
    borderRadius:5,
    margin:responsiveHeight(2),
  height:responsiveHeight(10)
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

  export default AzmoonList;

