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
import { RadioButton } from 'react-native-paper';
import {clearAzmoon, getAzmoon,initAzmoon} from '../../../services/azmoonservice';

// create a component
const Question = ({navigation,route}) => {
    const [checked, setChecked] = useState('');
    const [data, setData] = useState('');
    const [fake, setFake] = useState(0);
    const [isModalVisible, setModalVisible] = useState(false);
    const {id} = route?.params ?? {};

    const toggleModal = () => {
     setModalVisible(!isModalVisible);
    };

    const closeModal=()=>{
      setModalVisible(!isModalVisible);
    }
    const [isModal2Visible, setModal2Visible] = useState(false);

    const toggleModal2 = () => {
     setModal2Visible(!isModal2Visible);
    };

    const closeModal2=()=>{
      setModal2Visible(!isModal2Visible);
    }
    useEffect(() => {

     console.log(111);
     console.log( getAzmoon());
     setData( getAzmoon());

     console.log(data.length);
    //  setFake(id)


    }, [fake]);
   const classes =()=>{
   return(
       <View>
           <View style={styles.header}>
      <Text  style={styles.headerTitle}>
        سوال {fake+1}
      </Text>
      <LinearGradient  colors={['#068DF6', '#16B2F5']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.etmam}>

     <TouchableOpacity onPress={toggleModal}>
     <Text style={{...myFontStyle.btnBold,color:Colors.white}}>
        اتمام آزمون
      </Text>
     </TouchableOpacity>
    </LinearGradient>
    <Modal isVisible={isModalVisible} onBackdropPress={closeModal} style={{justifyContent:'center',alignItems:'center'}}>
      <View style={styles.alertModal}>
      <View style={{flexDirection:'row',padding:10,justifyContent:'center'}}>
                  <Icon name={"notification-important"} color={'#cc1111'} size={30} style={{marginRight:5}}></Icon>
                  <Text style={{...myFontStyle.textOnImg,color:'#cc1111'}}>شما به 8 سوال پاسخ نداده اید !</Text>
                </View>
         <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:responsiveHeight(3)}}>
                    <View style={{width:responsiveWidth(32)}}>
                    <LinearGradient colors={['#CC1111', '#F43535'] }start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{borderRadius:3,padding:5}}>


                      <TouchableOpacity onPress={toggleModal2}>
                        <Text style={{...myFontStyle.btnBold,color:Colors.white,textAlign:'center'}}>اتمام آزمون</Text>
                        </TouchableOpacity>
                        </LinearGradient>
                    </View>

                   <View style={{width:responsiveWidth(32)}}>
                   <LinearGradient colors={['#3AC3FE', '#0284BB'] }start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{borderRadius:3,padding:5}}>


          <TouchableOpacity style={{}}>
          <Text style={{...myFontStyle.btnBold,color:Colors.white,textAlign:'center'}}>ادامه آزمون</Text>
          </TouchableOpacity>
          </LinearGradient>
                    </View>
                </View>
      </View>
    </Modal>
    <Modal isVisible={isModal2Visible} onBackdropPress={closeModal2} style={{justifyContent:'center',alignItems:'center'}}>
    <View style={styles.alertModal}>
      <View style={{flexDirection:'row',padding:10,justifyContent:'center',borderBottomColor:'#f4f4f4',borderBottomWidth:2}}>
                  <Icon name={"assignment"} color={'#cc1111'} size={30} style={{marginRight:5}}></Icon>
                  <Text style={{...myFontStyle.textOnImg,color:'#cc1111'}}>نتیجه آزمون بورد اطفال</Text>
                </View>
              <View style={{borderBottomColor:'#f4f4f4',borderBottomWidth:2,paddingBottom:responsiveHeight(2)}}>

              <Text style={styles.scoreText}>کل تعداد سوالات آزمون: 20 تا</Text>
                <Text style={styles.scoreText}>تعداد سوالات پاسخ داده شده: 12 تا</Text>
                <Text style={styles.scoreText}>تعداد پاسخ درست: 5 تا</Text>
              </View>
         <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:responsiveHeight(3)}}>

         <View style={{width:responsiveWidth(30)}}>
         <Text style={{...myFontStyle.btnBold,color:'#0D8424',textAlign:'left',fontSize:responsiveFontSize(2.5),marginLeft:responsiveWidth(3)}}>نمره شما: 14</Text>
                    </View>
                   <View style={{}}>
                   <LinearGradient colors={['#3AC3FE', '#0284BB'] }start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{borderRadius:3,paddingLeft:responsiveWidth(3),paddingRight:responsiveWidth(3),paddingBottom:responsiveHeight(1),paddingTop:responsiveHeight(1)}}>


          <TouchableOpacity style={{}}>
          <Text style={{...myFontStyle.btnBold,color:Colors.white,textAlign:'center'}}>بازگشت به صفحه ی آزمون ها</Text>
          </TouchableOpacity>
          </LinearGradient>
                    </View>
                </View>
      </View>
    </Modal>
    </View>
    <View style={styles.modalcontainer}
          >



                {/* <Text style={styles.txtSkyLine}>{item.title}</Text> */}
                <View style={{flexDirection:'row',alignItems:"center"}}>
                <Icon name={"label-important"} size={25} color={Colors.yellow}  style={{marginLeft:5,transform: [{rotateY: '180deg'}]}}/>
                <Text style={styles.txtSkyLine}>{data[fake]?.Text}</Text>

                </View>

<View>


      <View style={styles.viewRadio}>
      <RadioButton
            //   value={"option2"+item._id}
              status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
              color={Colors.yellow}

            />
            <Text style={styles.txtRadio}>{data[fake]?.Answer1}</Text>
            </View>
            <View style={styles.viewRadio}>

            <RadioButton
            //   value={"option2"+item._id}
              status={ checked === 'Second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('Second')}
        color={Colors.yellow}

            />

      <Text style={styles.txtRadio}>{data[fake]?.Answer2}</Text>
            </View>
          {/* <RadioButton
            value="Egypt"
            status={ checked === 'Egypt' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('Egypt')}
          /> */}
      <View style={styles.viewRadio}>

      <RadioButton
            //   value={"option2"+item._id}
              status={ checked === 'third' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('third')}
        color={Colors.yellow}

            />
       <Text style={styles.txtRadio}>{data[fake]?.Answer3}</Text>
            </View>
            <View style={styles.viewRadio}>

            <RadioButton
            //   value={"option2"+item._id}
              status={ checked === 'four' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('four')}
        color={Colors.yellow}

            />
        <Text style={styles.txtRadio}>{data[fake]?.Answer4}</Text>
            </View>
       </View>
          </View>
          <View  style={styles.viewFooter}>
          {
  fake!=data.length-1?
<TouchableOpacity onPress={()=>setFake(fake+1)}>
          <LinearGradient  colors={['#FFC444', '#F36F56']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.viewNext}>
<Icon name={"double-arrow"} size={20} color={Colors.white}/>
<Text style={{...myFontStyle.mediumBold,color:Colors.white}}>
  سوال بعدی
</Text>
</LinearGradient>
</TouchableOpacity>
:
null
}

{
  fake!=0?


<TouchableOpacity onPress={()=>setFake(fake-1)}>
<LinearGradient   colors={['#FFC444', '#F36F56']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.viewNext}>

<Text style={{...myFontStyle.mediumBold,color:Colors.white}}>
سوال قبلی
</Text>
<Icon name={"double-arrow"} size={20} style={{transform: [{rotateY: '180deg'}]}} color={Colors.white}/>
</LinearGradient>
</TouchableOpacity>
  :
null
}
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
  modalcontainer: {
    // flex: 1,
    alignSelf: "center",
    paddingHorizontal:responsiveWidth(5),
    marginTop: responsiveHeight(2),
    // height: responsiveHeight(20),
    width: responsiveWidth(90),
    shadowColor: '#878B92',
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 0},
    shadowRadius: 700,
    elevation: 20,
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    backgroundColor: Colors.white,
    borderRadius: 5,
    paddingBottom:  responsiveHeight(4),
    marginBottom:responsiveHeight(2)
    // marginTop:responsiveHeight(31),
    // marginBottom:responsiveHeight(33),
    // marginLeft:responsiveWidth(10),
    // marginRight:responsiveWidth(10),

  },alertModal:{

    width:responsiveWidth(80),
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
  headerTitle:{...myFontStyle.largBold,color:Colors.text,marginLeft:responsiveWidth(5)},
  header:{flexDirection:"row",justifyContent:'space-between',
  paddingLeft:responsiveWidth(2),paddingRight:responsiveWidth(5),
  marginTop:responsiveHeight(3)},
  etmam:{
      width:responsiveWidth(25),
      height:responsiveHeight(4),
      alignItems:'center',
      borderRadius:5,
  },
  viewNext:{
      width:responsiveWidth(30),
      height:responsiveHeight(4),
      alignItems:'center',
      justifyContent:'space-around',
      borderRadius:25,
      flexDirection:'row'
  },
  txtSkyLine: {
    color: Colors.text,
    ...myFontStyle.normalBold,
    marginTop:responsiveHeight(2),
    marginLeft:responsiveWidth(2),
    marginBottom:responsiveHeight(2)
  },
  txtRadio: {
    color: Colors.text,
    ...myFontStyle.mediumRegular,
    // lineHeight:responsiveHeight(3)

  },
  viewRadio: {flexDirection:'row',alignItems:'center',marginTop:responsiveHeight(1)},
  viewFooter: {flexDirection:'row',alignItems:'center',marginTop:responsiveHeight(1)
  ,justifyContent:"space-between",paddingHorizontal:responsiveWidth(5)}
  ,scoreText:{
    ...myFontStyle.normalRegular,color:'#000',
    paddingRight:responsiveWidth(5),
    paddingLeft:responsiveWidth(5),
    paddingTop:responsiveHeight(3),
    fontSize:responsiveFontSize(2.5),
  }
}
);

  export default Question;

