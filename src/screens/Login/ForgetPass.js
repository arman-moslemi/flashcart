import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image, AsyncStorage,KeyboardAvoidingView } from 'react-native';
import { myFontStyle } from "../../assets/Constance";

import { Colors } from '../../assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import axios from 'axios';
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";


// create a component
 const ForgetPass = ({navigation}) => {
const [user,setUser]=useState("");
const [isLoading,setLoading]=useState(false);
const [eror,SetEror]=useState(false);
const [eror2,SetEror2]=useState(false);
const keyboardVerticalOffset = responsiveHeight(5)



      const  mutLogin=async()=> {
        setLoading(true);
if(user==""){
        // alert("Please fill input")
        SetEror(true)
        setLoading(false);

}

else{

  axios.post(apiUrl+'InsertMobileForgetting',{Mobile:user})
  .then(function (response) {
    const message = response.data.Data;
    const result = response.data.result;
    console.log(result);
    console.log(message);
    if(result == "true"){
      navigation.navigate("Verification",{mobile:user,verify:response.data.Data,type:'forget'})
                      }else{
                        setLoading(false);
                        SetEror(true);
    }
  })
  .catch(function (error) {
    console.log(error);
  });

}



}



return (
  <View style={styles.container}>

<KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
<View style={styles.parent}>
			<LinearGradient colors={['#16B2F5', '#0385BC']} style={styles.child}>

      		</LinearGradient>
      	</View>
        <Image source={require('../../assets/images/login.png')} style={styles.login}/>
        <Text style={styles.loginTitle}>شماره خود را وارد نمائید</Text>
        <View style={styles.loginView}>
          <Input  isIconLeft={"phone-android"} ErrorText={eror?"این شماره وجود ندارد":""}  placeholder="شماره تماس خود را وارد نمائید" containerStyle={styles.textInputLogin} onChangeText={(ss)=>setUser(ss)} />
          <View style={{alignItems:'flex-end'}}>

        <Button
          //  onPress={()=>navigation.navigate("ChangePass")}
              onPress={()=>mutLogin()}
              isLoading={isLoading}

             // onPress={()=>alert(number)}
             buttonContainer={styles.button}

             text={"تائید"}


             ></Button>


</View>
        </View>
</KeyboardAvoidingView>
</View>
);
};

const styles = StyleSheet.create({

  container: {flex:1,backgroundColor:"#fff"},
  button:{marginTop:responsiveHeight(2)},
  parent : {
    height : responsiveHeight(55),
    width : '100%',
    transform : [ { scaleX : 1.5 } ],
    borderBottomStartRadius : 800,
    borderBottomEndRadius : 800,
    overflow : 'hidden',
},
ViewFooter:{

alignItems:"flex-start",
width:'100%',

},
footer:{
flexDirection:"row",
alignItems:'flex-start',
borderBottomColor:Colors.yellow,
borderStyle:'dashed',

},
forget:{
color:Colors.yellow,
...myFontStyle.mediumBold,
marginTop:responsiveHeight(2),
borderBottomWidth:1,
// width:'85%',
borderColor:Colors.yellow,
borderStyle:"dashed",
// fontFamily:"IRANSansBold",

},
forget2:{
color:Colors.yellow,
...myFontStyle.mediumBold,
marginTop:responsiveHeight(2),
// fontFamily:"IRANSansBold",

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
// fontWeight:"bold",
// fontFamily: "IRANSansBold",
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
// fontFamily:"IRANSans",
...myFontStyle.largeRegular,

},
loginBTN:{
  ...myFontStyle.largBold,
}
  });

  export default ForgetPass;

//make this component available to the <app></app>
