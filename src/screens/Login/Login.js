import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image, AsyncStorage } from 'react-native';
import { myFontStyle } from "../../assets/Constance";


import { Colors } from '../../assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

// import {Button} from '../components/Button';


// create a component
 const Login = ({navigation}) => {
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

  <View style={styles.header}>
          <Text style={styles.txtAppName}>Login</Text>

  </View>
   <View style={{alignItems:"center",width:responsiveWidth(100),    marginTop: responsiveHeight(10),}}>

        <View style={styles.inputContainer}>


<TextInput
        // ErrorText={emailError}
        // value={newEmail}
         onChangeText={text => setUser(text)}
        placeholder={'UserName'}
placeholderTextColor={'#fcfcfc'}
        style={!eror?styles.inputStyle:styles.inputStyleeror}
      />
      <TextInput
        // ErrorText={"User Not Found"}
        // value={newEmail}
         onChangeText={text => setPass(text)}
        placeholder={'Password'}
placeholderTextColor={'#fcfcfc'}
// keyboardType={'number-pad'}
        style={!eror?styles.inputStyle:styles.inputStyleeror}
      />
                {/* <Image style={signStyles.iconLeft} source={require("../../../assets/images/Login/smartphone-call.png")} /> */}
                {
        eror?
        <Text style={{color:"#cc1111"}}>Enter your Information correctly</Text>
        :
        <View></View>
}
{
        eror2?
        <Text style={{color:"#cc1111"}}>User not found</Text>
        :
        <View></View>
}
      </View>

             {/* <CustomBtn
             marginTop={20}
             width={100}
             backgroundColor={Colors.InputText}
             >

             </CustomBtn> */}
             {/* <Button
           // onPress={()=>navigation.navigate("Verification")}
            //   onPress={()=>mutLogin()}
          isLoading={isLoading}

           // onPress={()=>alert(number)}
             buttonContainer={styles.button}

             text={"Login"}


             ></Button> */}

</View>
</View>
);
};

const styles = StyleSheet.create({
    container: {flex:3,backgroundColor:Colors.appColor},
      button:{marginTop:responsiveHeight(5),backgroundColor:Colors.white,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 11,
        },
        shadowOpacity: 0.55,
        shadowRadius: 14.78,
        elevation: 22,
},
      inputStyle: {

        backgroundColor:Colors.appColorDarker,
        borderRadius:10,
        width: responsiveWidth(80),
        height: responsiveHeight(10),
        paddingLeft:responsiveWidth(10),
        color:Colors.InputText,
        marginTop:responsiveHeight(5)

      },
      inputStyleeror: {

        backgroundColor:Colors.appColorDarker,
        borderRadius:10,
        marginTop:responsiveHeight(5),

        width: responsiveWidth(80),
        height: responsiveHeight(10),
        paddingLeft:responsiveWidth(10),
        color:'red',
    borderColor:'red',
    borderWidth:1

      },
      inputContainer: {
        justifyContent: 'center',
        marginTop:20
      },
      inputTitleStyle: {
        marginTop: '10h',
      },
      iconLeft: {


        position: 'absolute',
        // bottom: 50,
        // left: 50,
        width: responsiveWidth(6),
        height: responsiveHeight(4),
        resizeMode: "contain",
        left:10
      },
      subViewMenu: {
        marginTop: responsiveHeight(2),
        width: responsiveWidth(80),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      header: {
        alignItems:"flex-start",width:responsiveWidth(50),    marginTop: responsiveHeight(3),marginLeft:responsiveWidth(10)
      },
      txtAppName: {
        color: Colors.appColorDarker,
        ...myFontStyle.largBold
      },
      wrapperDatePicker: {
        marginTop: responsiveHeight(1),
        width: responsiveWidth(80),
        backgroundColor: Colors.appColorDarker,
        borderRadius: 15,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,

      },
      imgMosque: {
        resizeMode: "contain",
        height: responsiveHeight(11),
        bottom: 0,
        position: 'absolute',
      },
      txtDay: {
        color: Colors.white,
        marginTop: responsiveHeight(.5),
        ...myFontStyle.normalRegularItalic,
        // backgroundColor: "red",
        textAlign: "center"
      },
      subViewShamsi: {
        flexDirection: 'row',
        // backgroundColor: "green",
        alignItems: 'center',
        justifyContent: 'space-around',
        width: responsiveWidth(60),
        // marginTop: responsiveHeight(0.5),

      },
      imgSunshine: {
        resizeMode: "contain",
        width: responsiveWidth(6),
        height: responsiveHeight(3),
      },
      subViewSkyLine: {
        marginTop: responsiveHeight(1),
        height: responsiveHeight(20),
        width: responsiveWidth(90),
        backgroundColor: Colors.appColorDarker,
        borderRadius: 15,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
      },
      viewTxtSkyline: {
        marginTop: responsiveHeight(3),
        width: responsiveWidth(80),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      txtSkyLine: {
        color: Colors.white,
        ...myFontStyle.normalRegularItalic
      },
      imgSkyLine: {
        height: responsiveHeight(6),
        width: responsiveWidth(10),
        resizeMode: "contain",
      },
      subViewItemSkyLine: {
        width: responsiveWidth(16),
        marginHorizontal: responsiveWidth(1),
        alignItems: "center",
        marginTop: responsiveHeight(1),
      },
      subViewEvent: {
        height: responsiveHeight(50),
        width: responsiveWidth(80),
        backgroundColor: Colors.appColorDarker,
        borderRadius: 15,
        alignItems: 'flex-start',
        paddingLeft:20,
        paddingTop:20,
        marginTop:30,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
      },
      viewTxtEvent: {
        marginTop: responsiveHeight(1),
        width: responsiveWidth(70),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      txtEvent: {
        color: Colors.white,
        ...myFontStyle.largBold
      },
      myEventSubView: {
        width: responsiveWidth(70),
        // backgroundColor: "red",
        flexDirection: 'row',
        alignItems: 'center',

      },
      circleEvent: {
        backgroundColor: Colors.white,
        width: responsiveWidth(3),
        height: responsiveWidth(3),
        borderRadius: responsiveWidth(3) / 2,
      },
      txtMyEvent: {
        marginHorizontal: responsiveWidth(2),
        color: Colors.white,
        ...myFontStyle.mediumUltraLight
      },
      linearGradient: {
        width: responsiveWidth(80),
        height: responsiveHeight(14),
        marginTop: responsiveHeight(2),
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 11,
        },
        shadowOpacity: 0.55,
        shadowRadius: 14.78,
        elevation: 22,
        borderRadius: responsiveWidth(3),
        alignItems: 'center',
      },
      buttonText: {
        color: "#34493a",
        ...myFontStyle.largUltraLight,
        marginTop: responsiveHeight(2),
      },
      subViewMyServise: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: responsiveHeight(2)
      },
      txtMyServise: {
        color: Colors.medium,
        ...myFontStyle.largBold,
      },
      subViewMyserviceItem: {
        backgroundColor: Colors.white,
        margin: responsiveWidth(2),
        justifyContent: "center",
        width: responsiveWidth(15),
        borderRadius: responsiveWidth(4),
        alignItems: "center",
        paddingVertical: responsiveHeight(1),
      },
      imgMyServiceItem: {
        width: responsiveWidth(7),
        height: responsiveHeight(4),
        resizeMode: "contain"
      },
      txtMyServiseItem: {
        color: "#34493a",
        ...myFontStyle.mediumRegularItalic,
      }
  });

  export default Login;

//make this component available to the <app></app>
