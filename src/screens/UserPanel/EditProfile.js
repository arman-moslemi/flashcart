import React, { useState,useEffect,useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image } from 'react-native';
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
import axios from 'axios';
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerContent from '../../components/drewerContent/DrawerContent';
import Drawer from 'react-native-drawer'
// create a component
const EditProfile = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);
  const [name, setName] = useState(false);
  const [family, setFamily] = useState(false);
  const [national, setNational] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [data, setData] = useState(false);
  const drawers = useRef(null);

  useEffect(() => {

    mutLogin();


}, []);
      const  mutLogin=async()=> {
        const state = await AsyncStorage.getItem("@user");

        axios.post(apiUrl+'OneCustomer',{CustomerID:state})
        .then(function (response) {
          const message = response.data.Data;
          const result = response.data.result;
          console.log(result);
          console.log(message);
          // console.log(response.data.DataSlider.Slider1);
          // console.log(response.data.DataSlider.Slider1);
          if(result == "true"){
        setData(response.data.Data)
        setName(response.data.Data[0].Name);
        setFamily(response.data.Data[0].Family);
        setNational(response.data.Data[0].NationalCode);
        setMobile(response.data.Data[0].Mobile);

                            }
                            else{

          }
        })
        .catch(function (error) {
          console.log(error);
        });


        };

        const  Edit=async()=> {
          const state = await AsyncStorage.getItem("@user");

          axios.post(apiUrl+'EditCustomerFull',{CustomerID:state,Mobile:mobile,Name:name,Family:family,NationalCode:national})
          .then(function (response) {
            const message = response.data.Data;
            const result = response.data.result;
            console.log(result);
            console.log(message);
            // console.log(response.data.DataSlider.Slider1);
            // console.log(response.data.DataSlider.Slider1);
            if(result == "true"){
        alert("باموفقیت ثبت شد")

                              }
                              else{

            }
          })
          .catch(function (error) {
            console.log(error);
          });


          };
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

<Text style={styles.txtInput}>{name}</Text>
<Icon name={"create"} size={20}/>
</View>
{/* <Input isIconLeft={"create"} inputStyle={styles.textInput}  containerStyle={styles.textInputLogin}/> */}
</TouchableOpacity>
<TouchableOpacity onPress={()=>setModalVisible2(true)} style={{flexDirection:'row',justifyContent:'space-around' }}>
<View style={{  width:responsiveWidth(40),borderBottomColor:"#CBCBCB",borderBottomWidth:1 }}>
<Text style={styles.txtTitleInput}> نام خانوادگی</Text>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>

<Text style={styles.txtInput}>{family}</Text>
<Icon name={"create"} size={20}/>
</View>
</View>
</TouchableOpacity>





</View>


<View style={styles.header}>
<TouchableOpacity onPress={()=>setModalVisible3(true)} style={{  width:responsiveWidth(40),borderBottomColor:"#CBCBCB",borderBottomWidth:1 }}>
<Text style={styles.txtTitleInput}>کد ملی</Text>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>

<Text style={styles.txtInput}>{national}</Text>
<Icon name={"create"} size={20}/>
</View>
{/* <Input isIconLeft={"create"} inputStyle={styles.textInput}  containerStyle={styles.textInputLogin}/> */}
</TouchableOpacity>
<TouchableOpacity onPress={()=>setModalVisible4(true)} style={{flexDirection:'row',justifyContent:'space-around' }}>
<View style={{  width:responsiveWidth(40),borderBottomColor:"#CBCBCB",borderBottomWidth:1 }}>
<Text style={styles.txtTitleInput}> شماره موبایل</Text>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>

<Text style={styles.txtInput}>{mobile}</Text>
<Icon name={"create"} size={20}/>
</View>
</View>
</TouchableOpacity>





</View>
<TouchableOpacity onPress={()=>Edit()} style={{alignItems:'flex-end',paddingVertical:responsiveWidth(10),paddingHorizontal:responsiveWidth(2)}}>
<LinearGradient   colors={['#FFC444', '#F36F56']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.viewNext}>

<Text style={{...myFontStyle.mediumBold,color:Colors.white}}>
ذخیره اطلاعات</Text>

</LinearGradient>
</TouchableOpacity>
</View>

<Modal
        // animationType="slide"
        // transparent={true}
        isVisible={modalVisible}
        // avoidKeyboard={true}
        // onRequestClose={() => {
        //   setModalVisible(!modalVisible);
        // }}

        //  backdropColor="black"
        //  hasBackdrop={false}
        onBackdropPress={() => setModalVisible(false)}
style={{alignSelf:'center'}}
        >

<View       style={styles.modal}>
  <View style={{flexDirection:'row'}}>

  <Text style={{...myFontStyle.largBold,color:Colors.text}}>ویرایش نام</Text>

  </View>

<View style={{flexDirection:'row'}}>
<Input   placeholder="نام"  onChangeText={(ss)=>setName(ss)}      inputStyle={styles.textInputLogin}containerStyle={{alignItems:"flex-end"}} />

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
<Input   placeholder="نام خانوادگی"   onChangeText={(ss)=>setFamily(ss)}     inputStyle={styles.textInputLogin}containerStyle={{alignItems:"flex-end"}} />

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
<Input   placeholder="کدملی"   onChangeText={(ss)=>setNational(ss)}     inputStyle={styles.textInputLogin}containerStyle={{alignItems:"flex-end"}} />

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
<Input   placeholder="شماره موبایل"    onChangeText={(ss)=>setMobile(ss)}     inputStyle={styles.textInputLogin}containerStyle={{alignItems:"flex-end"}} />

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



   {/* <TopBar Classes={classes} /> */}
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
<View style={{paddingLeft:20}} >
 <TouchableOpacity onPress={()=>drawers.current.open()}>
 <Icon name={"notes"} style={styles.menuIcon} size={50} color={"#fff"} style={{transform: [{rotateY: '180deg'}]}}/>

 </TouchableOpacity>
 </View>
<View style={{flex : 2,textAlign:"right"}}>
  <Text style={styles.menuTitle}>نوآوران دانش(ماهان)</Text>
  </View>
<View style={{flex :0.5}}>
  <TouchableOpacity style={{}}>
    <Icon name={"chevron-left"} color={"#fff"} size={30} style={{marginTop:10}}/>
  </TouchableOpacity>
  </View>

</View>

</View>
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

<Text style={styles.txtInput}>{name}</Text>
<Icon name={"create"} size={20}/>
</View>
{/* <Input isIconLeft={"create"} inputStyle={styles.textInput}  containerStyle={styles.textInputLogin}/> */}
</TouchableOpacity>
<TouchableOpacity onPress={()=>setModalVisible2(true)} style={{flexDirection:'row',justifyContent:'space-around' }}>
<View style={{  width:responsiveWidth(40),borderBottomColor:"#CBCBCB",borderBottomWidth:1 }}>
<Text style={styles.txtTitleInput}> نام خانوادگی</Text>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>

<Text style={styles.txtInput}>{family}</Text>
<Icon name={"create"} size={20}/>
</View>
</View>
</TouchableOpacity>





</View>


<View style={styles.header}>
<TouchableOpacity onPress={()=>setModalVisible3(true)} style={{  width:responsiveWidth(40),borderBottomColor:"#CBCBCB",borderBottomWidth:1 }}>
<Text style={styles.txtTitleInput}>کد ملی</Text>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>

<Text style={styles.txtInput}>{national}</Text>
<Icon name={"create"} size={20}/>
</View>
{/* <Input isIconLeft={"create"} inputStyle={styles.textInput}  containerStyle={styles.textInputLogin}/> */}
</TouchableOpacity>
<TouchableOpacity onPress={()=>setModalVisible4(true)} style={{flexDirection:'row',justifyContent:'space-around' }}>
<View style={{  width:responsiveWidth(40),borderBottomColor:"#CBCBCB",borderBottomWidth:1 }}>
<Text style={styles.txtTitleInput}> شماره موبایل</Text>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>

<Text style={styles.txtInput}>{mobile}</Text>
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
  isVisible={modalVisible}
  // avoidKeyboard={true}
  // onRequestClose={() => {
  //   setModalVisible(!modalVisible);
  // }}

  //  backdropColor="black"
  //  hasBackdrop={false}
  onBackdropPress={() => setModalVisible(false)}
style={{alignSelf:'center'}}
  >

<View       style={styles.modal}>
<View style={{flexDirection:'row'}}>

<Text style={{...myFontStyle.largBold,color:Colors.text}}>ویرایش نام</Text>

</View>

<View style={{flexDirection:'row'}}>
<Input   placeholder="نام"  onChangeText={(ss)=>setName(ss)}      inputStyle={styles.textInputLogin}containerStyle={{alignItems:"flex-end"}} />

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
<Input   placeholder="نام خانوادگی"   onChangeText={(ss)=>setFamily(ss)}     inputStyle={styles.textInputLogin}containerStyle={{alignItems:"flex-end"}} />

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
<Input   placeholder="کدملی"   onChangeText={(ss)=>setNational(ss)}     inputStyle={styles.textInputLogin}containerStyle={{alignItems:"flex-end"}} />

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
<Input   placeholder="شماره موبایل"    onChangeText={(ss)=>setMobile(ss)}     inputStyle={styles.textInputLogin}containerStyle={{alignItems:"flex-end"}} />

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
</Drawer>
);
};

const styles = StyleSheet.create({
  // container: {flex:3,backgroundColor:"#fff"},

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
  top:responsiveHeight(0),
  paddingRight:responsiveWidth(5),
  paddingLeft:responsiveWidth(5),
},
drawerStyles: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3,zIndex:5},

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
