import React, { Component, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { BackHandler ,View} from 'react-native';
// import { Strings } from '../../assets/Strings';
import Snackbar from 'react-native-snackbar';
import { useFocusEffect } from '@react-navigation/core';
import { Colors } from '../../assets/Colors';


// import { menu } from './../../Constance';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
//import TabBar from './TabBar';

import SignUp from '../Login/SignUp';
import ForgetPass from '../Login/ForgetPass';
import Home from '../Home/Home';
// import { envelope, envelopeBlue, groupTools, home, homeBlue, setting, settingBlue, userProfile, userProfileBlue,groupToolsActive } from '../../Constance';
import Verification from '../Login/Verification';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createMaterialBottomTabNavigator();
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


  return (
    <Tab.Navigator
        barStyle={{ backgroundColor: Colors.white }}
    initialRouteName={"Home"}
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
        component={SignUp}
        options={{          tabBarLabel: '',          tabBarIcon: ({ color }) => (            <Icon name="home" color={Colors.appColor} size={26} />          ),        }}      />
      <Tab.Screen
        name="Verification" component={Verification}
        options={{          tabBarLabel: '',          tabBarIcon: ({ color }) => (          <Icon name="person-outline" color={Colors.appColor} size={26} />         ),        }}      />

 {/*

      <Tab.Screen
        name="SignUp" component={SignUp}
        initialParams={{ notSelectedIcon: "person_outline", selectedIcon: "person_outline" }}
      /> */}






    </Tab.Navigator>
  );
}
export default MainTabScreen
