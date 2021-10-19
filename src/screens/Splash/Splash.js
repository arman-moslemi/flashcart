//import liraries
import React, { Component, useEffect,useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { responsiveWidth,res } from 'react-native-responsive-dimensions';
// import Loading from '../../components/Loading';
// import { ezan_vakti, myFontStyle } from '../../Constance';
import { Colors } from '../../assets/Colors';
import { AsyncStorage } from 'react-native';

// create a component
const SplashScreen = ({ navigation }) => {
  const [state,setState]=useState("");

  const  mutLogin=async()=> {
    // const state = await AsyncStorage.getItem("user");

    // setState(state);

    // console.log(state)
    // if(state!=null && state!="" && state!="false"){

    // console.log(state)
    //   navigation.navigate('MainPage')
    // }
    // else{

      // navigation.navigate('Login');
      navigation.navigate('SubCategory');
    // }



    };
  useEffect(() => {
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

    <View style={styles.container}>
      {/* <Loading icon={require("./assets/images/laoding/ezan-vakti.json")} size={60} marginTop={60} /> */}
      <Text style={styles.txt}>FlashCard</Text>
      </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.splashcolor,
  },
  txt: {
    color: Colors.white,
    fontSize:20
  }
});

//make this component available to the app
export default SplashScreen;
