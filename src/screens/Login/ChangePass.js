import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image, AsyncStorage,KeyboardAvoidingView ,Alert} from 'react-native';
import { myFontStyle } from "../../assets/Constance";

import { Colors } from '../../assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import axios from 'axios';
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";


// create a component
 const ChangePass = ({navigation,route}) => {
const [pass1,setPass1]=useState("");
const [pass2,setPass2]=useState("");
const [isLoading,setLoading]=useState(false);
const [eror,SetEror]=useState(false);
const [eror2,SetEror2]=useState(false);
const keyboardVerticalOffset = responsiveHeight(5)
const {mobile} = route?.params ?? {};



      const  mutLogin=async()=> {
        setLoading(true);
if(pass1=="" || pass2=="" || pass1!=pass2){
        // alert("Please fill input")
        SetEror2(true)
        setLoading(false);

}

else{
  console.log(545)
  console.log(mobile)
    // if((user=="user1"&&pass=="pass1")||(user=="user2"&&pass=="pass2")){
            setLoading(false);
            axios.post(apiUrl+'Forgetting',{Mobile:mobile,Password:pass1})
            .then(function (response) {
              const message = response.data.Data;
              const result = response.data.result;
              console.log(result);
              console.log(message);
              if(result == "true"){
                Alert.alert("","باموفقیت انجام شد")
                navigation.navigate("Login")
                                }else{
                                  setLoading(false);
                                  SetEror2(true)
              }
            })
            .catch(function (error) {
              console.log(error);
            });




  }

    };




return (
  <View style={styles.container}>

<KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
<View style={styles.parent}>
			<LinearGradient colors={['#16B2F5', '#0385BC']} style={styles.child}>

      		</LinearGradient>
      	</View>
        <Image source={require('../../assets/images/login.png')} style={styles.login}/>
        <Text style={styles.loginTitle}>رمز عبور جدید خود را وارد نمایید</Text>
        <View style={styles.loginView}>
          <Input isPassword={true}  placeholder="رمز عبور جدید" onChangeText={(ss)=>setPass1(ss)} ErrorText={eror?" ":eror2?" ":""} containerStyle={styles.textInputLogin} />
          <Input isPassword={true} ErrorText={eror?"لطفا موارد را وارد نمایید":eror2?"رمز با تکرار تطابق ندارد":""} placeholder="تکرار رمز عبور" onChangeText={(ss)=>setPass2(ss)} containerStyle={styles.textInputLogin} />
          <View style={{alignItems:'flex-end'}}>

        <Button
           // onPress={()=>navigation.navigate("Verification")}
              onPress={()=>mutLogin()}
              isLoading={isLoading}

             // onPress={()=>alert(number)}
             buttonContainer={styles.button}

             text={"ثبت رمز عبور جدید"}


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

  export default ChangePass;

//make this component available to the <app></app>
