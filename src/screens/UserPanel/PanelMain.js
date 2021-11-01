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
const PanelMain = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);
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
      <Text style={{...myFontStyle.largBold,color:Colors.black}}>امیرحسین مفید</Text>
      <Text style={{...myFontStyle.mediumRegular,color:Colors.gray}}>09398277376</Text>
      <Text style={{...myFontStyle.smallRegular,color:Colors.gray}}>مدت زمان باقی مانده از اشتراک شما:21روز</Text>




    </View>


    <TouchableOpacity

    onPress={() => navigation.navigate('Profile')}

    >


              {/* <Image style={drawerStyles.avatar} source={avatarWoman} /> */}
              <Image style={styles.avatar} source={require("../../assets/images/profi.png")} />
              <TouchableOpacity onPress={()=>navigation.navigate('EditProfile')} style={styles.viewIconEdit}>

              <Icon name="create" color={Colors.white} size={20} style={{margin:5}}/>
              </TouchableOpacity>

    </TouchableOpacity>

    </View>
    <TouchableOpacity onPress={()=>navigation.navigate('UserReport')} style={styles.subViewRead}>

<View style={{flexDirection:'row'}}>
<Image source={require('../../assets/images/motalee.png')} style={{height:26,width:38}}/>
<Text style={{...myFontStyle.largBold,color:Colors.black}}>گزارش مطالعه</Text>
</View>
<Icon name="chevron-left" size={30} color={Colors.yellow}/>
    </TouchableOpacity>
        <View>

<View style={styles.viewRowCart}>

<LinearGradient colors={['#F7BB37', '#F69D0D']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.rowCart}>
<Icon name="favorite" color={Colors.white} size={50} style={{margin:5}}/>
  <Text style={{...myFontStyle.largBold,color:Colors.white}}>کارت های برگزیده</Text>
  </LinearGradient>
  <TouchableOpacity onPress={()=>navigation.navigate('AzmoonList')}>

<LinearGradient  colors={['#16B2F5', '#068DF6']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.rowCart}>

  <Icon name="sticky-note-2" color={Colors.white} size={50} style={{margin:5}}/>
  <Text style={{...myFontStyle.largBold,color:Colors.white}}>آزمون آفلاین</Text>
</LinearGradient>
  </TouchableOpacity>
</View>
<TouchableOpacity onPress={()=>setModalVisible(true)} >


  <LinearGradient colors={['#F7397F', '#E82B63']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.rowCart3}>

<View style={{flexDirection:'row-reverse',alignItems:'center'}}>

<Icon name="note-add" size={50} color={Colors.white}/>
<Text style={{...myFontStyle.largBold,color:Colors.white}}>افزودن کارت جدید</Text>
</View>
<Icon name="chevron-left" size={30} color={Colors.white}/>

    </LinearGradient>
</TouchableOpacity>

<Modal
        // animationType="slide"
        // transparent={true}
        visible={modalVisible}
        // onRequestClose={() => {
        //   setModalVisible(!modalVisible);
        // }}

         backdropColor="black"
        //  hasBackdrop={false}
        onBackdropPress={() => setModalVisible(false)}

        >

<View       style={styles.modal}>
  <View style={{flexDirection:'row-reverse',justifyContent:"space-between"}}>
  <Icon name="close" size={20} color={Colors.yellow}/>
  <Text style={{...myFontStyle.largBold,color:Colors.text}}>افزودن سوال(نکته)جدید</Text>

  </View>
  <View style={{flexDirection:'row-reverse',alignItems:"center",justifyContent:"space-between",margin:5}}>
    <View>
<DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      // width={100}
      ite
      style={{
        borderColor:'#F1F1F1',
        borderWidth:2,
        // margin:5,
        width:responsiveWidth(30),
      
      }}
      placeholder="انتخاب کنید"
      zIndex={1000}
      dropDownContainerStyle={{
        borderColor:'#F1F1F1',
        borderWidth:2,
      borderRadius:5,
     
    }}
    />
    </View>
      <Text style={{...myFontStyle.mediumBold,color:Colors.text}}>دسته بندی اصلی فلش کارت</Text>
  </View>
  <View style={{flexDirection:'row-reverse',alignItems:"center",justifyContent:"space-between",margin:5}}>
    <View>
<DropDownPicker
      open={open2}
      value={value2}
      items={items2}
      setOpen={setOpen2}
      setValue={setValue2}
      setItems={setItems2}
      // width={100}
      style={{
        borderColor:'#F1F1F1',
        borderWidth:2,

        // margin:5,
        width:responsiveWidth(30),
      }}
      placeholder="انتخاب کنید"
      zIndex={500}
      dropDownContainerStyle={{
        borderColor:'#F1F1F1',
        borderWidth:2,
      borderRadius:5}}
    />
    </View>
    <Text style={{...myFontStyle.mediumBold,color:Colors.text}}>دسته بندی فرعی (نام درس)</Text>
  </View>
<View style={{flexDirection:'row-reverse',justifyContent:'space-between'}}>
<Input   placeholder="متن سوال را وارد کنید"         multiline={true}         numberOfLines={4} inputStyle={styles.textInputLogin}containerStyle={{alignItems:"flex-end"}} />
<Text style={{...myFontStyle.mediumBold,color:Colors.text}}>متن سوال:</Text>

</View>
<View style={{flexDirection:'row-reverse',justifyContent:'space-between'}}>
<Input   placeholder="پاسخ را وارد کنید"         multiline={true}         numberOfLines={4} inputStyle={styles.textInputLogin}containerStyle={{alignItems:"flex-end"}} />
<Text style={{...myFontStyle.mediumBold,color:Colors.text}}>پاسخ:</Text>

</View>
<View style={styles.button}>
      <Text style={{...myFontStyle.mediumBold,color:Colors.white}}>
        ذخیره
      </Text>
    </View>
             </View>
</Modal>
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
  elevation:5,
  shadowOpacity:1,
  shadowRadius:10,
  shadowOffset:5,
  borderRadius:5,
  height:responsiveHeight(12)
  ,alignItems:'flex-end',
  flexDirection:'row-reverse',
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
  height:responsiveHeight(10)
  ,alignItems:'center',
  flexDirection:'row',
  justifyContent:'space-between',
  padding:responsiveWidth(5),
  paddingBottom:responsiveHeight(2)},
  viewProfText:{marginRight:5,marginTop:responsiveHeight(1),alignItems:'flex-start'},
viewIconEdit:{position:"absolute",bottom:0,right:20,backgroundColor:Colors.yellow,borderRadius:50},
textInputLogin:{
  height:responsiveHeight(15),
  ...myFontStyle.mediumRegular,
  borderColor:"#F1F1F1",
  borderWidth:2,
alignItems:'flex-end'

  },
});

  export default PanelMain;

//make this component available to the <app></app>
