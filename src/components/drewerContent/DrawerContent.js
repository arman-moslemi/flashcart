//import liraries
import React, { useState,useEffect } from 'react';
import { View, Text, Image, TouchableOpacity ,Linking} from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '../../assets/Colors';
import { drawerStyles } from './DrawerStyles';

import {
  info,
  privacyPolicy,
  ratings,
  invitefriends,
  advertising,
  exit
} from './../../Constance';

import Icon from 'react-native-vector-icons/MaterialIcons';
// import {getUserInfo,MutUserInfos,SetSignOut} from '../../api/graphql/requests/login';
import { AsyncStorage } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


// create a component
const DrawerContent = ({ navigation }) => {
  const [Name,setName]=useState("User");
  // const [phone,setPhone]=useState("");
  // useEffect(() => {
  //   // getDriverStatisticsList();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const txtDarawerItem = [
    {id:1, title: "راهنمای استفاده از اپلیکیشن", icon: "lightbulb", navigateName: "About" },
    { id:2,title: "تیکت ها و پشتیبانی", icon: "textsms", navigateName: "Privacy" },
    {id:3, title: "تخفیف ها", icon: "people-alt", navigateName: "" },
    // { title: Strings.inviteFriends, icon: invitefriends, navigateName: "" },
    {id:4, title: "درباره ما", icon: "people-alt", navigateName: "" },
    {id:5, title: "تماس با ما", icon: "call", navigateName: "" },
    {id:6, title: "قوانین و مقررات", icon: "sticky-note-2", navigateName: "" },
    {id:7, title: "به روز رسانی", icon: "cached", navigateName: "" },
    { id:8,title: "خروج", icon: "exit", navigateName: "" },
    // { title: Strings.signIn, icon: exit, navigateName: "" },
  ]


  const _renderMapView = (item, index) => (





    <TouchableOpacity
key={item.id}
      onPress={() =>  navigation.navigate(item.navigateName)}

      style={drawerStyles.subBtn}>


      <Icon color={Colors.black} name={"chevron-left"} size={responsiveFontSize(1.5)} />



      <View style={drawerStyles.subViewDetails}>

        <Text style={[drawerStyles.txtHeader, { marginRight: responsiveWidth(2) }]}>{item.title}</Text>

        {/* <Image style={drawerStyles.imgItem} source={item.icon} /> */}
      <Icon color={"#000"} name={item.icon} size={responsiveFontSize(3)} />


      </View>

    </TouchableOpacity>


  )

  return (
    <View style={drawerStyles.container}>

      <View style={drawerStyles.header}>
        <LinearGradient colors={['#16B2F5', '#0385BC']} style={drawerStyles.child}>

        </LinearGradient>
</View>
<View style={{position:'absolute',alignItems:'center'}}>
        <View style={drawerStyles.subViewAvatar}>
      <TouchableOpacity

onPress={() => navigation.navigate('Profile')}

>


          {/* <Image style={drawerStyles.avatar} source={avatarWoman} /> */}
          <Image style={drawerStyles.avatar} source={require("../../assets/images/profi.png")} />

</TouchableOpacity>
        </View>

        <Text style={drawerStyles.txtTitle}>{Name}</Text>
        <Text style={drawerStyles.txtEdit}>ویرایش اطلاعات</Text>
      </View>

      <View style={drawerStyles.subViemItem}>

        {txtDarawerItem.map((item, index) => (

          _renderMapView(item, index)

        ))}

      </View>

    </View>
  );
};



//make this component available to the app
export default DrawerContent;
