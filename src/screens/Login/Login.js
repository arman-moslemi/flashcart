import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image, AsyncStorage,KeyboardAvoidingView } from 'react-native';
import { myFontStyle } from "../../assets/Constance";

import { Colors } from '../../assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';

import axios from 'axios';

// create a component
 const Login = ({navigation}) => {
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

        // if((user=="user1"&&pass=="pass1")||(user=="user2"&&pass=="pass2")){
                setLoading(false);
                axios.post('https://appflashcard.ir//api/WebApi/Login',{Mobile:user,Password:pass})
                .then(function (response) {
                  const message = response.data.message;
                  const result = response.data.result;
                  console.log(result);
                  console.log(message);
                  if(result == "true"){
                    AsyncStorage.setItem("user","true")
                    navigation.navigate("MainPage")
                                    }else{
                                      setLoading(false);
                                      SetEror2(true)
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });

        // }
// else{
//         setLoading(false);
//          SetEror2(true)



// }


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
        <Text style={styles.loginTitle}>ورود به حساب کاربری</Text>
        <View style={styles.loginView}>
          <Input  isIconLeft={"phone-android"} placeholder="شماره تماس خود را وارد نمائید" inputStyle={{color:"#000"}} containerStyle={styles.textInputLogin} onChangeText={(ss)=>setUser(ss)} />
          <Input isPassword={true} ErrorText={eror?"لطفا موارد را وارد نمائید":""} placeholder="رمز عبور خود را را وارد نمائید" onChangeText={(ss)=>setPass(ss)} containerStyle={styles.textInputLogin} />
          <View style={{alignItems:'flex-start'}}>
<TouchableOpacity onPress={()=>  navigation.navigate("ForgetPass")} style={styles.ViewFooter}>

  <Text style={styles.forget} >فراموشی رمز عبور</Text>
</TouchableOpacity>
        <Button
           // onPress={()=>navigation.navigate("Verification")}
              onPress={()=>mutLogin()}
              isLoading={isLoading}

             // onPress={()=>alert(number)}
             buttonContainer={styles.button}

             text={"ورود"}


             ></Button>

             <TouchableOpacity onPress={()=>  navigation.navigate("SignUp")} style={styles.footer}>

<Text style={styles.forget}>ثبت نام کنید</Text>
<Text style={styles.forget2}>حساب کاربری ندارید؟</Text>
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
flexDirection:"row-reverse",
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

  export default Login;

//make this component available to the <app></app>
