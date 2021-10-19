import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image, AsyncStorage } from 'react-native';
import { myFontStyle } from "../../assets/Constance";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors } from '../../assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';


// create a component
 const MainCategory = ({navigation}) => {



return (
  <View style={styles.container}>


<View style={styles.parent}>
			<LinearGradient colors={['#16B2F5', '#0385BC']} style={styles.child}>
  
      		</LinearGradient>
          
      	</View>
      

          <View style={styles.customRow}> 
            <View style={{paddingLeft:20}}>
             <TouchableOpacity>
             <Icon name={"notes"} style={styles.menuIcon} size={50} color={"#fff"} style={{transform: [{rotateY: '180deg'}]}}/>
              
             </TouchableOpacity>
             </View>
            <View style={{flex : 2,textAlign:"right"}}>
              <Text style={styles.menuTitle}>نوآوران دانش(ماهان)</Text>
              </View>
            <View style={{flex :0.5}}>
              <TouchableOpacity >
                <Icon name={"chevron-left"} color={"#fff"} size={30} style={{marginTop:10}}/>
              </TouchableOpacity>
              </View>
           
       </View>
       <View style={styles.customRow2}> 
       <View style={styles.logoBox}>
           <Image source={require('../../assets/images/boardLogo.png')}/>
       </View>
       </View>







</View>
);
};

const styles = StyleSheet.create({

  container: {flex:3,backgroundColor:"#fff"},
  parent : {
    marginTop:responsiveHeight(-5),
    height : responsiveHeight(25),
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

},
customRow:{
  flex:1, flexDirection:"row-reverse",
  position:"absolute",
  top:responsiveHeight(3),
  paddingRight:20,
  paddingLeft:20,
},menuTitle:{
    fontFamily:"IRANSansBold",
    color:"#fff",
    fontSize:25,
    marginTop:responsiveHeight(1),
  }
  ,logoBox:{
      backgroundColor:'#fff',
      padding:5,
      borderRadius:10,
      shadowColor: '#D8DEE8',
      shadowOpacity: 0.8,
      shadowOffset: { width: 8, height: 15},
      shadowRadius: 700,
      elevation: 20,
  },customRow2:{
    flex:1, flexDirection:"row-reverse",
    position:"absolute",
    top:responsiveHeight(13),
    left:responsiveWidth(25),
    paddingRight:20,
    paddingLeft:20,
  }
  });

  export default MainCategory;

//make this component available to the <app></app>
