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
import {Input} from '../../components/Input';
import axios from 'axios';
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";
import DrawerContent from '../../components/drewerContent/DrawerContent';
import Drawer from 'react-native-drawer'

// create a component
const TicketsList = ({navigation}) => {
  const [checked, setChecked] = useState('first');
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [data,setData] = useState([]);
  const drawers = useRef(null);

  useEffect(() => {

    mutLogin();


  }, []);

  const  mutLogin=async()=> {
    const state = await AsyncStorage.getItem("@user");

    axios.post(apiUrl + 'CustomerSupport',{CustomerID:state})
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
  const  newSupport=async()=> {
    const state = await AsyncStorage.getItem("@user");

    axios.post(apiUrl + 'InsertNewSupport',{CustomerID:state,Title:title,Text:text})
    .then(function (response) {
      const message = response.data.Data;
      console.log(55);
      console.log(message);
      const result = response.data.result;
      console.log(result);

      if(result == "true"){
        // setData(response.data.Data)
        Alert.alert("",'با موفقیت اضافه شد')
mutLogin();
setModalVisible(false)
        // navigation.navigate("ChangePass",{mobile:user,verify:response.data.Data})
                        }else{

      }
    })
    .catch(function (error) {
      console.log(error);
    });


    };
  const toggleModal = () => {
   setModalVisible(!isModalVisible);
  };

  const closeModal=()=>{
    setModalVisible(!isModalVisible);
  }



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
    <View style={{flexDirection:'row',marginTop:responsiveHeight(3),marginLeft:responsiveWidth(5),marginRight:responsiveWidth(5),justifyContent:'space-between'}}>
    <View>
    <Text style={{...myFontStyle.textOnImg,color:'#0384BC'}}>تیکت و پشتیبانی</Text>

    </View>
    <View>
        <TouchableOpacity style={styles.sortBtn} onPress={toggleModal}>
        <Icon name={"add"} color={'#fff'} size={25} style={{marginTop:responsiveHeight(1),transform: [{rotateY: '180deg'}]}}></Icon>
          <Text style={{...myFontStyle.btnBold,color:'#fff',alignSelf:'center'}}>ایجاد تیکت

          </Text>

        </TouchableOpacity>
        <Modal isVisible={isModalVisible} onBackdropPress={closeModal} style={{justifyContent:'center',alignItems:'center'}}>
               <View style={styles.sortModal}>
                <View style={{flexDirection:'row',borderBottomColor:'#f4f4f4',borderBottomWidth:2,padding:10}}>
                  <Icon name={"textsms"} color={'#ffc444'} size={30} style={{marginRight:5}}></Icon>
                  <Text style={{...myFontStyle.textOnImg,color:'#000'}}>ارسال پیام جدید</Text>
                </View>
                <View style={{flexDirection:'row',paddingLeft:responsiveWidth(2),paddingTop:responsiveHeight(2)}}>
                <Text style={{...myFontStyle.normalRegular,color:Colors.text,marginTop:responsiveHeight(2),}}>عنوان پیام: </Text>
                <Input onChangeText={(ss)=>setTitle(ss)}  placeholder="عنوان پیام خود را بنویسید"  numberOfLines={1} inputStyle={styles.textInputLogin}containerStyle={{alignItems:"flex-end"}} />


                </View>
                <View style={{flexDirection:'row',paddingLeft:responsiveWidth(2),paddingTop:responsiveHeight(0)}}>
                <Text style={{...myFontStyle.normalRegular,color:Colors.text,marginTop:responsiveHeight(2),}}>متن پیام:   </Text>
                <Input onChangeText={(ss)=>setText(ss)}   placeholder="متن پیام خود را اینجا بنویسید"  inputStyle={styles.textInputLogin2}containerStyle={{alignItems:"flex-end"}} />


                </View>
             <View style={{justifyContent:'center',width:'100%',alignContent:'flex-end'}}>
             <View style={{width:responsiveWidth(30) ,alignSelf:'flex-end',marginTop:responsiveHeight(2),marginRight:responsiveWidth(5)}}>


<TouchableOpacity onPress={()=>newSupport()} style={styles.sendBtn}>
<Text style={styles.modalBtnText}>ارسال پیام</Text>
</TouchableOpacity>

                 </View>
               </View>
               </View>
              </Modal>
    </View>
    </View>
{/* <View style={styles.viewBody}> */}


  {
  data.map((item)=>(


<TouchableOpacity onPress={()=>navigation.navigate("Ticket",{id:item.SupportID,title:item.Title,data:item.Date})} style={styles.subViewRead1}>
<View style={{width:responsiveWidth(5)}}>
<TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>


<Icon name="remove-red-eye" size={20} color={'#FFC444'}/>
</TouchableOpacity>
    </View>
    {
      item.Status==1?
      <View style={{width:responsiveWidth(25)}}>
        <View style={styles.waited}>
            <Text style={styles.waitedText}>در انتظار پاسخ</Text>
            </View>
        </View>
      :
      item.Status==2?
      <View style={{width:responsiveWidth(25)}}>
        <View style={styles.answered}>
            <Text style={styles.answeredText}>پاسخ داده شد</Text>
            </View>
        </View>
      :
      item.Status==3?
      <View style={{width:responsiveWidth(25)}}>
        <View style={styles.closed}>
            <Text style={styles.closedText}>بسته شده</Text>
            </View>
        </View>
      :
      null
    }

<View style={{flexDirection:'row',justifyContent:'flex-start',width:responsiveWidth(55)}}>
<View>
    <Text style={{...myFontStyle.normalBold,color:Colors.black,textAlign:'right',flexDirection:'column'}}>{item.Title?.substring(0, 20)}...</Text>


      </View>
</View>


{/* </View> */}



  </TouchableOpacity>
  ))
  }


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
  subViewRead1:{
    borderLeftWidth:5,
    borderLeftColor:'#2DDB4E',
    backgroundColor:"#fff",
    elevation:5,
    shadowOpacity:1,
    shadowRadius:10,
    shadowOffset:5,
    borderRadius:5,
    marginRight:responsiveHeight(2),
    marginLeft:responsiveHeight(2),
    marginBottom:0,
  height:responsiveHeight(8),
  marginTop:responsiveHeight(3)
  ,alignItems:'center',
  flexDirection:'row-reverse',
  justifyContent:'space-between',
  padding:responsiveWidth(3),
  paddingBottom:responsiveHeight(2)},
  subViewRead2:{
    borderLeftWidth:5,
    borderLeftColor:'#F69D0D',
    backgroundColor:"#fff",
    elevation:5,
    shadowOpacity:1,
    shadowRadius:10,
    shadowOffset:5,
    borderRadius:5,
    marginRight:responsiveHeight(2),
    marginLeft:responsiveHeight(2),
    marginBottom:0,
  height:responsiveHeight(8),
  marginTop:responsiveHeight(3)
  ,alignItems:'center',
  flexDirection:'row-reverse',
  justifyContent:'space-between',
  padding:responsiveWidth(3),
  paddingBottom:responsiveHeight(2)},
  subViewRead3:{
    borderLeftWidth:5,
    borderLeftColor:'#E82B63',
    backgroundColor:"#fff",
    elevation:5,
    shadowOpacity:1,
    shadowRadius:10,
    shadowOffset:5,
    borderRadius:5,
    marginRight:responsiveHeight(2),
    marginLeft:responsiveHeight(2),
    marginBottom:0,
  height:responsiveHeight(8),
  marginTop:responsiveHeight(3)
  ,alignItems:'center',
  flexDirection:'row-reverse',
  justifyContent:'space-between',
  padding:responsiveWidth(3),
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
      borderRadius:50,
      elevation:5,
    shadowOpacity:1,
    shadowRadius:10,
    shadowOffset:5,
    justifyContent:'center',
    flexDirection:'row',
  },sortModal:{
    width:responsiveWidth(95),
    marginTop:responsiveHeight(-20),
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

   },
   sendBtn:{
       backgroundColor:'#ffc444',
       width:responsiveWidth(30),
       height:responsiveHeight(4.5),
       borderRadius:50,
       justifyContent:'center',
       elevation:5,
    shadowOpacity:0.5,
    shadowRadius:50,
    shadowOffset:50,
   },
   answered:{
       width:'80%',
       borderColor:'#2DDB4E',
       borderWidth:1,
       borderRadius:50,
       height:responsiveHeight(4),
       justifyContent:'center',
       textAlign:'center',
   },answeredText:{
       ...myFontStyle.mediumRegular,
       color:'#2DDB4E',
       textAlign:'center',
   }
   ,waited:{
    width:'80%',
    borderColor:'#F69D0D',
    borderWidth:1,
    borderRadius:50,
    height:responsiveHeight(4),
    justifyContent:'center',
    textAlign:'center',
},waitedText:{
    ...myFontStyle.mediumRegular,
    color:'#F69D0D',
    textAlign:'center',
},closed:{
    width:'80%',
    borderColor:'#E82B63',
    borderWidth:1,
    borderRadius:50,
    height:responsiveHeight(4),
    justifyContent:'center',
    textAlign:'center',
}
,closedText:{
    ...myFontStyle.mediumRegular,
    color:'#E82B63',
    textAlign:'center',
},textInputLogin:{

    ...myFontStyle.mediumRegular,
    borderColor:"#F1F1F1",
    borderWidth:2,
  alignItems:'flex-end',
  marginLeft:responsiveWidth(2),

    },
    textInputLogin2:{

        ...myFontStyle.mediumRegular,
        borderColor:"#F1F1F1",
        borderWidth:2,
      alignItems:'flex-end',
      marginLeft:responsiveWidth(2),
      height:responsiveHeight(15),
        },
});

  export default TicketsList;

