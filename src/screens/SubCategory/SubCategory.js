import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image, AsyncStorage } from 'react-native';
import { myFontStyle } from "../../assets/Constance";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors } from '../../assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import {TopBar} from '../../components/TopBar';

// create a component
 const SubCategory = ({navigation,route}) => {

    const classes =()=>{
        return(
            <View style={styles.container}>

            <View style={styles.pageBody}>
            <Text style={styles.pageHeader}>زنان</Text>
            <ScrollView>
            <View style={{flexDirection:'row',flex:1,marginTop:responsiveHeight(2)}}>
            <View style={styles.col1Mini}>
                <TouchableOpacity onPress={()=>navigation.navigate("FlashCardList")} style={styles.miniTouch}>
                    <Text style={styles.innerText}>رفرنس ها</Text>
                    <Icon name={"chevron-left"} size={35} color={'#FFC444'} style={styles.leftIcon}></Icon>
                </TouchableOpacity>
                </View>
                <View style={styles.col1Mini}>
                <TouchableOpacity style={styles.miniTouch}>
                    <Text style={styles.innerText}>فلش کارت ها</Text>
                    <Icon name={"chevron-left"} size={35} color={'#FFC444'} style={styles.leftIcon}></Icon>
                </TouchableOpacity>
                </View>

            </View>
            <View style={{flexDirection:'row',flex:1,marginTop:responsiveHeight(2)}}>
            <View style={styles.col1Mini}>
                <TouchableOpacity style={styles.miniTouch}>
                    <Text style={styles.innerText}>سوالات بورد</Text>
                    <Icon name={"chevron-left"} size={35} color={'#FFC444'} style={styles.leftIcon}></Icon>
                </TouchableOpacity>
                </View>
                <View style={styles.col1Mini}>
                <TouchableOpacity style={styles.miniTouch}>
                    <Text style={styles.innerText}>سوالات ارتقا</Text>
                    <Icon name={"chevron-left"} size={35} color={'#FFC444'} style={styles.leftIcon}></Icon>
                </TouchableOpacity>
                </View>

            </View>
            <View style={{flexDirection:'row',flex:1,marginTop:responsiveHeight(2)}}>
            <View style={styles.col1Mini}>
                <TouchableOpacity style={styles.miniTouch}>
                    <Text style={styles.innerText}>آزمون ها</Text>
                    <Icon name={"chevron-left"} size={35} color={'#FFC444'} style={styles.leftIcon}></Icon>
                </TouchableOpacity>
                </View>
                <View style={styles.col1Mini}>
                <TouchableOpacity style={styles.miniTouch}>
                    <Text style={styles.innerText}>پادکست</Text>
                    <Icon name={"chevron-left"} size={35} color={'#FFC444'} style={styles.leftIcon}></Icon>
                </TouchableOpacity>
                </View>

            </View>
            <View style={{flexDirection:'row',flex:1,marginTop:responsiveHeight(2)}}>
            <View style={styles.col1Mini}>
                <TouchableOpacity style={styles.miniTouch}>
                    <Text style={styles.innerText}>رفرنس ها</Text>
                    <Icon name={"chevron-left"} size={35} color={'#FFC444'} style={styles.leftIcon}></Icon>
                </TouchableOpacity>
                </View>
                <View style={styles.col1Mini}>
                <TouchableOpacity style={styles.miniTouch}>
                    <Text style={styles.innerText}>فلش کارت</Text>
                    <Icon name={"chevron-left"} size={35} color={'#FFC444'} style={styles.leftIcon}></Icon>
                </TouchableOpacity>
                </View>

            </View>
            <View style={{flexDirection:'row',flex:1,marginTop:responsiveHeight(2)}}>
            <View style={styles.col1Mini}>
                <TouchableOpacity style={styles.miniTouch}>
                    <Text style={styles.innerText}>رفرنس ها</Text>
                    <Icon name={"chevron-left"} size={35} color={'#FFC444'} style={styles.leftIcon}></Icon>
                </TouchableOpacity>
                </View>
                <View style={styles.col1Mini}>
                <TouchableOpacity style={styles.miniTouch}>
                    <Text style={styles.innerText}>فلش کارت ها</Text>
                    <Icon name={"chevron-left"} size={35} color={'#FFC444'} style={styles.leftIcon}></Icon>
                </TouchableOpacity>
                </View>

            </View>
            <View style={{flexDirection:'row',flex:1,marginTop:responsiveHeight(2)}}>
            <View style={styles.col1Mini}>
                <TouchableOpacity style={styles.miniTouch}>
                    <Text style={styles.innerText}>سوالات بورد</Text>
                    <Icon name={"chevron-left"} size={35} color={'#FFC444'} style={styles.leftIcon}></Icon>
                </TouchableOpacity>
                </View>
                <View style={styles.col1Mini}>
                <TouchableOpacity style={styles.miniTouch}>
                    <Text style={styles.innerText}>سوالات ارتقا</Text>
                    <Icon name={"chevron-left"} size={35} color={'#FFC444'} style={styles.leftIcon}></Icon>
                </TouchableOpacity>
                </View>

            </View>
            <View style={{flexDirection:'row',flex:1,marginTop:responsiveHeight(2)}}>
            <View style={styles.col1Mini}>
                <TouchableOpacity style={styles.miniTouch}>
                    <Text style={styles.innerText}>آزمون ها</Text>
                    <Icon name={"chevron-left"} size={35} color={'#FFC444'} style={styles.leftIcon}></Icon>
                </TouchableOpacity>
                </View>
                <View style={styles.col1Mini}>
                <TouchableOpacity style={styles.miniTouch}>
                    <Text style={styles.innerText}>پادکست</Text>
                    <Icon name={"chevron-left"} size={35} color={'#FFC444'} style={styles.leftIcon}></Icon>
                </TouchableOpacity>
                </View>

            </View>
            <View style={{flexDirection:'row',flex:1,marginTop:responsiveHeight(2)}}>
            <View style={styles.col1Mini}>
                <TouchableOpacity style={styles.miniTouch}>
                    <Text style={styles.innerText}>رفرنس ها</Text>
                    <Icon name={"chevron-left"} size={35} color={'#FFC444'} style={styles.leftIcon}></Icon>
                </TouchableOpacity>
                </View>
                <View style={styles.col1Mini}>
                <TouchableOpacity style={styles.miniTouch}>
                    <Text style={styles.innerText}>فلش کارت</Text>
                    <Icon name={"chevron-left"} size={35} color={'#FFC444'} style={styles.leftIcon}></Icon>
                </TouchableOpacity>
                </View>

            </View>
            </ScrollView>

            </View>
            </View>
        )
        }

return (
    <TopBar Classes={classes}/>

);
};

const styles = StyleSheet.create({

  container: {flex:3,backgroundColor:"#FAFAFB"},
  pageHeader:{
      ...myFontStyle.mediumBold,
      color:'#0384BC',
      fontSize:responsiveFontSize(4)
  }
  ,pageBody:{
      paddingTop:responsiveHeight(2),
      paddingRight:responsiveWidth(6),
      paddingBottom:responsiveHeight(2),
      paddingLeft:responsiveWidth(6),
  },


innerText:{
    ...myFontStyle.textOnImg,
    color:'#007FB5',
    fontSize:responsiveFontSize(2),
},miniBox:{
    backgroundColor:'#fff',



},col1Mini:{
    width:'48%',marginRight:'2%',
    flex:1,flexDirection:'column',
  marginBottom:responsiveHeight(0.5),
},
miniTouch:{
    backgroundColor:'#fff',
    paddingRight:responsiveWidth(5),
    paddingLeft:responsiveWidth(5),
    paddingTop:responsiveHeight(1),
    paddingBottom:responsiveHeight(1),
    borderRightColor:'#FFC444',
    borderRightWidth:3,
    borderRadius:5,
    shadowColor: '#DEE0E3',
    shadowOpacity: 0.9,
    shadowOffset: { width: 2, height: 0},
    shadowRadius: 700,
    elevation: 10,
    flexDirection:'row',
    flex:1,
},leftIcon:{
    position:'absolute',
    right:responsiveWidth(0),
    top:responsiveHeight(0.5),
}
  });

  export default SubCategory;

//make this component available to the <app></app>
