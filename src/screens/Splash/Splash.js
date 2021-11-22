//import liraries
import React, { Component, useEffect,useState } from 'react';
import { View, Text, StyleSheet, Image ,I18nManager,Alert} from 'react-native';
// import { responsiveWidth,res } from 'react-native-responsive-dimensions';
// import { View, Text, StyleSheet, Image } from 'react-native';
import { responsiveWidth,res, responsiveHeight } from 'react-native-responsive-dimensions';
// import Loading from '../../components/Loading';
// import { ezan_vakti, myFontStyle } from '../../Constance';
import { Colors } from '../../assets/Colors';
// import { AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart'; // Import package from node modules
import LinearGradient from 'react-native-linear-gradient';
import NetInfo  from "@react-native-community/netinfo";
// create a component
const SplashScreen = ({ navigation }) => {
  const [state,setState]=useState("");
  I18nManager.forceRTL(true);

  const  mutLogin=async()=> {

    const state = await AsyncStorage.getItem("@user");
    // const us = await AsyncStorage.getItem("userID");

    // setState(state);

     console.log(444)
     console.log(state)
    if(state!=null && state!="" && state!="false"){

    console.log(state)
      navigation.navigate('StackNavigatorsssss')
      // navigation.navigate('Login')
    }
    else{

      navigation.navigate('Login');
      // navigation.navigate('StackNavigatorsssss');
      // navigation.navigate('SubCategory');

      // navigation.navigate('FlashCardView');

    }



    };
  useEffect(() => {
  //   NetInfo.fetch().then(state => {
  //     console.log("Connection type", state.type);
  //     console.log("Is connected?", state.isConnected);
  //     Alert.alert("","اینترنت را بررسی کنید")
  // });
  const unsubscribe = NetInfo.addEventListener(state => {
  !state.isConnected?
  Alert.alert("","اینترنت را بررسی کنید")
  :
null
});

// Unsubscribe
unsubscribe();

    if (!I18nManager.isRTL) {
      RNRestart.Restart();
      }

    //BadgeAndroid.setBadge(10);
    //alert(state)
    //ShortcutBadge.setCount(28);
  //notifee.setBadgeCount(1).then(() => console.log('Badge count set!'));
    setTimeout(() => {
      mutLogin();
   // BadgeAndroid.setBadge(10);

    //  ShortcutBadge.setCount(28);
   // navigation.navigate('SliderPage')
   // navigation.push('Signup')

    }, 2000)

  }, []);

  return (

    <View  style={styles.container} >
      {/* <Loading icon={require("./assets/images/laoding/ezan-vakti.json")} size={60} marginTop={60} /> */}
      <LinearGradient  colors={['#fff', '#fff']} start={{ x: 0, y: 0 }}  end={{ x: 1, y:1}} style={{height:responsiveHeight(100),width:responsiveWidth(100),justifyContent: 'center',
    alignItems: 'center'}}>

    <Image style={{width:responsiveWidth(40),height:responsiveHeight(20)}} source={require('../../assets/images/Flashcard.png')}></Image>
      </LinearGradient>
      </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  txt: {
    color: Colors.white,
    fontSize:20,
    flex:1,
    alignSelf:'center',
  }
});

//make this component available to the app
export default SplashScreen;
