import React, { useState,useEffect,useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image, AsyncStorage,Alert } from 'react-native';
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
import axios from 'axios';
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";
import DrawerContent from '../../components/drewerContent/DrawerContent';
import Drawer from 'react-native-drawer'
// create a component
const Ticket = ({navigation,route}) => {
  const {id,title,date} = route?.params ?? {};
  const [data,setData] = useState([]);
  const [text,setText] = useState('');
  const drawers = useRef(null);

  useEffect(() => {

    mutLogin();


  }, []);

  const  mutLogin=()=> {

    axios.post(apiUrl + 'CustomerSubSupport',{SupportID:id})
    .then(function (response) {
      const message = response.data.Data;
      console.log(55);
      console.log(message);
      const result = response.data.result;
      console.log(result);

      if(result == "true"){
        setData(response.data.Data)

        // navigation.navigate("ChangePass",{mobile:user,verify:response.data.Data})
                        }else{

      }
    })
    .catch(function (error) {
      console.log(error);
    });


    };
  const  newTicket=()=> {
console.log(id)
console.log(text)
    axios.post(apiUrl + 'InsertSubSupport',{SupportID:id,Text:text})
    .then(function (response) {
      const message = response.data.Data;
      console.log(55);
      console.log(message);
      const result = response.data.result;
      console.log(result);

      if(result == "true"){
        // setData(response.data.Data)
        Alert.alert("","با موفقیت اضافه شد")

         navigation.navigate("TicketsList")
                        }else{

      }
    })
    .catch(function (error) {
      console.log(error);
    });


    };





return (
  <Drawer
  // type="static"
  type="overlay"
  acceptDoubleTap ={true}
      ref={drawers}
      content={<DrawerContent navigation={navigation}/>}
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
<View style={{paddingLeft:20,flex:1,flexDirection:'row'}} >
 <TouchableOpacity onPress={()=>drawers.current.open()}>
 <Icon name={"notes"}  size={responsiveHeight(6)} color={"#fff"} style={{transform: [{rotateY: '180deg'}]}}/>

 </TouchableOpacity>
  <Text style={styles.menuTitle}>نوآوران دانش(ماهان)</Text>
 </View>
<View style={{flex :0.5}}>
  <TouchableOpacity onPress={()=>navigation.goBack()}style={{}}>
    <Icon name={"chevron-left"} color={"#fff"} size={30} style={{marginTop:responsiveHeight(1)}}/>
  </TouchableOpacity>
  </View>

</View>

</View>


<View style={styles.container}>
      <View style={{flexDirection:'row',paddingHorizontal:responsiveWidth(4),marginTop:responsiveHeight(2)}}>
<Icon name="textsms" size={30} color={Colors.yellow} style={{marginTop:responsiveWidth(2)}}/>
<View style={{marginLeft:5}}>
    <Text style={styles.txtTitle}>
{title}    </Text>
    <View style={{flexDirection:'row'}}>
    <Icon name="query-builder" size={15} color={Colors.gray}/>

    <Text style={styles.textInput}>
        تاریخ ایجاد تیکت:{date}
    </Text>
    </View>
</View>
      </View>
<ScrollView style={{marginBottom:10}}>
{
  data.map((item)=>(
    item.isAdmin?
<View style={styles.viewTicket2}>


<Image source={require("../../assets/images/customer-support.png")} />
<View>
<View style={styles.viewBack}>
<View  style={styles.viewHeaderBack2}>
<Text style={{...myFontStyle.mediumRegular,color:Colors.white}}>پشتیبان فنی</Text>
<Text style={{...myFontStyle.mediumRegular,color:Colors.white}}>
        تاریخ ایجاد تیکت:{item.Date}
    </Text>
</View>
<ScrollView>

<Text style={{...myFontStyle.mediumRegular,color:Colors.text,marginHorizontal:responsiveWidth(3)}}>{item.Text}</Text>
</ScrollView>
</View>

</View>
</View>
    :

<View style={styles.viewTicket}>


<Image source={require("../../assets/images/questionProf.png")} />
<View>
<View style={styles.viewBack}>
<View  style={styles.viewHeaderBack}>
<Text style={{...myFontStyle.mediumRegular,color:Colors.white}}> کاربر</Text>
<Text style={{...myFontStyle.mediumRegular,color:Colors.white}}>
        تاریخ ایجاد تیکت:{item.Date}
    </Text>
</View>
<ScrollView>

<Text style={{...myFontStyle.mediumRegular,color:Colors.text,marginHorizontal:responsiveWidth(3)}}>{item.Text}</Text>

</ScrollView>
</View>

</View>
</View>

))
  }


<View style={styles.viewTicket}>


<Image source={require("../../assets/images/questionProf.png")} />
<View>
<View style={styles.viewBack3}>
<View  style={styles.viewHeaderBack}>
<Text style={{...myFontStyle.mediumRegular,color:Colors.white}}> کاربر</Text>
{/* <Text style={{...myFontStyle.mediumRegular,color:Colors.white}}>
        تاریخ ایجاد تیکت:1400/08/08
    </Text> */}
</View>
<View style={{alignItems:'center'}}>
<Input placeholder={"پیام خودرا بنویسید"} onChangeText={(ss)=>setText(ss)} inputStyle={{borderColor:Colors.gray,height:responsiveHeight(10),color:Colors.text}} containerStyle={{height:responsiveHeight(10)}}/>

</View>
<TouchableOpacity onPress={()=>newTicket()} style={styles.button}>
      <Text style={{...myFontStyle.mediumBold,color:Colors.white}}>
        ذخیره
      </Text>
    </TouchableOpacity>
</View>

</View>
</View>



</ScrollView>


    </View>



</Drawer>
);
};

const styles = StyleSheet.create({

  container: {flex:1,backgroundColor:"#FAFAFB"},
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
      top:responsiveHeight(3),
      paddingRight:responsiveWidth(5),
      paddingLeft:responsiveWidth(5),
    },
    drawerStyles: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3,zIndex:5},  modal:{
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
        ...myFontStyle.mediumRegular,


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
