import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image, AsyncStorage,FlatList } from 'react-native';
import { myFontStyle } from "../../assets/Constance";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors } from '../../assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import {TopBar} from '../../components/TopBar';
import axios from 'axios';
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";
// create a component
 const SubCategory = ({navigation,route}) => {
    const [data,setData]=useState([]);
    useEffect(() => {

      mutLogin();


  }, []);
  const {id,title} = route?.params ?? {};

    const  mutLogin=async()=> {
      axios.post(apiUrl+'SubGroups',{GroupID:id})
      .then(function (response) {
        const message = response.data.Data;
        console.log(message)
        const result = response.data.result;
        console.log(result);

        if(result == "true"){
          setData(response.data.Data)

          // navigation.navigate("ChangePass",{mobile:user,verify:response.data.Data})
                          }else{

        }
      })
      .catch(function (error) {
        console.log(error);
      });


      };
      const keyExtractor = item => {
        return item.GroupID;
      };
      const _render = (item, index) => {
        console.log(item.item)
        return (
            <View style={styles.col1Mini}>
            <TouchableOpacity onPress={()=>navigation.navigate("FlashCardList",{id:item.item.SubGroupID})} style={styles.miniTouch}>
                <Text style={styles.innerText}>{item.item.Title}</Text>
                <Icon name={"chevron-left"} size={35} color={'#FFC444'} style={styles.leftIcon}></Icon>
            </TouchableOpacity>
            </View>
        );
      };
    const classes =()=>{
        return(
            <View style={styles.container}>

            <View style={styles.pageBody}>
            <Text style={styles.pageHeader}>{title}</Text>
            {/* <View style={{flexDirection:'row',flex:1,marginTop:responsiveHeight(2)}}>
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

            </View> */}

            <FlatList
          numColumns={2}
          columnWrapperStyle={styles.charityList}
          keyExtractor={keyExtractor}
          data={data}
          renderItem={_render}
          style={{marginTop:responsiveHeight(4),marginLeft:responsiveWidth(2),marginBottom:responsiveHeight(20)}}
                    // ListFooterComponent={listFooter}
          // onEndReached={fetchNextCharityPage}
        />

            </View>
            </View>
        )
        }

return (
    <TopBar Classes={classes} navigation={navigation}/>

);
};

const styles = StyleSheet.create({
    charityList: {
        // marginTop: responsiveHeight(2),

        justifyContent: 'center',
      },
  container: {flex:3,backgroundColor:"#FAFAFB"},
  pageHeader:{
      ...myFontStyle.UltraBold,
      color:'#0384BC',
      marginLeft:responsiveWidth(3)

  }
  ,pageBody:{
      paddingTop:responsiveHeight(2),
      paddingRight:responsiveWidth(6),
      paddingBottom:responsiveHeight(2),
      paddingLeft:responsiveWidth(6),
  },


innerText:{
    ...myFontStyle.largBold,
    color:'#007FB5',
    // fontSize:responsiveFontSize(2),
},miniBox:{
    backgroundColor:'#fff',



},col1Mini:{
    width:'48%',marginRight:'2%',
    flex:1,flexDirection:'column',
  marginBottom:responsiveHeight(2),
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
