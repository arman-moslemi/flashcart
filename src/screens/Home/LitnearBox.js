import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image, AsyncStorage, Dimensions } from 'react-native';
import { myFontStyle } from "../../assets/Constance";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors } from '../../assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import {TopBar} from '../../components/TopBar';
import { ScrollView } from 'react-native-gesture-handler';
import Box1 from '../../assets/images/box1';
import Box2 from '../../assets/images/box2';
import Box3 from '../../assets/images/box3';
import Box4 from '../../assets/images/box4';
import Box5 from '../../assets/images/box5';
// create a component
 const LitnearBox = ({navigation}) => {

  const classes =()=>{
return (
  <View style={styles.container}>
        <View style={styles.pageBody}>
        <Text style={styles.pageHeader}>لایتنر</Text>
        <ScrollView>
          <View style={styles.arrowRow}>
           <View style={styles.arrow} >
              <Image source={require('../../assets/images/red.png')} style={styles.redArrow}/>
            </View>
            <View style={styles.arrow} >
              <Image source={require('../../assets/images/orange.png')} style={styles.orangeArrow}/>
            </View>
            <View style={styles.arrow} >
              <Image source={require('../../assets/images/Green.png')} style={styles.greenArrow}/>
            </View> 
            <View style={styles.arrow} >
              <Image source={require('../../assets/images/lightGreen.png')} style={styles.lightGreenArrow}/>
            </View>
            </View>
          <View style={{flexDirection:'row',marginTop:-2}}>
            <TouchableOpacity style={styles.miniBoxL}  onPress={()=>navigation.navigate("LitnearBoxCardList")}>
              <Box1/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.miniBoxL}  onPress={()=>navigation.navigate("Favorite")}>
              <Box2/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.miniBoxL} onPress={()=>navigation.navigate("TicketsList")}>
              <Box3/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.miniBoxL} onPress={()=>navigation.navigate("Rules")}>
              <Box4/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.miniBoxL}>
              <Box5/>
              </TouchableOpacity>  
          </View>
          <View style={{flexDirection:'row'}}>
            <View style={styles.polygon}>
                <Image source={require('../../assets/images/Polygon.png')} style={{alignSelf:'center',width:20}}/>
              </View>
              <View style={styles.polygon}>
                <Image source={require('../../assets/images/Polygon.png')} style={{alignSelf:'center'}}/>
              </View>
              <View style={styles.polygon}>
                <Image source={require('../../assets/images/Polygon.png')} style={{alignSelf:'center'}}/>
              </View>
              <View style={styles.polygon}>
                <Image source={require('../../assets/images/Polygon.png')} style={{alignSelf:'center'}}/>
              </View>
              <View style={styles.polygon}>
                <Image source={require('../../assets/images/Polygon.png')} style={{alignSelf:'center'}}/>
              </View>
            </View>
          <View style={{padding:10,flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',}}>
            <View style={styles.flashCardBox2}>
            <View style={styles.yellowBox}>
              <View style={{width:responsiveWidth(90),height:5}}>

                 <Text style={styles.answerTitle}>سوال</Text>

              </View>


            </View>
            <View style={styles.textBoxCard}>
            <Text style={styles.questionText}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است  </Text>

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
           
            </View>

        </View>
        <View style={styles.btnBox}>
          
              <TouchableOpacity style={styles.btnFlash1} onPress={()=>navigation.navigate("AboutUs")}>
                  <View style={styles.iconBox1}>
                  <Icon size={20} name={'done-all'} color={'#fff'} style={{alignSelf:'center'}}></Icon>
                    </View>
                  <Text style={styles.btnFlashText1}>کاملا بلدم</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnFlash2}>
              <View style={styles.iconBox2}>
                  <Icon size={20} name={'done'} color={'#fff'} style={{alignSelf:'center'}}></Icon>
                    </View>
                  <Text style={styles.btnFlashText2}>بلدم</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnFlash3}>
              <View style={styles.iconBox3}>
                  <Icon size={20} name={'priority-high'} color={'#fff'} style={{alignSelf:'center'}}></Icon>
                    </View>
                  <Text style={styles.btnFlashText3}>تاحدی بلدم</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnFlash4}>
              <View style={styles.iconBox4}>
                  <Icon size={20} name={'close'} color={'#fff'} style={{alignSelf:'center'}}></Icon>
                    </View>
                  <Text style={styles.btnFlashText4}>بلد نیستم</Text>
              </TouchableOpacity>
            
            </View>
        </ScrollView>
        </View>
     


</View>
)}
return (
  <TopBar Classes={classes} />
  
  );
};

const styles = StyleSheet.create({

  container: {flex:3,backgroundColor:'#FAFAFB'},
  pageHeader:{
    ...myFontStyle.textOnImg,
    color:'#0384BC',
   
},pageBody:{
  paddingTop:responsiveHeight(2),
  paddingRight:responsiveWidth(6),
  paddingBottom:responsiveHeight(2),
  paddingLeft:responsiveWidth(6),
},
menuTitle:{
  fontFamily:"IRANSansBold",
  color:"#fff",
  fontSize:25,
  marginTop:responsiveHeight(1),
},miniBoxL:{
  width:responsiveWidth(15),
  backgroundColor:'#fff',
  borderRadius:5,
  shadowColor: '#DEE0E3',
    shadowOpacity: 0.9,
    shadowOffset: { width: 2, height: 0},
    shadowRadius: 700,
    elevation: 10,
    padding:10,
    margin:responsiveWidth(1.5),
    justifyContent:'center',
    alignContent:'center',
    textAlign:'center',
  
},polygon:{
  width:responsiveWidth(15),
  marginRight:responsiveWidth(1.5),
  marginLeft:responsiveWidth(1.5),
  textAlign:'center',
  justifyContent:'center',
  alignContent:'center',
  flexDirection:'column'
}

,arrowRow:{
  marginTop:responsiveHeight(5)
}
,redArrow:{
  position:'absolute',
  bottom:0,
  left:responsiveWidth(26),
},orangeArrow:{
  position:'absolute',
  bottom:0,
  left:responsiveWidth(42),
},greenArrow:{
  position:'absolute',
  bottom:0,
  left:responsiveWidth(8),
},lightGreenArrow:{
  position:'absolute',
  bottom:0,
  left:responsiveWidth(62),
  
}, flashCardBox2:{
  backgroundColor:'#fff',
  borderRadius:3,

  height:responsiveHeight(20),
  width:responsiveWidth(90),
  shadowColor: '#DEE0E3',
    shadowOpacity: 0.01,
    shadowOffset: { width: 20, height: 2},
    shadowRadius: 1000,
    elevation: 8,
    marginTop:responsiveHeight(-0.5),
},
yellowBox:{
  backgroundColor:'#FFC444',
  height:responsiveHeight(4),

  flexDirection:'row',
},answerTitle:{
  ...myFontStyle.largBold,
  position:'absolute',
  left:responsiveWidth(5),
  top:responsiveHeight(-0.2),
  fontSize:responsiveFontSize(2.5),
  color:'#fff',
},questionText:{
  ...myFontStyle.normalRegular,
  position:'absolute',
  color:'#000',
paddingRight:responsiveWidth(3),
paddingLeft:responsiveWidth(3),
marginLeft:10,
marginTop:10,
marginRight:10,
  textAlign:'left',
  lineHeight:responsiveHeight(4),
},btnBox:{
  marginTop:responsiveHeight(2),
  backgroundColor:'#fff',
  borderRadius:3,
  flexDirection: 'row',
  height:responsiveHeight(6),
  width:responsiveWidth(90),
  shadowColor: '#DEE0E3',
    shadowOpacity: 0.01,
    shadowOffset: { width: 2, height: 0},
    shadowRadius: 10,
    elevation: 20,
},btnFlash1:{
  width:responsiveWidth(22.5),
  backgroundColor:'#fff',
  height:responsiveHeight(6),
  justifyContent:'center',
  borderRightColor:'#ECEDEF',
  borderRightWidth:1,
  
}
,btnFlash2:{
  width:responsiveWidth(22.5),
  backgroundColor:'#fff',
  height:responsiveHeight(6),
  justifyContent:'center',
  borderRightColor:'#ECEDEF',
  borderRightWidth:1,
}
,btnFlash3:{
  width:responsiveWidth(22.5),
  backgroundColor:'#fff',
  height:responsiveHeight(6),
  justifyContent:'center',
  borderRightColor:'#ECEDEF',
  borderRightWidth:1,
},btnFlash4:{
  width:responsiveWidth(22.5),
  backgroundColor:'#fff',
  height:responsiveHeight(6),
  justifyContent:'center',
}
,btnFlashText1:{
  ...myFontStyle.btnBold,
  color:'#0D8424',
  alignSelf:'center',
  marginTop:responsiveHeight(1),
}
,btnFlashText2:{
  ...myFontStyle.btnBold,
  color:'#15C837',
  alignSelf:'center',
  marginTop:responsiveHeight(1),
}
,btnFlashText3:{
  ...myFontStyle.btnBold,
  color:'#F69D0D',
  alignSelf:'center',
  marginTop:responsiveHeight(1),
}
,btnFlashText4:{
  ...myFontStyle.btnBold,
  color:'#E82B63',
  alignSelf:'center',
  marginTop:responsiveHeight(1),
},iconBox1:{
  width:25,
  height:25,
  backgroundColor:'#0D8424',
  borderRadius:50,
  marginTop:responsiveHeight(-2),
  alignSelf:'center',
  alignContent:'center',
  justifyContent:'center',
},iconBox2:{
  width:25,
  height:25,
  backgroundColor:'#15C837',
  borderRadius:50,
  marginTop:responsiveHeight(-2),
  alignSelf:'center',
  alignContent:'center',
  justifyContent:'center',
},iconBox3:{
  width:25,
  height:25,
  backgroundColor:'#F69D0D',
  borderRadius:50,
  marginTop:responsiveHeight(-2),
  alignSelf:'center',
  alignContent:'center',
  justifyContent:'center',
},iconBox4:{
  width:25,
  height:25,
  backgroundColor:'#E82B63',
  borderRadius:50,
  marginTop:responsiveHeight(-2),
  alignSelf:'center',
  alignContent:'center',
  justifyContent:'center',
}
});

  export default LitnearBox;

//make this component available to the <app></app>
