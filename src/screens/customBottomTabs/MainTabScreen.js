import React, { Component, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { BackHandler ,View,StyleSheet} from 'react-native';
// import { Strings } from '../../assets/Strings';
import Snackbar from 'react-native-snackbar';
import { useFocusEffect } from '@react-navigation/core';
import { Colors } from '../../assets/Colors';


// import { menu } from './../../Constance';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
// import TabBar from './TabBar';

import SignUp from '../Login/SignUp';
import ForgetPass from '../Login/ForgetPass';
import Home from '../Home/Home';
import PanelMain from '../UserPanel/PanelMain';
import AzmoonList from '../Azmoon/AzmoonList';
// import { envelope, envelopeBlue, groupTools, home, homeBlue, setting, settingBlue, userProfile, userProfileBlue,groupToolsActive } from '../../Constance';
import Verification from '../Login/Verification';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

let backCounter = 0;
function MainTabScreen() {
  function isSelectionModeEnabled() {
    setTimeout(
      function () {
        backCounter = 0;
      }
        .bind(this),
      2000,
    );

    if (backCounter < 1) {
      Snackbar.show({
        // text: Strings.exitApp,
        text: "خروج",
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: Colors.appColor
      });

    } else {
      backCounter = 0;
      BackHandler.exitApp();
      return true;
    }
    backCounter++;
    return true;
  }



  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (isSelectionModeEnabled()) {
          return true;
        } else {
          return false;
        }
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [isSelectionModeEnabled])
  );
const StackNavigators = () => {

   return (

     <Stack.Navigator screenOptions={{
       headerShown: false
     }}>
       <Stack.Screen name="PanelMain" component={PanelMain} />
       {/* <Stack.Screen name="AzmoonList" component={AzmoonList} /> */}
       {/* <Stack.Screen name="MainTabScreen" component={MainTabScreen} /> */}
       {/* <Stack.Screen name="AzanPrayer" component={AzanPrayer} /> */}

     </Stack.Navigator>
   );
 }

  return (

      <Tab.Navigator
        barStyle={{ backgroundColor: Colors.white }}
    initialRouteName={"Home"}
    shifting={false}

    // tabBar={props => <TabBar {...props} />}
    >
      <Tab.Screen
            // name="home"
            name={"forget"}
            component={ForgetPass}
            options={{          tabBarLabel: '',          tabBarIcon: ({ color }) => (            <Icon name="how-to-vote" color={Colors.appColor} size={26} />          ),        }}      />

        <Tab.Screen
        // name="home"
        name={"Home"}
        component={Home}
        options={{          tabBarLabel: '',    tabBarIcon: ({ color }) => (            <Icon name="home" color={Colors.appColor} size={26} />          ),        }}      />
      <Tab.Screen
        name="StackNavigators" component={StackNavigators}
        options={{          tabBarLabel: '',    tabBarIcon: ({ color }) => (    <Icon name="person-outline" color={Colors.appColor} size={26} />         ),           }}      />
          {/* <Tab.Screen
        name="AzmoonList" component={AzmoonList} shifting={false} disable={true}
        options={{          tabBarLabel: '',                }}      /> */}

 {/*

      <Tab.Screen
        name="SignUp" component={SignUp}
        initialParams={{ notSelectedIcon: "person_outline", selectedIcon: "person_outline" }}
      /> */}






    </Tab.Navigator>


  );
}
const styles = StyleSheet.create({


  parent2 : {
    flex:1,

    height : responsiveHeight(20),
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

}  });
export default MainTabScreen;
