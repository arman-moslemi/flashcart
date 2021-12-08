import React, { useState,useEffect,useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image, AsyncStorage ,I18nManager,Pressable,Linking} from 'react-native';
import { myFontStyle } from "../../assets/Constance";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors } from '../../assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import DrawerContent from '../../components/drewerContent/DrawerContent';
import Drawer from 'react-native-drawer'
import ViewSlider from 'react-native-view-slider';
import axios from 'axios';
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";
import { ScrollView } from 'react-native-gesture-handler';
import Pushe from "pushe-react-native";
// create a component
 const Home = ({navigation}) => {
const [slider1,setSlider1]=useState("");
const [slider2,setSlider2]=useState("");
const [slider3,setSlider3]=useState("");
const [slider4,setSlider4]=useState("");
const [data,setData]=useState([]);
const [pezeshki,setpezeshki]=useState("");
const [board,setBoard]=useState("");
const [dandan,setDandan]=useState("");
const [load,setLoad]=useState(true);

const drawers = useRef(null);
I18nManager.forceRTL(true);
useEffect(() => {
Pushe.initialize();
    mutLogin();


}, []);
      const  mutLogin=async()=> {
        axios.get(apiUrl+'AllMainGroup')
        .then(function (response) {
          const message = response.data.Data;
          const result = response.data.result;
          console.log(result);
          console.log(response.data.DataSlider.Slider1);
          console.log(response.data.DataSlider.Slider1);
          if(result == "true"){

            setSlider1(response.data.DataSlider.Slider1)
            setSlider2(response.data.DataSlider.Slider2)
            setSlider3(response.data.DataSlider.Slider3)
            setSlider4(response.data.DataSlider.Slider4)
            setData(response.data.DataSlider)
            setpezeshki(response.data.DataMaingroup[0].Photo)
            setBoard(response.data.DataMaingroup[1].Photo)
            setDandan(response.data.DataMaingroup[2].Photo)
            console.log(apiAsset+slider1);
            setLoad(true)
            // navigation.navigate("ChangePass",{mobile:user,verify:response.data.Data})
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
  <View style={styles.container}>


<View style={styles.parent}>
			<LinearGradient colors={['#16B2F5', '#0385BC']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.child}>

      		</LinearGradient>

      	</View>
        <View style={styles.customRow}>
            <View style={{paddingLeft:0}}>
             <TouchableOpacity onPress={()=>drawers.current.open()}>
             <Icon name={"notes"} style={styles.menuIcon} size={responsiveHeight(5)} color={"#fff"}/>

             </TouchableOpacity>
             </View>
            <View style={{flex : 2,textAlign:"right"}}>
              <Text style={styles.menuTitle}>نوآوران دانش(ماهان)</Text>
              </View>
            <View style={{flex :0.5}}>
              <TouchableOpacity onPress={()=>navigation.navigate("FlashCardSearch")} style={styles.searchBTN}>
                <Icon name={"search"} color={"#16B2F5"} size={responsiveHeight(3.5)}/>
              </TouchableOpacity>
              </View>

       </View>
      {
        load?

    <ScrollView style={styles.bodyC}>
    <ViewSlider
        renderSlides = {
          <>
            <TouchableOpacity onPress={()=>Linking.openURL(data?.Link1)} style={styles.viewBox}>
            <Image source={{uri:apiAsset + slider1}} resizeMode={"stretch"} style={styles.imageSlider}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Linking.openURL(data?.Link2)} style={styles.viewBox}><Image source={{uri:apiAsset+slider2}}  resizeMode={"stretch"} style={styles.imageSlider}></Image></TouchableOpacity>
            <TouchableOpacity onPress={()=>Linking.openURL(data?.Link3)} style={styles.viewBox}><Image source={{uri:apiAsset+slider3}}  resizeMode={"stretch"} style={styles.imageSlider}></Image></TouchableOpacity>
            <TouchableOpacity onPress={()=>Linking.openURL(data?.Link4)} style={styles.viewBox}><Image source={{uri:apiAsset+slider4}}  resizeMode={"stretch"} style={styles.imageSlider}></Image></TouchableOpacity>

            </>
      }
      style={styles.slider}     //Main slider container style
      height = {responsiveHeight(25)}    //Height of your slider
      slideCount = {4}    //How many views you are adding to slide
      dots = {true}     // Pagination dots visibility true for visibile
      dotActiveColor = '#FFCC00'     //Pagination dot active color
      dotInactiveColor = '#fff'    // Pagination do inactive color
      dotsContainerStyle={styles.dotContainer}     // Container style of the pagination dots
      autoSlide = {true}    //The views will slide automatically
      slideInterval = {5000}    //In Miliseconds
     />
     <TouchableOpacity onPress={()=>navigation.navigate("MainCategory",{id:1})} style={styles.customRowC}>
     <Image source={{uri:apiAsset+pezeshki}} style={styles.image}/>
      <LinearGradient
      colors={[
      'rgba(203, 203, 203, 0.2)',
      'rgba(0, 0, 0, 0.2)',
      ' rgba(0, 0, 0, 0.4)',
      '#000'

      ]}

      style={styles.linearGradient}
      />
      <Image
      //  source={require('../../assets/images/pezeshkiLogo.png')}
       source={require('../../assets/images/pezeshkiLogo.png')}
       onPress={()=>navigation.navigate("MainCategory",{id:1})}
      style={styles.logoAbsolute}/>
      <Text style={styles.textOverlay}>پزشکی</Text>
     </TouchableOpacity>
     <View  style={styles.columnC}>
      <TouchableOpacity onPress={()=>navigation.navigate("MainCategory",{id:3})} style={styles.item1}>
      {/* <Image source={require('../../assets/images/slide2.png')} style={styles.miniImage}/> */}
      <Image source={{uri:apiAsset+board}} style={styles.miniImage}/>
      <LinearGradient
      colors={[
      'rgba(203, 203, 203, 0.2)',
      'rgba(0, 0, 0, 0.2)',
      ' rgba(0, 0, 0, 0.4)',
      '#000'

      ]}

      style={styles.linearGradient2}
      />
      <Text style={styles.textOverlay2}>بورد</Text>
      <Image source={require('../../assets/images/boardHome.png')} style={styles.logoAbsolute2}/>

      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("MainCategory",{id:2})} style={styles.item2}>
      {/* <Image source={require('../../assets/images/slide2.png')} style={styles.miniImage} /> */}
      <Image source={{uri:apiAsset+dandan}} style={styles.miniImage} />
      <LinearGradient
      colors={[
      'rgba(203, 203, 203, 0.2)',
      'rgba(0, 0, 0, 0.2)',
      ' rgba(0, 0, 0, 0.4)',
      '#000'

      ]}

      style={styles.linearGradient2}
      />
       <Image source={require('../../assets/images/dandanHome.png')} style={styles.logoAbsolute2}/>
      <Text style={styles.textOverlay2}>دندان پزشکی</Text>
      </TouchableOpacity>

     </View>

    </ScrollView>
        :
        null
      }










</View>
</Drawer>
);
};

const styles = StyleSheet.create({

  container: {flex:3,backgroundColor:"#fff"},
  parent : {
    marginTop:responsiveHeight(-5),
    height : responsiveHeight(20),
    width : '100%',
    transform : [ { scaleX : 1.5 } ],
    borderBottomStartRadius : 800,
    borderBottomEndRadius : 800,
    overflow : 'hidden',
},
child : {
    flex : 1,
    transform : [ { scaleX : 1 } ],


    alignItems : 'center',
    justifyContent : 'center',

},
imageSlider:
  {borderRadius:10,height:responsiveHeight(20),width:responsiveWidth(90)}
,
drawerStyles: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
customRow:{
  flex:1, flexDirection:"row",
  position:"absolute",
  top:responsiveHeight(3),
  paddingRight:responsiveWidth(10),
  paddingLeft:responsiveWidth(10),
},customRow2:{
  flex:1, flexDirection:"row-reverse",

  paddingRight:responsiveWidth(10),
  paddingLeft:responsiveWidth(10),
},customRowC:{
  flex:1, flexDirection:"row",


}
,menuIcon:{
  transform: [{rotateY: '180deg'}]
}
,menuTitle:{
  // fontFamily:"IRANSansBold",
  ...myFontStyle.largBold,
  color:"#fff",
  // fontSize:25,
  marginTop:responsiveHeight(1),
}
,searchBTN:{
  backgroundColor:"#fff",
  borderRadius:50,
  textAlign:"center",
  justifyContent:"center",
  height:responsiveHeight(6),
  width:responsiveWidth(12),
  padding:10,
  shadowColor: '#fff',
  shadowOpacity: 0.5,
  shadowOffset: { width: 5, height: 2},
  shadowRadius: 50,
  elevation: 7,

} , viewBox: {
  paddingHorizontal: responsiveScreenWidth(10),
  justifyContent: 'center',
  width: responsiveWidth(100),
  padding: 0,
  alignItems: 'center',
  height: "100%",

},
slider: {
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius:10,
  paddingRight:responsiveWidth(0),
  paddingLeft:responsiveWidth(0),
},
dotContainer: {
backgroundColor: 'transparent',
position: 'absolute',
bottom: responsiveHeight(2)
},bodyC:{
 marginTop:responsiveHeight(1),
 alignContent:"center",

},pic:{
  height:200,
  width:100,
},
  linearGradient: {
  width:responsiveWidth(90),
  height: responsiveHeight(22),
  position: 'absolute',
  top:responsiveHeight(0),
  paddingLeft:responsiveWidth(5),
 paddingRight:responsiveWidth(5),
 marginLeft:responsiveWidth(5),
  marginRight:responsiveWidth(5),
  borderRadius:10,
  marginTop:responsiveHeight(1),
  },
  linearGradient2: {
    width:responsiveWidth(43),
    height: responsiveHeight(22),
    position: 'absolute',
    // top:responsiveHeight(0),
    paddingLeft:responsiveWidth(0),
   paddingRight:responsiveWidth(0),
   marginLeft:responsiveWidth(0),
    marginRight:responsiveWidth(0),
    borderRadius:10,
    marginTop:responsiveHeight(0),
    },
  image: {
  width: responsiveWidth(90),
  height: responsiveHeight(22),
  opacity: 1,
  paddingLeft:responsiveWidth(0),
  paddingRight:responsiveWidth(0),
  marginLeft:responsiveWidth(5),
  marginRight:responsiveWidth(5),
  borderRadius:10,
  marginTop:responsiveHeight(0.5),
  }
  ,logoAbsolute:{
    position:'absolute',
    width:responsiveWidth(17),
    height:responsiveHeight(13),
    top:responsiveHeight(10),
    left:responsiveWidth(75),
  },textOverlay:{

    color:"#fff",
    ...myFontStyle.UltraBold,
    position:'absolute',
    right:responsiveWidth(78),
    top:responsiveHeight(18),
  },logoAbsolute2:{
    position:'absolute',
    width:responsiveWidth(15),
    height:responsiveHeight(9),
    top:responsiveHeight(12),
    right:responsiveWidth(2),
  },textOverlay2:{
   ...myFontStyle.largBold,
    color:"#fff",

    position:'absolute',
    left:responsiveWidth(2),
    top:responsiveHeight(17),
  }
  ,columnC:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    alignContent:'space-between',
      paddingTop:responsiveHeight(3),
    paddingRight:responsiveWidth(5),
    paddingLeft:responsiveWidth(5),
     // if you want to fill rows left to right
  },
  item1: {
    width: '47.5%',
    textAlign:'right',
    marginRight:'2%',
    marginLeft:'0%',
    // is 50% of container width
  }, item2: {
    width: '47.5%',
    textAlign:'right',
    marginRight:'0%',
    marginLeft:'2%',
    // is 50% of container width
  },miniImage:{
    width:'100%',
    height:responsiveHeight(22),
    borderRadius:10,

  }

  });

  export default Home;

//make this component available to the <app></app>
