import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image, AsyncStorage } from 'react-native';
import { myFontStyle } from "../../assets/Constance";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Colors } from '../../assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import {TopBar} from '../../components/TopBar';
import Box1 from '../../assets/images/box1';
import Box2 from '../../assets/images/box2';
import Box3 from '../../assets/images/box3';
import Box4 from '../../assets/images/box4';
import Box5 from '../../assets/images/box5';
import Svg, { Path } from 'react-native-svg';
import DropDownPicker from 'react-native-dropdown-picker';
// create a component
 const FlashCardView = ({navigation}) => {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
     setModalVisible(!isModalVisible);
    };

    const closeModal=()=>{
      setModalVisible(!isModalVisible);
    }
    const [isModalVisible2, setModalVisible2] = useState(false);

    const toggleModal2 = () => {
     setModalVisible2(!isModalVisible2);
    };

    const closeModal2=()=>{
      setModalVisible2(!isModalVisible2);
    }
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'خیلی آسان', value: 'very easy'},
      {label: 'آسان', value: 'easy'},
      {label: 'متوسط', value: 'medium'},
      {label: 'سخت', value: 'hard'},
      {label: 'خیلی سخت', value: 'very hard'},
      {label: 'راهنمایی از استاد', value: 'guide'},
    ]);
    const classes =()=>{
      return(
        <View style={styles.container}>
        <View style={{padding:10,flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',}}>
            <View style={styles.flashCardBox}>
            <View style={styles.yellowBox}>
              <View style={{width:responsiveWidth(38),height:5}}>
                <TouchableOpacity style={styles.nextBtn}  onPress={toggleModal}>
                  <Icon name={"chevron-right"} color={'#fff'} size={30} style={{position:'absolute'}}></Icon>
                  <Text style={styles.nextBtnText}>بعدی</Text>
                </TouchableOpacity>
                <Modal isVisible={isModalVisible} onBackdropPress={closeModal} style={{justifyContent:'center',alignItems:'center'}}>
                <View style={styles.rateModal}>
                  <Text style={styles.modalTitle}>نظر خود را راجع به این سوال ثبت نمایید.</Text>
                  <Rating
                    type='star'
                    ratingCount={5}
                    imageSize={40}
                    showRating
                    ratingTextColor={'#fff'}
                    ratingColor={'#FFC444'}
                  />

                  <View style={{flexDirection:'row',marginTop:responsiveHeight(3)}}>
                    <View style={{width:'70%'}}>
                    <LinearGradient colors={['#CC1111', '#F43535'] }start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{borderRadius:3,padding:5}}>


                      <TouchableOpacity style={styles.notShowBtn}>
                        <Text style={styles.modalBtnText}>تمایلی به ثبت نظر ندارم،دیگر نمایش نده.</Text>
                        </TouchableOpacity>
                        </LinearGradient>
                    </View>
                    <View style={{width:'2%'}}></View>
                   <View style={{width:'28%'}}>
                   <LinearGradient colors={['#3AC3FE', '#0284BB'] }start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{borderRadius:3,padding:5}}>


          <TouchableOpacity style={styles.notShowBtn}>
          <Text style={styles.modalBtnText}>ثبت نظر</Text>
          </TouchableOpacity>
          </LinearGradient>
                    </View>
                </View>
                </View>
              </Modal>
              </View>
              <View style={{justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity style={styles.favoriteBtn}>
                  <Icon name={"favorite-border"} size={40} color={'#ffc444'}></Icon>
                </TouchableOpacity>
              </View>
              <View style={{width:responsiveWidth(38),height:5}}>
              <TouchableOpacity style={styles.nextBtn}>
                  <Icon name={"chevron-left"} color={'#fff'} size={30} style={{position:'absolute',right:responsiveWidth(3)}}></Icon>
                  <Text style={styles.preBtnText}>قبلی</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.textBoxCard}>
            <Text style={styles.questionText}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است  </Text>

            </View>
           <View style={{position:'absolute',bottom:responsiveHeight(2),right:responsiveWidth(5)}}>
           <TouchableOpacity style={styles.seeAnswerBtn}>
              <Text style={styles.seeAnswer}>مشاهده پاسخ</Text>
            </TouchableOpacity>
           </View>
            </View>

        </View>

        <View style={{padding:10,flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',}}>
            <View style={styles.flashCardBox2}>
            <View style={styles.yellowBox}>
              <View style={{width:responsiveWidth(90),height:5}}>

                 <Text style={styles.answerTitle}>پاسخ</Text>

              </View>


            </View>
            <View style={styles.textBoxCard}>
            <Text style={styles.questionText}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است  </Text>

            </View>
           <View style={{position:'absolute',bottom:responsiveHeight(2),left:responsiveWidth(5)}}>
           <TouchableOpacity style={styles.seeAnswerBtn}>
              <Text style={styles.seeAnswer}>توضیح بیشتر</Text>
            </TouchableOpacity>
           </View>
            </View>

        </View>
        <View style={{paddingleft:responsiveWidth(5),flexDirection:'row',marginTop:10}}>
           <View style={{width:'50%'}}>
           <TouchableOpacity style={styles.returnFirst2} onPress={toggleModal2}>
           <Text style={styles.addLitnearText}>افزودن به جعبه لایتنر</Text>
           <Icon name={"add"} color={'#3AC3FE'} size={25} style={{position:'absolute',left:responsiveWidth(1)}}></Icon>


           </TouchableOpacity>
           <Modal isVisible={isModalVisible2} onBackdropPress={closeModal2} style={{justifyContent:'center',alignItems:'center'}}>
                <View style={styles.rateModal}>
                  <Text style={styles.modalTitle2}>جهت افزودن به جعبه لایتنر،درجه سختی کارت را انتخاب نمایید.</Text>
                <View style={styles.boxRow}>
                  <Box1 style={styles.inlineBox} />
                  <Box2 style={styles.inlineBox}/>
                  <Box3 style={styles.inlineBox}/>
                  <Box4 style={styles.inlineBox}/>
                  <Box5 style={styles.inlineBox}/>
                </View>
                <View style={{flexDirection:'row',marginTop:responsiveHeight(2)}}>
                <View style={{width:'50%'}}>
                <Text style={styles.modalTitle2}>درجه سختی این کارت:</Text>
               
                 </View>
                 <View style={{width:'50%'}}>
                 <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      // width={100}
      style={{
        borderColor:'#F1F1F1',
        borderWidth:2,
        // margin:5,
        width:responsiveWidth(37)
      }}
      placeholder="انتخاب کنید"
      zIndex={1000}
      dropDownContainerStyle={{
        borderColor:'#F1F1F1',
        borderWidth:2,
      borderRadius:5}}
    />
                   </View>
                   </View>
                   <View style={{flexDirection:'row',marginTop:responsiveHeight(3)}}>
                   <View style={{width:'42%'}}></View>
                    <View style={{width:'28%'}}>
                    <LinearGradient colors={['#CC1111', '#F43535'] }start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{borderRadius:3,padding:5}}>


                      <TouchableOpacity style={styles.notShowBtn}>
                        <Text style={styles.modalBtnText}>بستن</Text>
                        </TouchableOpacity>
                        </LinearGradient>
                    </View>
                    <View style={{width:'2%'}}></View>
                   <View style={{width:'28%'}}>
                   <LinearGradient colors={['#3AC3FE', '#0284BB'] }start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{borderRadius:3,padding:5}}>


          <TouchableOpacity style={styles.notShowBtn}>
          <Text style={styles.modalBtnText}>افزودن به لایتنر</Text>
          </TouchableOpacity>
          </LinearGradient>
                    </View>
                </View>
                </View>
              </Modal>
          </View>
           <View style={{width:'50%'}}>
           <TouchableOpacity style={styles.returnFirst}>

             <Text style={styles.returnText}>بازگشت به اولین سوال</Text>
             <Icon name={"chevron-left"} color={'#3AC3FE'} size={30} style={{position:'absolute',right:responsiveWidth(0)}}></Icon>
           </TouchableOpacity>
           </View>
        </View>
        </View>
      )
      }
return (

  <TopBar Classes={classes}/>

);
};

const styles = StyleSheet.create({

  container: {flex:3,backgroundColor:"#FAFAFB"},
  flashCardBox:{
    backgroundColor:'#fff',
    borderRadius:3,

    height:responsiveHeight(30),
    width:responsiveWidth(90),
    shadowColor: '#878B92',
      shadowOpacity: 0.1,
      shadowOffset: { width: 2, height: 0},
      shadowRadius: 700,
      elevation: 20,
      marginTop:responsiveHeight(5),
  }, flashCardBox2:{
    backgroundColor:'#fff',
    borderRadius:3,

    height:responsiveHeight(30),
    width:responsiveWidth(90),
    shadowColor: '#878B92',
      shadowOpacity: 0.1,
      shadowOffset: { width: 2, height: 0},
      shadowRadius: 700,
      elevation: 20,
      marginTop:responsiveHeight(1),
  },
  yellowBox:{
    backgroundColor:'#FFC444',
    height:responsiveHeight(4),

    flexDirection:'row',
  },favoriteBtn:{
    height:65,
    width:65,
    backgroundColor:'#fff',
   borderRadius:100,
   marginTop:responsiveHeight(-2),
   borderColor:'#ffc444',
   borderWidth:1,
   justifyContent: 'center',
   alignItems: 'center',
  },nextBtnText:{
    ...myFontStyle.largBold,
    position:'absolute',
    left:responsiveWidth(8),
    top:responsiveHeight(-0.8),
    color:'#fff',
    fontSize:responsiveFontSize(3),
  },nextBtn:{
    flexDirection:'row',
  }
  ,preBtnText:{
   ...myFontStyle.largBold,
    position:'absolute',
    right:responsiveWidth(12),
    top:responsiveHeight(-0.8),
    color:'#fff',
    // fontSize:responsiveFontSize(3),
  },questionText:{
    ...myFontStyle.normalRegular,
    position:'absolute',
    color:'#000',

  marginLeft:10,
  marginTop:10,
  marginRight:10,
    textAlign:'left',
  },textBoxCard:{

  },seeAnswerBtn:{
    backgroundColor:'#fff',
    borderStyle:"dashed",
    borderBottomWidth:2,
    borderBottomColor:'#ffc444',
    paddingRight:10,
    paddingLeft:10,
    paddingTop:8,
    paddingBottom:8,
    justifyContent:'center',
    textAlign:'center',
    alignContent:'center',

  }
  ,seeAnswer:{
    ...myFontStyle.btnBold,
    color:'#ffc444',
    fontSize:responsiveFontSize(2),
  },returnFirst:{
backgroundColor:'#fff',
height:20,
shadowColor: '#878B92',
shadowOpacity: 0.1,
shadowOffset: { width: 2, height: 0},
shadowRadius: 700,
elevation: 20,
width:responsiveWidth(43),
paddingBottom:responsiveHeight(5),
justifyContent:'center',
alignContent:'center',
borderRadius:3,
right:responsiveWidth(-2.5),
  },returnFirst2:{
    backgroundColor:'#fff',
    height:20,
    shadowColor: '#878B92',
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 0},
    shadowRadius: 700,
    elevation: 20,
    width:responsiveWidth(43),
    paddingBottom:responsiveHeight(5),
    justifyContent:'center',
    alignContent:'center',
   right:responsiveWidth(-6),
   borderRadius:3,
      }
  ,returnText:{
    color:'#3AC3FE',
    ...myFontStyle.btnBold,
    position:'absolute',
    left:responsiveWidth(2),

  },answerTitle:{
    ...myFontStyle.largBold,
    position:'absolute',
    left:responsiveWidth(5),
    top:responsiveHeight(-0.2),
    fontSize:responsiveFontSize(2.5),
    color:'#fff',
  },addLitnearText:{
    color:'#3AC3FE',
    ...myFontStyle.btnBold,
    position:'absolute',
    right:responsiveWidth(8),

  },rateModal:{
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
    paddingRight:responsiveWidth(3),
    paddingLeft:responsiveWidth(3),
  }
  ,modalTitle:{
    ...myFontStyle.btnBold,
    color:'#FFC444',
    textAlign:'center',
    fontSize:responsiveFontSize(2.5),
  }
  ,notShowBtn:{
   textAlign:'center',

  },
  modalBtnText:{
    ...myFontStyle.mediumBold,
    color:'#fff',
    textAlign:'center',
    fontSize:responsiveFontSize(1.5),
  },modalTitle2:{
    ...myFontStyle.normalBold,
    color:'#000',
    fontSize:responsiveFontSize(1.7),
    textAlign:'center',
  },inlineBox:{
     margin:10,
  }
  ,boxRow:{
    flexDirection:'row-reverse',
    textAlign:'center',
    alignContent:'center',
    justifyContent:'center',
    marginTop:responsiveHeight(2),
  }
  });

  export default FlashCardView;

