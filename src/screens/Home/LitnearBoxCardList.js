import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image, AsyncStorage,Alert} from 'react-native';
import { myFontStyle } from "../../assets/Constance";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors } from '../../assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import {TopBar} from '../../components/TopBar';
import Modal from "react-native-modal";
import { RadioButton } from 'react-native-paper';
import axios from 'axios';
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";
// create a component
const LitnearBoxCardList = ({navigation,route}) => {
  const [checked, setChecked] = useState('first');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);

  const [data,setData]=useState([]);
  useEffect(() => {

    mutLogin();


  }, [value,checked]);
  const {id} = route?.params ?? {};

  const  mutLogin=async()=> {
    const state = await AsyncStorage.getItem("@user");

    axios.post(apiUrl + 'CustomerLitnear',{CustomerID:state,LitnearLevel:id})
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
    const  DeleteLitnear=async(ss)=> {
      const state = await AsyncStorage.getItem("@user");

      axios.post(apiUrl + 'DeleteLitnear',{CustomerID:state,FlashCardID:ss,Sort:checked})
      .then(function (response) {
        const message = response.data.Data;
        console.log(55);
        console.log(message);
        const result = response.data.result;
        console.log(result);

        if(result == "true"){
          // setData(response.data.Data)
          Alert.alert("","با موفقیت حذف شد")
setValue(value+1)
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
   const classes =()=>{
   return(
    <View style={styles.container}>
    <View style={{flexDirection:'row',marginTop:responsiveHeight(3),marginLeft:responsiveWidth(5),marginRight:responsiveWidth(5),justifyContent:'space-between'}}>
    <View>
    <Text style={{...myFontStyle.textOnImg,color:'#0384BC'}}>خانه {id}</Text>

    </View>
    <View>
        <TouchableOpacity style={styles.sortBtn} onPress={toggleModal}>
        <Icon name={"sort"} color={'#fff'} size={35} style={{marginTop:responsiveHeight(0),transform: [{rotateY: '180deg'}]}}></Icon>
          <Text style={{...myFontStyle.normalBold,color:'#fff',alignSelf:'center'}}>مرتب سازی

          </Text>

        </TouchableOpacity>
        <Modal isVisible={isModalVisible} onBackdropPress={closeModal} style={{justifyContent:'center',alignItems:'center'}}>
               <View style={styles.sortModal}>
                <View style={{flexDirection:'row',justifyContent:'center',borderBottomColor:'#f4f4f4',borderBottomWidth:2}}>
                  <Icon name={"sort"} color={'#ffc444'} size={35} style={{transform: [{rotateY: '180deg'}]}}></Icon>
                  <Text style={{...myFontStyle.largBold,color:'#000'}}>مرتب سازی بر اساس درجه سختی</Text>
                </View>
                <View>
                <View style={styles.viewRadio}>
      <RadioButton
            //   value={"option2"+item._id}
              status={ checked === 'easy' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('easy')}
              color={Colors.yellow}

            />
            <Text style={styles.txtRadio}>از خیلی آسان به خیلی سخت</Text>
            </View>
            <View style={styles.viewRadio}>

            <RadioButton
            //   value={"option2"+item._id}
              status={ checked === 'hard' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('hard')}
        color={Colors.yellow}

            />

      <Text style={styles.txtRadio}>از خیلی سخت به خیلی آسان</Text>
            </View>
                </View>
             <View style={{justifyContent:'center',width:'100%',alignContent:'center'}}>
             <View style={{width:responsiveWidth(30),alignSelf:'center' ,marginTop:responsiveHeight(2)}}>
               {/* <LinearGradient colors={['#3AC3FE', '#0284BB'] }start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{borderRadius:3,padding:5}}>


<TouchableOpacity style={styles.notShowBtn}>
<Text style={styles.modalBtnText}>اعمال مرتب سازی</Text>
</TouchableOpacity>
</LinearGradient> */}
                 </View>
               </View>
               </View>
              </Modal>
    </View>
    </View>
{/* <View style={styles.viewBody}> */}
<ScrollView style={{paddingBottom:20}}>
  {
    data.map((item, index) => (
      <View   style={styles.subViewRead}>
<TouchableOpacity onPress={()=>DeleteLitnear(item.FlashCardID)} style={{flexDirection:'row',alignItems:'center'}}>


<Icon name="delete" size={30} color={'#cc1111'}/>
</TouchableOpacity>
<TouchableOpacity  onPress={()=>navigation.navigate("FlashCardView",{id:item.FlashCardID})} style={{flexDirection:'row',justifyContent:'flex-start',width:responsiveWidth(75)}}>
    <View>
    <Text style={{...myFontStyle.normalBold,color:Colors.black,flexDirection:'column'}}>{item.Text?.substring(0, 20)}...</Text>
    <View style={{flexDirection:'row'}}>
    <Icon name={"alarm"} color={'#BCC0C8'} size={20}></Icon>
<Text style={{...myFontStyle.mediumRegular,textAlign:'left',color:'#BCC0C8'}}>

  زمان مرور دو روز دیگر

</Text>
      </View>

      </View>
</TouchableOpacity>


{/* </View> */}



  </View>
      ))
  }







  </ScrollView>
</View>
   )
   }



return (
<TopBar Classes={classes}  navigation={navigation}/>

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
    borderLeftColor:'#ffb921',
    backgroundColor:"#fff",
    elevation:5,
    shadowOpacity:1,
    shadowRadius:10,
    shadowOffset:5,
    borderRadius:5,
    marginRight:responsiveHeight(2),
    marginLeft:responsiveHeight(2),
    marginBottom:responsiveHeight(1),
  height:responsiveHeight(8),
  marginTop:responsiveHeight(2)
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
    shadowOffset:5,
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
     ...myFontStyle.normalBold,
     color:'#fff',
     textAlign:'center',

   }
});

  export default LitnearBoxCardList;

