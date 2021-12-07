import React, { useState,useEffect,useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image,KeyboardAvoidingView,Alert } from 'react-native';
import { myFontStyle } from "../../assets/Constance";

import { Colors } from '../../assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import CodeInputMain from '../../components/CodeInput';
import axios from 'axios';
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";
import AsyncStorage from '@react-native-async-storage/async-storage';


// create a component
 const Verification = ({navigation,route}) => {

const [isLoading,setLoading]=useState(false);
// const [verify,setVerify]=useState(false);
const [eror,SetEror]=useState(false);
const [eror2,SetEror2]=useState(false);
const keyboardVerticalOffset = responsiveHeight(5)
const CodeInputRef = useRef(null);
const [validCode, setValidCode] = useState('');

const {mobile,ncode,user,pass,family,verify,type} = route?.params ?? {};
console.log(route)
      const  mutLogin=async()=> {
        setLoading(true);
if(verify!=validCode){
  Alert.alert("","رمز نادرست می باشد")
        SetEror(true);
        setLoading(false);

}

else{
  if(type=="forget")
  {
    navigation.navigate("ChangePass",{mobile:mobile})

  }
  else{
  axios.post(apiUrl+'InsertCustomerFull',{Mobile:mobile,Password:pass,NationalCode:ncode,Family:family,Name:user})
  .then(function (response) {
    const message = response.data.message;
    const result = response.data.result;
    console.log(result);
    console.log(message);
    if(result == "true"){
      AsyncStorage.setItem("user","true")
      Alert.alert("","ثبت نام با موفقیت انجام شد")



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
}

        };

return (
  <View style={styles.container}>

<KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
<View style={styles.parent}>
			<LinearGradient colors={['#16B2F5', '#0385BC']} style={styles.child}>

      		</LinearGradient>
      	</View>
        <Image source={require('../../assets/images/verify.png')} style={styles.login}/>
        <Text style={styles.loginTitle}>کد تائید ارسال شده را وارد نمایید</Text>
        <View style={styles.loginView}>
          {/* <Input  isIconLeft={"phone-android"} placeholder="شماره تماس خود را وارد نمائید" containerStyle={styles.textInputLogin} onChangeText={(ss)=>setUser(ss)} /> */}

          <CodeInputMain
            ref={CodeInputRef}
            onCodeInputEnd={code => setValidCode(code)}
            validCode={validCode}
            // hasError={error}
          />


</View>

          <View style={{alignItems:'flex-end',flex:1,marginTop:10}}>

        <Button
           // onPress={()=>navigation.navigate("Verification")}
              onPress={()=>mutLogin()}
              isLoading={isLoading}

             // onPress={()=>alert(number)}
             buttonContainer={styles.button}

             text={"تائید"}


             ></Button>
                  </View>
</KeyboardAvoidingView>
</View>
);
};

const styles = StyleSheet.create({

  container: {flex:1,backgroundColor:"#fff"},
  button:{marginTop:responsiveHeight(10)},
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
  flex: 1,
  marginTop:responsiveHeight(5),

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

  export default Verification;

//make this component available to the <app></app>
