import React, { useState,useEffect,useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image, AsyncStorage ,I18nManager,Dimensions} from 'react-native';
import { myFontStyle } from "../../assets/Constance";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors } from '../../assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import DrawerContent from '../../components/drewerContent/DrawerContent';
import Drawer from 'react-native-drawer'
import { ScrollView } from 'react-native-gesture-handler';

// create a component
 const AboutUs = ({navigation}) => {
const [user,setUser]=useState("");
const [pass,setPass]=useState("");
const [isLoading,setLoading]=useState(false);
const [eror,SetEror]=useState(false);
const [eror2,SetEror2]=useState(false);
const drawers = useRef(null);
I18nManager.forceRTL(true);


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
			<LinearGradient colors={['#16B2F5', '#0385BC']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}  style={styles.child}>

      		</LinearGradient>

      	</View>
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
      <TouchableOpacity onPress={()=>navigation.goBack()} style={{}}>
        <Icon name={"chevron-left"} color={"#fff"} size={30} style={{marginTop:10}}/>
      </TouchableOpacity>
      </View>

</View>
<View style={styles.customRow2}>
       <View style={styles.logoBox}>
           <Image source={require('../../assets/images/pezeshkiLogo.png')} style={styles.logoSize}/>
       </View>
       </View>
<ScrollView style={{alignContent:'center',marginBottom:20}}>
<View style={styles.aboutBox}>
<View style={{flexDirection:'row'}}>
<View style={{width:'100%'}}>
<Text style={styles.questionText}>
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
              </Text>
  </View>
</View>

<View style={{flexDirection:'row',alignItems:'center'}}>
  <View style={{flex: 1, height: 2, backgroundColor: '#ECEDEF'}}>

  </View>
  <View style={{width:responsiveScreenWidth(25),alignItems:'center'}}>
    <Image source={require('../../assets/images/boardLogo.png')} style={{width:75,height:90}}></Image>
    </View>
    <View style={{flex: 1, height: 2, backgroundColor: '#ECEDEF'}}>

    </View>
  </View>
  <View style={{flexDirection:'row'}}>
<View style={{width:'100%'}}>
<Text style={styles.questionText}>
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
              </Text>
  </View>
</View>
<View style={{flexDirection:'row',alignItems:'center'}}>
  <View style={{flex: 1, height: 2, backgroundColor: '#ECEDEF'}}>

  </View>
  <View style={{width:responsiveScreenWidth(25),alignItems:'center'}}>
    <Image source={require('../../assets/images/dentalLogo.png')} style={{width:70,height:100}}></Image>
    </View>
    <View style={{flex: 1, height: 2, backgroundColor: '#ECEDEF'}}>

    </View>
  </View>
  <View style={{flexDirection:'row'}}>
<View style={{width:'100%'}}>
<Text style={styles.questionText}>
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
  </Text>
  </View>
</View>
</View>
</ScrollView>
</View>
</Drawer>
);
};

const styles = StyleSheet.create({

  container: {flex:3,backgroundColor:"#FAFAFB"},
  parent : {
    marginTop:responsiveHeight(-5),
    height : responsiveHeight(25),
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
drawerStyles: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
customRow:{
  flex:1, flexDirection:"row",
  position:"absolute",
  top:responsiveHeight(3),
  paddingRight:20,
  paddingLeft:20,
},customRow2:{
  flex:1, flexDirection:"row-reverse",

  paddingRight:20,
  paddingLeft:20,
},customRowC:{
  flex:1, flexDirection:"row",


} ,logoBox:{
  backgroundColor:'#fff',

  padding:5,
  borderRadius:10,
  shadowColor: '#878B92',
  shadowOpacity: 0.1,
  shadowOffset: { width: 2, height: 0},
  shadowRadius: 700,
  elevation: 20,
},customRow2:{
  flex:1, flexDirection:"row-reverse",
  position:"absolute",
  top:responsiveHeight(13),
  left:responsiveWidth(33.5),
  paddingRight:20,
  paddingLeft:20,
}
,questionText:{
  ...myFontStyle.normalRegular,

  color:'#000',
paddingRight:responsiveWidth(3),
paddingLeft:responsiveWidth(3),
marginLeft:10,
marginTop:10,
marginRight:10,
  textAlign:'left',
  lineHeight:responsiveHeight(4),

  paddingBottom:responsiveHeight(5),
}
,menuTitle:{
  // fontFamily:"IRANSansBold",
  color:"#fff",
  ...myFontStyle.largBold,
  marginTop:responsiveHeight(1),
},logoSize:{
  width:90,height:120,

}, aboutBox:{
  backgroundColor:'#fff',
  borderRadius:3,
alignSelf:'center',
height: Dimensions.get('window').height/0.8,
  width:responsiveWidth(90),
  shadowColor: '#DEE0E3',
    shadowOpacity: 0.01,
    shadowOffset: { width: 20, height: 2},
    shadowRadius: 1000,
    elevation: 8,
    marginTop:responsiveHeight(12),
},



  });

  export default AboutUs;

//make this component available to the <app></app>
