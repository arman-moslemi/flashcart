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
 const SubCategory = ({navigation}) => {



return (
  <View style={styles.container}>

<TopBar/>
<View style={styles.pageBody}>
<Text style={styles.pageHeader}>زنان</Text>
<ScrollView>
<View style={styles.categoryRow}>
        <TouchableOpacity style={styles.categoryCol1}>
        <View style={styles.miniBox}>
            <Text style={styles.innerText}>زنان</Text>
        </View>
        </TouchableOpacity>
       
        </View>
</ScrollView>

</View>
</View>
);
};

const styles = StyleSheet.create({

  container: {flex:3,backgroundColor:"#FAFAFB"},
  pageHeader:{
      fontFamily:'IRANSansBold',
      color:'#0384BC',
      fontSize:30,
  }
  ,pageBody:{
      paddingTop:responsiveHeight(2),
      paddingRight:responsiveWidth(7),
      paddingBottom:responsiveHeight(2),
      paddingLeft:responsiveWidth(7),
  },
  categoryRow:{
    flex: 1,
    flexDirection: "row-reverse",
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  marginRight:responsiveWidth(5),
  marginLeft:responsiveWidth(5),
width:responsiveWidth(90),
},categoryCol1:{
    width:'50%',
    flexDirection: 'row', 
    marginBottom:20,
    justifyContent: 'flex-start',

}, categoryCol2:{
width:'50%', flexDirection: 'row',
justifyContent: 'flex-end',
},
miniBox:{
    backgroundColor:'#fff',
    height:10,
    width:'95%',
}
,innerText:{
    fontFamily:'IRANSans',
    
}
  });

  export default SubCategory;

//make this component available to the <app></app>
