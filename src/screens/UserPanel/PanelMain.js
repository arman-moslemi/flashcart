import React, { useState,useEffect,useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image,Alert} from 'react-native';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerContent from '../../components/drewerContent/DrawerContent';
import Drawer from 'react-native-drawer';
import { RadioButton } from 'react-native-paper';
// import ImagePicker from 'react-native-image-picker';
import {launchImageLibrary} from 'react-native-image-picker';
import ImgToBase64 from 'react-native-image-base64';
// create a component
const PanelMain = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = useState('');
  const [data, setData] = useState([]);
  const [accunt, setAccunt] = useState([]);
  const [group, setGroup] = useState([]);
  const [open, setOpen] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [value, setValue] = useState(null);
  const [valueAc, setValueAc] = useState(null);
  const [modal2Visible, setModal2Visible] = useState(false);
  const [backimage, setbackimageData] = React.useState('');

  const [ques, setQues] = useState(null);
  const [ans, setAns] = useState(null);
  const [items, setItems] = useState([
    // {label: 'پزشکی', value: '1'},
    // {label: 'دندان پزشکی', value: '2'},
    // {label: 'بورد', value: '3'},
  ]);
  const [itemsAc, setItemsAc] = useState([

  ]);

  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const drawers = useRef(null);

  const [items2, setItems2] = useState([

  ]);
  const handleChoosePhoto =async ()=>{

    // setbackimageData(10);
    // console.log(backimage);
    const state = await AsyncStorage.getItem("@user");

    const options = {
      noData:true
    };
    const response = await launchImageLibrary(options);
    console.log(response.assets[0]);
  // launchImageLibrary(options,response => {
      if(response.assets[0].uri){
        console.log(response.assets[0]);
        console.log(1111);

        setbackimageData(response.assets[0].uri);
        console.log(backimage);


        ImgToBase64.getBase64String(response.assets[0].uri)
        .then(base64String =>
         // console.log(base64String)
        axios.post(apiUrl + 'EditCustomerPic', {
          CustomerID: state,
          PhotoFileName:response.assets[0].fileName,
          Photo:base64String,
        })
          .then(response => {
           //   setData(response.data.data);
             // setids(id);
              // return;
              const result = response.data.result;
console.log(result)
if(result=="true"){

  console.log(222);
  AsyncStorage.setItem('@userPhoto',response.data.Data[0].Photo.toString())

  console.log(response.data.result);
  Alert.alert("",'عکس با موقیت ثبت شد')
}


          })
          .catch(function(error) {
            console.log(222);
            console.log(error);

          }
          )


    );


      }
    // });
  };
  const  setValueDrop=async(val)=> {
    setValue(val)
     console.log(value);

    axios.post(apiUrl+'SubGroups',{GroupID:value})
    .then(function (response) {
      const message = response.data.Data;
      const result = response.data.result;
      console.log(888);
      console.log(result);
      console.log(message);
      const charity = [];

      // console.log(response.data.DataSlider.Slider1);
      // console.log(response.data.DataSlider.Slider1);
      if(result == "true"){
    // setGroup(response.data.Data)
    response.data.Data.map((item, index) => (
      charity.push({
        label: item.Title,
        value: item.SubGroupID
      })
    ))
    setItems2(charity)

                        }else{

      }
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  const  setValueAccunts=()=> {
     console.log(value);

    axios.get(apiUrl+'AllGroup')
    .then(function (response) {
      const message = response.data.Data;
      const result = response.data.result;
      console.log(22222222);
      console.log(result);
      console.log(message);
      const charity = [];

      // console.log(response.data.DataSlider.Slider1);
      // console.log(response.data.DataSlider.Slider1);
      if(result == "true"){
    // setGroup(response.data.Data)
    response.data.Data.map((item, index) => (
      charity.push({
        label: item.Title,
        value: item.GroupID
      })
    ))
    setItemsAc(charity)
console.log(12345)
console.log(itemsAc)
                        }else{

      }
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  const  getAccunts=(val)=> {
     console.log(33);
     console.log(value);
setValueAc(val)
    axios.post(apiUrl+'Accounts',{GroupID:valueAc})
    .then(function (response) {
      const message = response.data.Data;
      const result = response.data.result;
      console.log(22222222);
      console.log(result);
      console.log(message);


      if(result == "true"){
    // setGroup(response.data.Data)
  setAccunt(response.data.Data)
                        }else{

      }
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  const  checkAccount=async()=> {
     console.log(33);
     const state = await AsyncStorage.getItem("@user");
    axios.post(apiUrl+'AccountCheck',{CustomerID:state,AccountID:checked})
    .then(function (response) {
      const message = response.data.Data;
      const result = response.data.result;
      console.log(22222222);
      console.log(result);
      console.log(message);

if(result == "duplicate"){
Alert.alert("این اشتراک برای شما هم اکنون فعال است")
}
     else if(result == "true"){
    // setGroup(response.data.Data)
    setModal2Visible(false)
    navigation.navigate("Dargah",{id:checked})
                          }else{

      }
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  useEffect(() => {

    mutLogin();
    setValueAccunts();


}, []);
      const  mutLogin=async()=> {
        const state = await AsyncStorage.getItem("@user");

        axios.post(apiUrl+'OneCustomer',{CustomerID:state})
        .then(function (response) {
          const message = response.data.Data;
          const result = response.data.result;
          console.log(777);
          console.log(result);
          console.log(message);
          // console.log(response.data.DataSlider.Slider1);
          // console.log(response.data.DataSlider.Slider1);
          if(result == "true"){
        setData(response.data.Data)
                            }else{

          }
        })
        .catch(function (error) {
          console.log(error);
        });

        axios.get(apiUrl+'AllGroup')
        .then(function (response) {
          const message = response.data.Data;
          const result = response.data.result;
          console.log(888);
          console.log(result);
          console.log(message);
          const charity = [];

          // console.log(response.data.DataSlider.Slider1);
          // console.log(response.data.DataSlider.Slider1);
          if(result == "true"){
            setGroup(response.data.Data)
            response.data.Data.map((item, index) => (
              charity.push({
                label: item.Title,
                value: item.GroupID
              })
            ))
            setItems(charity)

                                }else{

              }
            })
            .catch(function (error) {
              console.log(error);
            });

        };
        const  InsertCard=async()=> {
          const state = await AsyncStorage.getItem("@user");

          axios.post(apiUrl+'InsertFlashCard',{CustomerID:state,SubGroupID:value2,Text:ques,TextAnswer:ans})
          .then(function (response) {
            const message = response.data.Data;
            const result = response.data.result;
            console.log(result);
            console.log(message);
            // console.log(response.data.DataSlider.Slider1);
            // console.log(response.data.DataSlider.Slider1);
            if(result == "true"){
          // setData(response.data.Data)
          Alert.alert("",'با موفقیت اضافه شد')
          setModalVisible(false)
                              }else{
                                Alert.alert("",'تمام آیتم هارا وارد نمایید')

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
<View style={{paddingLeft:20}} >
 <TouchableOpacity onPress={()=>drawers.current.open()}>
 <Icon name={"notes"}  size={50} color={"#fff"} style={{transform: [{rotateY: '180deg'}]}}/>

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
  {/* <TopBar Classes={classes} /> */}

<View style={styles.viewBody}>
<View style={styles.subViewBody}>
<TouchableOpacity onPress={()=>setModal2Visible(true)} style={{marginRight:responsiveWidth(5),alignItems:'center'}}>
  <Text style={styles.txtEdit}>
    خرید اشتراک
  </Text>
</TouchableOpacity>

<Modal
        isVisible={modal2Visible}
        onBackdropPress={() => setModal2Visible(false)}
        >
           <View style={styles.alertModal}>
      <View style={{flexDirection:'row',padding:10,justifyContent:'center',borderBottomColor:'#f4f4f4',borderBottomWidth:2}}>

                  <Text style={{...myFontStyle.normalBold,color:'#068CC5',}}>جهت تمدید اشتراک ابتدا بخش مورد نظر خود را انتخاب کنید</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:"center",margin:5}}>
                <Text style={{...myFontStyle.mediumBold,color:Colors.text}}>انتخاب بخش مورد نظر: </Text>
    <View>
<DropDownPicker
      open={open3}
      value={valueAc}
      items={itemsAc}
      setOpen={setOpen3}
      setValue={getAccunts}
      setItems={setItemsAc}

      style={{
        borderColor:'#F1F1F1',
        borderWidth:2,
        // margin:5,
        width:responsiveWidth(40),

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

  </View>
  {
    accunt.map((item)=>(

      <View style={styles.viewRadio}>
      <RadioButton
            //   value={"option2"+item._id}
              status={ checked === item.AccountID ? 'checked' : 'unchecked' }
        onPress={() => setChecked(item.AccountID)}
              color={Colors.yellow}

            />
  {
    item.SpecialCost!=0
    ?
    <View style={{flexDirection:'row'}}>

      <Text style={styles.txtRadio}>{item.Title}     {item.Days}روز  </Text>
      <Text style={styles.txtRadioDash}> {item.Cost}تومان </Text>
      <Text style={styles.txtRadio}> {item.SpecialCost}تومان </Text>
    </View>

    :

            <Text style={styles.txtRadio}>{item.Title}   {item.Cost}تومان    {item.Days}روز</Text>
  }
            </View>
     ) )
  }


         <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:responsiveHeight(10)}}>
                    <View style={{width:responsiveWidth(32)}}>
                    <LinearGradient colors={['#CC1111', '#F43535'] }start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{borderRadius:3,padding:5}}>


                      <TouchableOpacity onPress={()=>{setModal2Visible();setChecked("")}} >
                        <Text style={{...myFontStyle.btnBold,color:Colors.white,textAlign:'center'}}>بستن</Text>
                        </TouchableOpacity>
                        </LinearGradient>
                    </View>

                   <View style={{width:responsiveWidth(32)}}>
                   <LinearGradient colors={['#3AC3FE', '#0284BB'] }start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{borderRadius:3,padding:5}}>


          <TouchableOpacity onPress={()=>checked!=""?checkAccount(): Alert.alert("","یک مورد را انتخاب نمایید")} style={{}}>
          <Text style={{...myFontStyle.btnBold,color:Colors.white,textAlign:'center'}}>ادامه </Text>
          </TouchableOpacity>
          </LinearGradient>
                    </View>
                </View>
      </View>
        </Modal>



<View style={{flexDirection:'row-reverse'}}>

<View style={styles.viewProfText}>
  <Text style={{...myFontStyle.largBold,color:Colors.black}}>{data[0]?.Name} {data[0]?.Family}</Text>
  <Text style={{...myFontStyle.mediumRegular,color:Colors.gray}}>{data[0]?.Mobile}</Text>
  {/* <Text style={{...myFontStyle.smallRegular,color:Colors.gray}}>مدت زمان باقی مانده از اشتراک شما:{data[0]?.StartTimeAccount	}روز</Text> */}




</View>


<TouchableOpacity

onPress={
  ()=>{handleChoosePhoto()}
}

>


          {/* <Image style={drawerStyles.avatar} source={avatarWoman} /> */}
          {
                  backimage !=''?
                  <Image style={styles.avatar}  source={{uri:backimage}}/>

                  :
            data[0]?.Photo?

            <Image style={styles.avatar} source={{uri:apiAsset+data[0]?.Photo}} />
            :

          <Image style={styles.avatar} source={require("../../assets/images/profi.png")} />
          }
          <TouchableOpacity onPress={()=>navigation.navigate('EditProfile')} style={styles.viewIconEdit}>

          <Icon name="create" color={Colors.white} size={20} style={{margin:5}}/>
          </TouchableOpacity>

</TouchableOpacity>

</View>
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
<TouchableOpacity onPress={()=>navigation.navigate('Favorite')}>

<LinearGradient colors={['#F7BB37', '#F69D0D']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.rowCart}>
<Icon name="favorite" color={Colors.white} size={50} style={{margin:5}}/>
<Text style={{...myFontStyle.largBold,color:Colors.white}}>کارت های برگزیده</Text>
</LinearGradient>
</TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate('AzmoonList')}>

<LinearGradient  colors={['#16B2F5', '#068DF6']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.rowCart}>

<Icon name="sticky-note-2" color={Colors.white} size={50} style={{margin:5}}/>
<Text style={{...myFontStyle.largBold,color:Colors.white}}>آزمون آفلاین</Text>
</LinearGradient>
</TouchableOpacity>
</View>
<View style={styles.viewRowCart4}>
<TouchableOpacity onPress={()=>navigation.navigate('Accounts')}>

<LinearGradient colors={['#2DDB4E', '#00a32a']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.rowCart}>
<Icon name="account-balance-wallet" color={Colors.white} size={50} style={{margin:5}}/>
<Text style={{...myFontStyle.largBold,color:Colors.white}}>اشتراک های من</Text>
</LinearGradient>
</TouchableOpacity>
<TouchableOpacity onPress={()=>setModalVisible(true)} >


<LinearGradient colors={['#F7397F', '#E82B63']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.rowCart}>


<Icon name="note-add"color={Colors.white} size={50} style={{margin:5}}/>
<Text style={{...myFontStyle.largBold,color:Colors.white}}>افزودن کارت جدید</Text>



</LinearGradient>
</TouchableOpacity>
</View>


<Modal
    // animationType="slide"
    // transparent={true}
    isVisible={modalVisible}
    // onRequestClose={() => {
    //   setModalVisible(!modalVisible);
    // }}

     backdropColor="black"
    //  hasBackdrop={false}
    onBackdropPress={() => setModalVisible(false)}

    >

<View       style={styles.modal}>
<View style={{flexDirection:'row-reverse',justifyContent:"space-between"}}>
<Icon onPress={()=>          setModalVisible(false)} name="close" size={20} color={Colors.yellow}/>
<Text style={{...myFontStyle.largBold,color:Colors.text}}>افزودن سوال(نکته)جدید</Text>

</View>
<View style={{flexDirection:'row-reverse',alignItems:"center",justifyContent:"space-between",margin:5}}>
<View>
<DropDownPicker
  open={open}
  value={value}
  items={items}
  setOpen={setOpen}
  // setValue={setValue}
  setValue={setValueDrop}
  setItems={setItems}
  // width={100}
  ite
  style={{
    borderColor:'#F1F1F1',
    borderWidth:2,
    // margin:5,
    width:responsiveWidth(38),

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
    width:responsiveWidth(38),
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
<Input   placeholder="متن سوال را وارد کنید" onChangeText={(ss)=>setQues(ss)}        multiline={true}         numberOfLines={4} inputStyle={styles.textInputLogin}containerStyle={{alignItems:"flex-end"}} />
<Text style={{...myFontStyle.mediumBold,color:Colors.text}}>متن سوال:</Text>

</View>
<View style={{flexDirection:'row-reverse',justifyContent:'space-between'}}>
<Input   placeholder="پاسخ را وارد کنید"         multiline={true}  onChangeText={(ss)=>setAns(ss)}          numberOfLines={4} inputStyle={styles.textInputLogin}containerStyle={{alignItems:"flex-end"}} />
<Text style={{...myFontStyle.mediumBold,color:Colors.text}}>پاسخ:</Text>

</View>
<TouchableOpacity onPress={()=>InsertCard()} style={styles.button}>
  <Text style={{...myFontStyle.mediumBold,color:Colors.white}}>
    ذخیره
  </Text>
</TouchableOpacity>
         </View>
</Modal>
    </View>


      </View>


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
      top:responsiveHeight(0),
      paddingRight:responsiveWidth(5),
      paddingLeft:responsiveWidth(5),
    },
    drawerStyles: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3,zIndex:5},
  avatar: {
    width: responsiveWidth(18),
    height: responsiveHeight(10),
    resizeMode: "contain",
    // margin:5,
    marginRight:responsiveWidth(5),
    borderRadius:50

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
    alignItems:'center',
    alignContent:'center',
    width:responsiveWidth(30),
    borderColor:Colors.white,
    borderRadius:50,
    paddingVertical:3,
    // marginLeft:responsiveWidth(5),
    paddingHorizontal:responsiveWidth(6),
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
  viewRowCart4:{flexDirection:'row',justifyContent:'space-between',paddingLeft:responsiveWidth(3),paddingRight:responsiveWidth(3) ,marginTop:responsiveHeight(2)},
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
  justifyContent:'space-between',
  paddingLeft:responsiveWidth(0),
  paddingRight:responsiveWidth(3),
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

  }
  ,
  txtRadio: {
    color: Colors.text,
    ...myFontStyle.mediumRegular,
    // lineHeight:responsiveHeight(3)

  },
  txtRadioDash: {
    color: Colors.text,
    ...myFontStyle.mediumRegular,
    textDecorationLine:'line-through',


    // borderStyle:'dashed'
    // lineHeight:responsiveHeight(3)

  },
  viewRadio: {flexDirection:'row',alignItems:'center',marginTop:responsiveHeight(1)},

  alertModal:{

    width:responsiveWidth(90),
    marginTop:responsiveHeight(-30),
    backgroundColor:'#fff',
    borderRadius:5,
    shadowColor: '#fff',
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 0},
    shadowRadius: 700,
    elevation: 20,
    alignContent:'center',
    paddingTop:responsiveHeight(1),
    paddingBottom:responsiveHeight(3),
    paddingRight:responsiveWidth(0),
    paddingLeft:responsiveWidth(0)},
    marginRight:responsiveWidth(5),
    marginLeft:responsiveWidth(5),


});

  export default PanelMain;

//make this component available to the <app></app>
