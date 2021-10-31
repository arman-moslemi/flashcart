import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '../../assets/Colors';
import { myFontStyle } from '../../assets/Constance';


export const drawerStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  header: {
    // width: responsiveWidth(50),
    // justifyContent: "space-around",
    // alignItems: "center",
    // marginTop: responsiveHeight(1),
    height : responsiveHeight(22),
    width : '50%',
    transform : [ { scaleX : 2 } ],
    borderBottomStartRadius : 500,
    borderBottomEndRadius : 500,
    overflow : 'hidden',
    // flexDirection: "row"
  },
  child : {
    flex : 1,
    transform : [ { scaleX : 1 } ],


    alignItems : 'center',
    justifyContent : 'center',

},
  avatar: {
    width: responsiveWidth(18),
    height: responsiveHeight(10),
    resizeMode: "contain",

  },
  subViewAvatar: {
    padding: responsiveHeight(1),
    borderRadius: responsiveHeight(30),
    // borderColor: Colors.appColorDarker,
    // borderWidth: responsiveWidth(0.25)
  },
  txtHeader: {
    color: Colors.black,
    ...myFontStyle.mediumBold
  },
  txtTitle: {
    color: Colors.white,
    ...myFontStyle.mediumBold
  },
  txtEdit: {
    color: Colors.white,
    ...myFontStyle.mediumBold,
    borderWidth:1,
    borderColor:Colors.white,
    borderRadius:50,
    paddingVertical:3,
    paddingHorizontal:9,
  },
  subViemItem: {
    // marginTop: responsiveHeight(2),
    width: responsiveWidth(50),
    alignItems: "center"
  },
  imgItem: {
    width: responsiveWidth(5),
    height: responsiveHeight(4),
    resizeMode: "contain",
  },
  subBtn: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    width: responsiveWidth(50),
    height:responsiveHeight(8),
    // borderWidth: responsiveWidth(0.10),
    borderBottomColor: Colors.appColorDarker,
    borderTopColor: Colors.white,
    borderLeftColor: Colors.white,
    borderRightColor: Colors.white,
    marginBottom:3
  },
  subViewDetails: {
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "flex-start"
  }
});
