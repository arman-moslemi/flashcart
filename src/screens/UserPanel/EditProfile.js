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
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);

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
<TouchableOpacity onPress={()=>setModalVisible(true)} style={{  width:responsiveWidth(40),borderBottomColor:"#CBCBCB",borderBottomWidth:1 }}>
<Text style={styles.txtTitleInput}>نام</Text>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>

<Text style={styles.txtInput}>امیرحسین</Text>
<Icon name={"create"} size={20}/>
</View>
{/* <Input isIconLeft={"create"} inputStyle={styles.textInput}  containerStyle={styles.textInputLogin}/> */}
</TouchableOpacity>
<TouchableOpacity onPress={()=>setModalVisible2(true)} style={{flexDirection:'row',justifyContent:'space-around' }}>
<View style={{  width:responsiveWidth(40),borderBottomColor:"#CBCBCB",borderBottomWidth:1 }}>
<Text style={styles.txtTitleInput}> نام خانوادگی</Text>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>

<Text style={styles.txtInput}>مفید</Text>
<Icon name={"create"} size={20}/>
</View>
</View>
</TouchableOpacity>





</View>


<View style={styles.header}>
<TouchableOpacity onPress={()=>setModalVisible3(true)} style={{  width:responsiveWidth(40),borderBottomColor:"#CBCBCB",borderBottomWidth:1 }}>
<Text style={styles.txtTitleInput}>کد ملی</Text>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>

<Text style={styles.txtInput}>0020124569</Text>
<Icon name={"create"} size={20}/>
</View>
{/* <Input isIconLeft={"create"} inputStyle={styles.textInput}  containerStyle={styles.textInputLogin}/> */}
</TouchableOpacity>
<TouchableOpacity onPress={()=>setModalVisible4(true)} style={{flexDirection:'row',justifyContent:'space-around' }}>
<View style={{  width:responsiveWidth(40),borderBottomColor:"#CBCBCB",borderBottomWidth:1 }}>
<Text style={styles.txtTitleInput}> شماره موبایل</Text>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>

<Text style={styles.txtInput}>09398277376</Text>
<Icon name={"create"} size={20}/>
</View>
</View>
</TouchableOpacity>





</View>
<View style={{alignItems:'flex-end',paddingVertical:responsiveWidth(10),paddingHorizontal:responsiveWidth(2)}}>
<LinearGradient   colors={['#FFC444', '#F36F56']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.viewNext}>

<Text style={{...myFontStyle.mediumBold,color:Colors.white}}>
ذخیره اطلاعات</Text>

</LinearGradient>
</View>
</View>

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
style={{alignSelf:'center'}}
        >

<View       style={styles.modal}>
  <View style={{flexDirection:'row'}}>

  <Text style={{...myFontStyle.largBold,color:Colors.text}}>ویرایش نام</Text>

  </View>

<View style={{flexDirection:'row'}}>
<Input   placeholder="نام"        inputStyle={styles.textInputLogin}containerStyle={{alignItems:"flex-end"}} />

</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:responsiveHeight(4)}}>
<TouchableOpacity onPress={()=>setModalVisible(false)}>
<LinearGradient   colors={['#CC1111', '#F43535']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.viewNext}>

<Text style={{...myFontStyle.mediumBold,color:Colors.white}}>
بستن</Text>

</LinearGradient>
</TouchableOpacity>
<LinearGradient   colors={['#3AC3FE', '#0284BB']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.viewNext}>

<Text style={{...myFontStyle.mediumBold,color:Colors.white}}>
ویرایش</Text>

</LinearGradient>
</View>
<View style={styles.button}>
      <Text style={{...myFontStyle.mediumBold,color:Colors.white}}>
        ذخیره
      </Text>
    </View>
             </View>
</Modal>
<Modal
        // animationType="slide"
        // transparent={true}
        visible={modalVisible2}
        // onRequestClose={() => {
        //   setModalVisible(!modalVisible);
        // }}

         backdropColor="black"
        //  hasBackdrop={false}
        onBackdropPress={() => setModalVisible2(false)}
style={{alignSelf:'center'}}
        >

<View       style={styles.modal}>
  <View style={{flexDirection:'row'}}>
  <Text style={{...myFontStyle.largBold,color:Colors.text}}>ویرایش نام خانوادگی</Text>

  </View>

<View style={{flexDirection:'row'}}>
<Input   placeholder="نام خانوادگی"        inputStyle={styles.textInputLogin}containerStyle={{alignItems:"flex-end"}} />

</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:responsiveHeight(4)}}>
<TouchableOpacity onPress={()=>setModalVisible2(false)}>

<LinearGradient   colors={['#CC1111', '#F43535']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.viewNext}>

<Text style={{...myFontStyle.mediumBold,color:Colors.white}}>
بستن</Text>

</LinearGradient>
</TouchableOpacity>
<LinearGradient   colors={['#3AC3FE', '#0284BB']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.viewNext}>

<Text style={{...myFontStyle.mediumBold,color:Colors.white}}>
ویرایش</Text>

</LinearGradient>
</View>
<View style={styles.button}>
      <Text style={{...myFontStyle.mediumBold,color:Colors.white}}>
        ذخیره
      </Text>
    </View>
             </View>
</Modal>
<Modal
        // animationType="slide"
        // transparent={true}
        visible={modalVisible3}
        // onRequestClose={() => {
        //   setModalVisible(!modalVisible);
        // }}

         backdropColor="black"
        //  hasBackdrop={false}
        onBackdropPress={() => setModalVisible3(false)}
style={{alignSelf:'center'}}
        >

<View       style={styles.modal}>
  <View style={{flexDirection:'row'}}>
  <Text style={{...myFontStyle.largBold,color:Colors.text}}>ویرایش کدملی</Text>

  </View>

<View style={{flexDirection:'row'}}>
<Input   placeholder="کدملی"        inputStyle={styles.textInputLogin}containerStyle={{alignItems:"flex-end"}} />

</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:responsiveHeight(4)}}>
<TouchableOpacity onPress={()=>setModalVisible3(false)}>

<LinearGradient   colors={['#CC1111', '#F43535']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.viewNext}>

<Text style={{...myFontStyle.mediumBold,color:Colors.white}}>
بستن</Text>

</LinearGradient>
</TouchableOpacity>
<LinearGradient   colors={['#3AC3FE', '#0284BB']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.viewNext}>

<Text style={{...myFontStyle.mediumBold,color:Colors.white}}>
ویرایش</Text>

</LinearGradient>
</View>
<View style={styles.button}>
      <Text style={{...myFontStyle.mediumBold,color:Colors.white}}>
        ذخیره
      </Text>
    </View>
             </View>
</Modal>
<Modal
        // animationType="slide"
        // transparent={true}
        visible={modalVisible4}
        // onRequestClose={() => {
        //   setModalVisible(!modalVisible);
        // }}

         backdropColor="black"
        //  hasBackdrop={false}
        onBackdropPress={() => setModalVisible4(false)}
style={{alignSelf:'center'}}
        >

<View       style={styles.modal}>
  <View style={{flexDirection:'row'}}>
  <Text style={{...myFontStyle.largBold,color:Colors.text}}>ویرایش شماره موبایل</Text>

  </View>

<View style={{flexDirection:'row'}}>
<Input   placeholder="شماره موبایل"        inputStyle={styles.textInputLogin}containerStyle={{alignItems:"flex-end"}} />

</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:responsiveHeight(4)}}>
<TouchableOpacity onPress={()=>setModalVisible4(false)}>

<LinearGradient   colors={['#CC1111', '#F43535']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.viewNext}>

<Text style={{...myFontStyle.mediumBold,color:Colors.white}}>
بستن</Text>

</LinearGradient>
</TouchableOpacity>
<LinearGradient   colors={['#3AC3FE', '#0284BB']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.viewNext}>

<Text style={{...myFontStyle.mediumBold,color:Colors.white}}>
ویرایش</Text>

</LinearGradient>
</View>
<View style={styles.button}>
      <Text style={{...myFontStyle.mediumBold,color:Colors.white}}>
        ذخیره
      </Text>
    </View>
             </View>
</Modal>
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
});

  export default EditProfile;

//make this component available to the <app></app>
