import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity,TouchableWithoutFeedback} from 'react-native';
//import {create} from 'nahira-react-native-style-sheet';
//import Icon from '@spark/assets/FontIcon';
//import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '../assets/Colors';
import LinearGradient from 'react-native-linear-gradient';

export const TopBar = props => {
 
  return (
    <View>



    <LinearGradient colors={['#16B2F5', '#007FB5']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{height:55}}>

      </LinearGradient>
  

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
      <TouchableOpacity style={{}}>
        <Icon name={"chevron-left"} color={"#fff"} size={30} style={{marginTop:10}}/>
      </TouchableOpacity>
      </View>
   
</View>

</View>
  );
};

const styles =StyleSheet.create({
    container: {flex:3,backgroundColor:"#fff"},
 
    menuTitle:{
      fontFamily:"IRANSansBold",
      color:"#fff",
      fontSize:20,
      marginTop:responsiveHeight(1),
    },
    
    page: {
    flexDirection: 'column',
  },customRow:{
    flex:1, flexDirection:"row-reverse",
    position:"absolute",
    top:responsiveHeight(0),
    paddingRight:20,
    paddingLeft:20,
  }
 
});

