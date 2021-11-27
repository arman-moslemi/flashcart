import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image,KeyboardAvoidingView ,I18nManager} from 'react-native';
import { myFontStyle } from "../../assets/Constance";

import { Colors } from '../../assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
I18nManager.forceRTL(true);

// create a component
 const Login = ({navigation}) => {
const [user,setUser]=useState("");
const [pass,setPass]=useState("");
const [isLoading,setLoading]=useState(false);
const [eror,SetEror]=useState(false);
const [eror2,SetEror2]=useState(false);
const keyboardVerticalOffset = responsiveHeight(5)

const storeData = async (value) => {
  try {
      await AsyncStorage.setItem('@user', value.toString())
} catch (e) {
     // saving error
 }}

      const  mutLogin=async()=> {
        setLoading(true);
if(user=="" || pass==""){
        // alert("Please fill input")
        SetEror(true)
        setLoading(false);

}

else{
console.log(545)
        // if((user=="user1"&&pass=="pass1")||(user=="user2"&&pass=="pass2")){
          // console.log(await  AsyncStorage.getItem("userID") )
        // await  AsyncStorage.setItem("userID",3)
          setLoading(false);
                axios.post(apiUrl + 'Login',{Mobile:user,Password:pass})
                .then(function (response) {
                  // await AsyncStorage.setItem("@user","true")
                  const message = response.data.message;
                  const result = response.data.result;
                  console.log(result);
                  console.log(message);
                  if(result == "true"){
                   console.log(22);
                   console.log(response.data.Data);
                    // storeData(response.data.CustomerID);
                    AsyncStorage.setItem('@user',response.data.Data[0].CustomerID.toString())
                    AsyncStorage.setItem('@userName',response.data.Data[0].Name.toString())
                    if(response.data.Data[0].Photo)
                    {

                      AsyncStorage.setItem('@userPhoto',response.data.Data[0].Photo?.toString())
                    }
                    else{
                      AsyncStorage.setItem('@userPhoto',"")

                    }
                    // navigation.navigate("StackNavigatorsssss")
                    navigation.reset({
                      index: 0,
                      routes: [{ name: 'StackNavigatorsssss' }]
                 })
                                    }else{
                     setLoading(false);
                     SetEror2(true);
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
          <Input  isIconLeft={"phone-android"} keyboardType={"numeric"} ErrorText={eror?" ":eror2?" ":""} placeholder="شماره تماس خود را وارد نمایید" inputStyle={{color:"#000"}} containerStyle={styles.textInputLogin} onChangeText={(ss)=>setUser(ss)} />
          <Input isPassword={true} ErrorText={eror?"لطفا موارد را وارد نمایید":eror2?"نام کاربری یا رمز عبور درست نیست":""}  placeholder="رمز عبور خود را را وارد نمایید" onChangeText={(ss)=>setPass(ss)} containerStyle={styles.textInputLogin} />
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
<Text style={styles.forget2}>حساب کاربری ندارید؟  </Text>
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
