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

import Home from './src/screens/Home/Home';
import HomeTest from './src/screens/Home/HomeTest';
import MainTabScreen from './src/screens/customBottomTabs/MainTabScreen';
import MainCategory from './src/screens/MainCategory/MainCategory';
import SubCategory from './src/screens/SubCategory/SubCategory';
import FlashCardView from './src/screens/FlashCard/FlashCardView';
//  import {store, persist} from './store/redux/stores/store';
//  import {Provider} from 'react-redux';
//  import {PersistGate} from 'redux-persist/integmration/react';
 const Stack = createStackNavigator();
 const Tab = createBottomTabNavigator();

 // const StackNavigator = () => {

 //   return (

 //     <Stack.Navigator screenOptions={{
 //       headerShown: false
 //     }}>
 //       <Stack.Screen name="SplashScreen" component={SplashScreen} />
 //       {/* <Stack.Screen name="MainTabScreen" component={MainTabScreen} /> */}
 //       {/* <Stack.Screen name="AzanPrayer" component={AzanPrayer} /> */}

 //     </Stack.Navigator>
 //   );
 // }

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
       <Stack.Screen name="MainTabScreen" component={MainTabScreen} />
       <Stack.Screen name="Login" component={Login} />
       <Stack.Screen name="SignUp" component={SignUp} />
       <Stack.Screen name="Verification" component={Verification} />
       <Stack.Screen name="ChangePass" component={ChangePass} />
       <Stack.Screen name="ForgetPass" component={ForgetPass} />
       {/* <Stack.Screen name="Home" component={Home} /> */}

       <Stack.Screen name="HomeTest" component={HomeTest} />
       <Stack.Screen name="MainCategory" component={MainCategory} />
       <Stack.Screen name="SubCategory" component={SubCategory} />
       <Stack.Screen name="FlashCardView" component={FlashCardView} />
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
