import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image, AsyncStorage } from 'react-native';
import { myFontStyle } from "../../assets/Constance";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors } from '../../assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';

import ViewSlider from 'react-native-view-slider'
// create a component
 const Home = ({navigation}) => {
const [user,setUser]=useState("");
const [pass,setPass]=useState("");
const [isLoading,setLoading]=useState(false);
const [eror,SetEror]=useState(false);
const [eror2,SetEror2]=useState(false);



//       const  mutLogin=async()=> {
//         setLoading(true);
// if(user=="" || pass==""){
//         alert("Please fill input")
//         SetEror(true)
// }

// else{

//         if((user=="user1"&&pass=="pass1")||(user=="user2"&&pass=="pass2")){
//                 setLoading(false);
// AsyncStorage.setItem("user","true")
//                 navigation.navigate("MainPage")
//         }
// else{
//         setLoading(false);
//          SetEror2(true)



// }


// }

//         };

return (
  <View style={styles.container}>


<View style={styles.parent}>
			<LinearGradient colors={['#16B2F5', '#0385BC']} style={styles.child}>
  
      		</LinearGradient>
          
      	</View>
        <View style={styles.customRow}> 
            <View style={{paddingLeft:20}}>
             <TouchableOpacity>
             <Icon name={"notes"} style={styles.menuIcon} size={50} color={"#fff"} style={{transform: [{rotateY: '180deg'}]}}/>
              
             </TouchableOpacity>
             </View>
            <View style={{flex : 2,textAlign:"right"}}>
              <Text style={styles.menuTitle}>نوآوران دانش(ماهان)</Text>
              </View>
            <View style={{flex :0.5}}>
              <TouchableOpacity style={styles.searchBTN}>
                <Icon name={"search"} color={"#16B2F5"} size={30}/>
              </TouchableOpacity>
              </View>
           
       </View>
    <View style={styles.bodyC}>
    <ViewSlider style={{borderRadius:10}}
        renderSlides = {
          <>
            <View style={styles.viewBox}>
            <Image source={require('../../assets/images/slide1.png')}style={{borderRadius:10,height:180}}></Image>
            </View>
            <View style={styles.viewBox}><Image source={require('../../assets/images/slide1.png')} style={{borderRadius:10,height:180}}></Image></View>
            <View style={styles.viewBox}><Image source={require('../../assets/images/slide1.png')}style={{borderRadius:10,height:180}}></Image></View>
          
         </>
      }
      style={styles.slider}     //Main slider container style
      height = {200}    //Height of your slider
      slideCount = {3}    //How many views you are adding to slide
      dots = {true}     // Pagination dots visibility true for visibile 
      dotActiveColor = '#FFCC00'     //Pagination dot active color
      dotInactiveColor = '#fff'    // Pagination do inactive color
      dotsContainerStyle={styles.dotContainer}     // Container style of the pagination dots
      autoSlide = {true}    //The views will slide automatically
      slideInterval = {5000}    //In Miliseconds
     />
     <View style={styles.customRowC}>
     <Image source={require('../../assets/images/slide1.png')} style={styles.image}/>
      <LinearGradient
      colors={[
      'rgba(203, 203, 203, 0.2)',
      'rgba(0, 0, 0, 0.2)',
      ' rgba(0, 0, 0, 0.4)',
      '#000'

      ]}

      style={styles.linearGradient}
      />
      <Image source={require('../../assets/images/pezeshkiLogo.png')} style={styles.logoAbsolute}/>
      <Text style={styles.textOverlay}>پزشکی</Text>
     </View>
     <View style={styles.columnC}>
      <View style={styles.item}>
      <Image source={require('../../assets/images/slide2.png')} style={styles.miniImage}/>
      </View>
      <View style={styles.item}>
      <Image source={require('../../assets/images/slide3.png')} style={styles.miniImage} />
      </View>

     </View>

    </View>

    








</View>
);
};

const styles = StyleSheet.create({

  container: {flex:3,backgroundColor:"#fff"},
  parent : {
    marginTop:responsiveHeight(-5),
    height : responsiveHeight(23),
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
login:{
  position:"absolute",
  top:responsiveHeight(8),
  width:responsiveWidth(80),
height:responsiveHeight(40),
  left:responsiveWidth(10),
  right:responsiveWidth(10),
},
loginTitle:{
 textAlign:"center",
 color: Colors.splashcolor,

...myFontStyle.largBold,
marginTop:responsiveHeight(3),
fontWeight:"bold",
},
loginView:{
  // width:responsiveWidth(80),
  // flex: 1,
  marginTop:responsiveHeight(3),

  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
},
textInputLogin:{
// borderBottomColor:"#ffb921",
// borderBottomWidth:2,
// width:"100%",

}
,customRow:{
  flex:1, flexDirection:"row-reverse",
  position:"absolute",
  top:responsiveHeight(5),
  paddingRight:20,
  paddingLeft:20,
},customRow2:{
  flex:1, flexDirection:"row-reverse",

  paddingRight:20,
  paddingLeft:20,
},customRowC:{
  flex:1, flexDirection:"row-reverse",


}
,menuIcon:{
 
}
,menuTitle:{
  fontFamily:"IRANSansBold",
  color:"#fff",
  fontSize:25,
  marginTop:responsiveHeight(1),
}
,searchBTN:{
  backgroundColor:"#fff",
  borderRadius:50,
  textAlign:"center",
  justifyContent:"center",
  height:50,
  width:50,
  padding:10,
  shadowColor: '#fff',
  shadowOpacity: 0.5,
  shadowOffset: { width: 5, height: 2},
  shadowRadius: 50,
  elevation: 7,
  
} , viewBox: {
  paddingHorizontal: 20,
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
  borderRadius:5,
  paddingRight:responsiveWidth(0),
  paddingLeft:responsiveWidth(0),
},
dotContainer: {
backgroundColor: 'transparent',
position: 'absolute',
bottom: 15
},bodyC:{
 marginTop:responsiveHeight(3),
 alignContent:"center",

},pic:{
  height:200,
  width:100,
},
  linearGradient: {
  width:responsiveWidth(90),
  height: 180,
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
    width:responsiveWidth(90),
    height: 180,
    position: 'absolute',
    top:responsiveHeight(0),
    paddingLeft:responsiveWidth(0),
   paddingRight:responsiveWidth(0),
   marginLeft:responsiveWidth(5),
    marginRight:responsiveWidth(5),
    borderRadius:10,
    marginTop:responsiveHeight(1),
    },  linearGradient3: {
      width:responsiveWidth(90),
      height: 180,
      position: 'absolute',
      top:responsiveHeight(0),
      paddingLeft:responsiveWidth(0),
     paddingRight:responsiveWidth(0),
     marginLeft:responsiveWidth(5),
      marginRight:responsiveWidth(5),
      borderRadius:10,
      marginTop:responsiveHeight(1),
      },
  image: {
  width: responsiveWidth(90),
  height: 180,
  opacity: 1,
  paddingLeft:responsiveWidth(0),
  paddingRight:responsiveWidth(0),
  marginLeft:20,
  marginRight:20,
  borderRadius:10,
  marginTop:responsiveHeight(1),
  }
  ,logoAbsolute:{
    position:'absolute',
    width:70,
    height:100,
    top:responsiveHeight(10),
    left:responsiveWidth(75),
  },textOverlay:{
    fontFamily:"IRANSansBold",
    color:"#fff",
    fontSize:25,
    position:'absolute',
    right:responsiveWidth(75),
    top:responsiveHeight(17),
  },columnC:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    alignContent:'space-between',
    top:responsiveHeight(26),
    paddingRight:responsiveWidth(5),
    paddingLeft:responsiveWidth(5), // if you want to fill rows left to right
  },
  item: {
    width: '48%', // is 50% of container width
  },miniImage:{
    width:'100%',
    height:50,

  }
  
  });

  export default Home;

//make this component available to the <app></app>
