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
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";
import axios from 'axios';

// create a component
 const AboutUs = ({navigation}) => {
const [user,setUser]=useState("");
const [pass,setPass]=useState("");
const [isLoading,setLoading]=useState(false);
const [eror,SetEror]=useState(false);
const [eror2,SetEror2]=useState(false);
const drawers = useRef(null);
I18nManager.forceRTL(true);
const [data,setData]=useState([]);

useEffect(() => {

  mutLogin();


}, []);
const  mutLogin=async()=> {
  axios.get(apiUrl+'AllMainGroup')
  .then(function (response) {
    const message = response.data;
    const result = response.data.result;
    console.log(result);
    console.log(message);

    if(result == "true"){
      setData(response.data.DataMaingroup)

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
			<LinearGradient colors={['#16B2F5', '#0385BC']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}  style={styles.child}>

      		</LinearGradient>

      	</View>
        <View style={styles.customRow}>
    <View style={{paddingLeft:20,flexDirection:'row',flex:1}} >
     <TouchableOpacity onPress={()=>drawers.current.open()}>
     <Icon name={"notes"} style={styles.menuIcon} size={responsiveHeight(7)} color={"#fff"} style={{transform: [{rotateY: '180deg'}]}}/>

     </TouchableOpacity>
      <Text style={styles.menuTitle}>نوآوران دانش(ماهان)</Text>
     </View>

    <View style={{}}>
      <TouchableOpacity onPress={()=>navigation.goBack()} style={{}}>
        <Icon name={"chevron-left"} color={"#fff"} size={30} style={{marginTop:10}}/>
      </TouchableOpacity>
      </View>
</View>
<View style={styles.customRow2}>
       <View style={styles.logoBox}>
           <Image source={require('../../assets/images/Flashcard.png')} style={styles.logoSize}/>
       </View>
       </View>
<ScrollView style={{alignContent:'center'}}>
<View style={styles.aboutBox}>
<View style={{flexDirection:'row',alignItems:'center'}}>
  <View style={{flex: 1, height: 2, backgroundColor: '#ECEDEF'}}>

  </View>
  <View style={{width:responsiveScreenWidth(25),alignItems:'center'}}>
    <Image source={require('../../assets/images/pezeshkiLogo.png')} style={{width:responsiveWidth(20),height:responsiveHeight(16)}}></Image>
    </View>
    <View style={{flex: 1, height: 2, backgroundColor: '#ECEDEF'}}>

    </View>
  </View>
<View style={{flexDirection:'row'}}>
<View style={{width:'100%'}}>
<Text style={styles.questionText}>
{  data[2]?.Description
}
 </Text>
  </View>
</View>

<View style={{flexDirection:'row',alignItems:'center'}}>
  <View style={{flex: 1, height: 2, backgroundColor: '#ECEDEF'}}>

  </View>
  <View style={{width:responsiveScreenWidth(25),alignItems:'center'}}>
    <Image source={require('../../assets/images/boardLogo.png')} style={{width:responsiveWidth(24),height:responsiveHeight(16)}}></Image>
    </View>
    <View style={{flex: 1, height: 2, backgroundColor: '#ECEDEF'}}>

    </View>
  </View>
  <View style={{flexDirection:'row'}}>
<View style={{width:'100%'}}>
<Text style={styles.questionText}>
{  data[0]?.Description
}
</Text>
  </View>
</View>
<View style={{flexDirection:'row',alignItems:'center'}}>
  <View style={{flex: 1, height: 2, backgroundColor: '#ECEDEF'}}>

  </View>
  <View style={{width:responsiveScreenWidth(25),alignItems:'center'}}>
    <Image source={require('../../assets/images/dentalLogo.png')} style={{width:responsiveWidth(20),height:responsiveHeight(15)}}></Image>
    <Image source={require('../../assets/images/dentLogo.png')} style={{width:70,height:100}}></Image>
    </View>
    <View style={{flex: 1, height: 2, backgroundColor: '#ECEDEF'}}>

    </View>
  </View>

  <View style={{flexDirection:'row'}}>
<View style={{width:'100%'}}>
<Text style={styles.questionText}>
{  data[1]?.Description
}
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
}
// customRow2:{
//   flex:1, flexDirection:"row-reverse",

//   paddingRight:20,
//   paddingLeft:20,
// }
,customRowC:{
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
  top:responsiveHeight(11),
  alignSelf:'center',zIndex:20
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
  width:responsiveWidth(25),height:responsiveHeight(14)

}, aboutBox:{
  backgroundColor:'#fff',
  borderRadius:3,
alignSelf:'center',
// height: Dimensions.get('window').height/0.8,
marginBottom:10,
paddingTop:10,
  width:responsiveWidth(90),
  shadowColor: '#DEE0E3',
    shadowOpacity: 0.01,
    shadowOffset: { width: 20, height: 2},
    shadowRadius: 1000,
    elevation: 8,
    marginTop:responsiveHeight(7),
},



  });

  export default AboutUs;

//make this component available to the <app></app>
