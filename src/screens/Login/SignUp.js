import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image, AsyncStorage,KeyboardAvoidingView } from 'react-native';
import { myFontStyle } from "../../assets/Constance";

import { Colors } from '../../assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';


// create a component
 const SignUp = ({navigation}) => {
const [user,setUser]=useState("");
const [pass,setPass]=useState("");
const [isLoading,setLoading]=useState(false);
const [eror,SetEror]=useState(false);
const [eror2,SetEror2]=useState(false);
const keyboardVerticalOffset = responsiveHeight(5)



      const  mutLogin=async()=> {
        setLoading(true);
if(user=="" || pass==""){
        // alert("Please fill input")
        SetEror(true)
        setLoading(false);

}

else{

        if((user=="user1"&&pass=="pass1")||(user=="user2"&&pass=="pass2")){
                setLoading(false);
AsyncStorage.setItem("user","true")
                navigation.navigate("MainPage")
        }
else{
        setLoading(false);
         SetEror2(true)



}


}

        };

return (
  <View style={styles.container}>

<KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
<View style={styles.parent}>
			<LinearGradient colors={['#16B2F5', '#0385BC']} style={styles.child}>

      		</LinearGradient>
      	</View>
        <Image source={require('../../assets/images/register.png')} style={styles.login}/>
        <Text style={styles.loginTitle}>ثبت نام</Text>
        <View style={styles.loginView}>
          <Input  isIconLeft={"person"} placeholder="نام خودرا وارد کنید" containerStyle={styles.textInputLogin} onChangeText={(ss)=>setUser(ss)} />
          <Input  isIconLeft={"person"} placeholder="نام خانوادگی خود را واردکنید" containerStyle={styles.textInputLogin} onChangeText={(ss)=>setUser(ss)} />
          <Input  isIconLeft={"credit-card"} placeholder="کدملی خود را واردکنید" containerStyle={styles.textInputLogin} onChangeText={(ss)=>setUser(ss)} />
          <Input  isIconLeft={"phone-android"} placeholder="شماره تماس خود را وارد نمائید" containerStyle={styles.textInputLogin} onChangeText={(ss)=>setUser(ss)} />
          <Input isIconLeft={"remove-red-eye"} ErrorText={eror?"لطفا موارد را وارد نمائید":""} placeholder="رمز عبور خود را را وارد نمائید" onChangeText={(ss)=>setPass(ss)} containerStyle={styles.textInputLogin} />
          <View style={{alignItems:'flex-end'}}>

        <Button
           onPress={()=>navigation.navigate("Verification")}
            //   onPress={()=>mutLogin()}
              isLoading={isLoading}

             // onPress={()=>alert(number)}
             buttonContainer={styles.button}

             text={"ایجاد حساب کاربری"}


             ></Button>
             <TouchableOpacity onPress={()=>  navigation.navigate("Login")} style={styles.footer}>

<Text style={styles.forget}>واردشوید</Text>
<Text style={styles.forget2}>حساب کاربری دارید؟</Text>
</TouchableOpacity>
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
      height : responsiveHeight(40),
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
    top:responsiveHeight(6),
    width:responsiveWidth(60),
  height:responsiveHeight(30),
    left:responsiveWidth(20),
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
    marginTop:responsiveHeight(1),

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

  export default SignUp;

//make this component available to the <app></app>
