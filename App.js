/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from "@react-navigation/stack";


 import SplashScreen from './src/screens/Splash/Splash';
//  import MainPage from './src/screens/MainPage';
 import Login from './src/screens/Login/Login';
 import SignUp from './src/screens/Login/SignUp';
 import Verification from './src/screens/Login/Verification';
 import ForgetPass from './src/screens/Login/ForgetPass';
 import ChangePass from './src/screens/Login/ChangePass';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './src/screens/Home/Home';
import LitnearBox from './src/screens/Home/LitnearBox';
import MainTabScreen from './src/screens/customBottomTabs/MainTabScreen';
import MainCategory from './src/screens/MainCategory/MainCategory';
import SubCategory from './src/screens/SubCategory/SubCategory';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Colors } from './src/assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PanelMain from './src/screens/UserPanel/PanelMain';
import AzmoonList from './src/screens/Azmoon/AzmoonList';
import FlashCardView from './src/screens/FlashCard/FlashCardView';
import FlashCardSearch from './src/screens/FlashCard/FlashCardSearch';
import FlashCardList from './src/screens/FlashCard/FlashCardList';
import FlashCardVideo from './src/screens/FlashCard/FlashCardVideo';
import Question from './src/screens/Azmoon/Question';
import EditProfile from './src/screens/UserPanel/EditProfile';
import UserReport from './src/screens/UserPanel/UserReport';
import Ticket from './src/screens/Ticket/Ticket';
import AboutUs from './src/screens/About/AboutUs';
import LitnearBoxCardList from './src/screens/Home/LitnearBoxCardList';
import Favorite from './src/screens/UserPanel/Favorite';
import TicketsList from './src/screens/Ticket/TicketsList';
import Rules from './src/screens/Rules/Rules';
//  import {store, persist} from './store/redux/stores/store';
//  import {Provider} from 'react-redux';
//  import {PersistGate} from 'redux-persist/integmration/react';
 const Stack = createStackNavigator();
 const Drawer = createDrawerNavigator();

 const Tab = createMaterialBottomTabNavigator();

 const StackNavigatorsssss = () => {

   return (
    <Tab.Navigator
    barStyle={{backgroundColor: 'black',
    // position: 'absolute',
    overflow: 'hidden',
    // borderTopLeftRadius: 120,
    borderRadius: 50,
  height:120,
  // top:20
  // width:1000
  }}
    
initialRouteName={"StackNavigatorsHome"}
shifting={false}
// style={{height:200}}
// tabBar={props => <TabBar {...props} />}
>

<Tab.Screen
    name="StackNavigatorsAzmoon" component={StackNavigatorsAzmoon}
    options={{          tabBarLabel: '',    tabBarIcon: ({ color }) => (    <Icon name="person-outline" color={Colors.appColor} size={26} />         ),           }}      />

    <Tab.Screen
    // name="home"
    name={"StackNavigatorsHome"}
    component={StackNavigatorsHome}
    options={{          tabBarLabel: '',    tabBarIcon: ({ color }) => (            <Icon name="home" color={Colors.appColor} size={26} />          ),        }}      />

<Tab.Screen
        // name="home"
        name={"LitnearBox"}
        component={LitnearBox}
        options={{          tabBarLabel: '',          tabBarIcon: ({ color }) => (            <Icon name="how-to-vote" color={Colors.appColor} size={26} />          ),        }}      />

</Tab.Navigator>
   );
 }
 const StackNavigatorsAzmoon = () => {

  return (

    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="PanelMain" component={PanelMain} />
      <Stack.Screen name="AzmoonList" component={AzmoonList} />
      <Stack.Screen name="Question" component={Question} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="UserReport" component={UserReport} />
      <Stack.Screen name="Ticket" component={Ticket} />
      <Stack.Screen name="TicketsList" component={TicketsList}/>


    </Stack.Navigator>
  );
}
const StackNavigatorsHome = () => {

  return (

    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SubCategory" component={SubCategory} />
      <Stack.Screen name="FlashCardView" component={FlashCardView} />
      <Stack.Screen name="FlashCardSearch" component={FlashCardSearch} />
      <Stack.Screen name="FlashCardList" component={FlashCardList} />

      <Stack.Screen name="LitnearBoxCardList" component={LitnearBoxCardList}/>
      <Stack.Screen name="AboutUs" component={AboutUs} />
      <Stack.Screen name="Favorite" component={Favorite}/>
      <Stack.Screen name="Rules" component={Rules}/>

      <Stack.Screen name="FlashCardVideo" component={FlashCardVideo} />
      <Stack.Screen name="Ticket" component={Ticket} />
      <Stack.Screen name="TicketsList" component={TicketsList}/>

      <Stack.Screen name="MainCategory" component={MainCategory} />

      {/* <Stack.Screen name="MainTabScreen" component={MainTabScreen} /> */}
      {/* <Stack.Screen name="AzanPrayer" component={AzanPrayer} /> */}

    </Stack.Navigator>
  );
}
 function App() {

   return (

 //       <NavigationContainer>
 // <Stack.Navigator screenOptions={{
 //       headerShown: false
 //     }}>
 //       <Stack.Screen name="SplashScreen" component={SplashScreen} />
 //       <Stack.Screen name="Login" component={Login} />
 //       <Stack.Screen name="MainPage" component={MainPage} />
 //       <Stack.Screen name="AzmoonAbout" component={AzmoonAbout} />
 //       <Stack.Screen name="AzmoonDetail" component={AzmoonDetail} />
 //       <Stack.Screen name="AzmoonResult" component={AzmoonResult} />
 //       {/* <Stack.Screen name="MainTabScreen" component={MainTabScreen} /> */}
 //       {/* <Stack.Screen name="AzanPrayer" component={AzanPrayer} /> */}

 //     </Stack.Navigator>
 //      </NavigationContainer>
//  <Provider store={store}>
//  <PersistGate loading={null} persistor={persist}>
        <NavigationContainer>
  <Stack.Navigator screenOptions={{
        headerShown: false
     }}>
       <Stack.Screen name="SplashScreen" component={SplashScreen} />
       <Stack.Screen name="StackNavigatorsssss" component={StackNavigatorsssss} />
       <Stack.Screen name="Login" component={Login} />
       <Stack.Screen name="SignUp" component={SignUp} />
       <Stack.Screen name="Verification" component={Verification} />
       <Stack.Screen name="ChangePass" component={ChangePass} />
       <Stack.Screen name="ForgetPass" component={ForgetPass} />

       {/* <Stack.Screen name="HomeTest" component={HomeTest} />
       <Stack.Screen name="MainCategory" component={MainCategory} /> */}
       {/* <Stack.Screen name="SubCategory" component={SubCategory} /> */}
       {/* <Stack.Screen name="MainPage" component={MainPage} />
       <Stack.Screen name="AzmoonAbout" component={AzmoonAbout} />
       <Stack.Screen name="AzmoonDetail" component={AzmoonDetail} />
       <Stack.Screen name="AzmoonResult" component={AzmoonResult} />
  */}

     </Stack.Navigator>



       </NavigationContainer>
//        </PersistGate>
//  </Provider>


   );
 };





 export default App;
