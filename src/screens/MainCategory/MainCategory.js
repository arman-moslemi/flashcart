import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image, AsyncStorage } from 'react-native';
import { myFontStyle } from "../../assets/Constance";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors } from '../../assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';


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
           <Image source={require('../../assets/images/boardLogo.png')} style={styles.logoSize}/>
       </View>
       </View>
      <ScrollView style={{marginTop:responsiveHeight(10)}}>
      <View style={styles.categoryRow}>
        <TouchableOpacity style={styles.categoryCol1}>
        <Image source={require('../../assets/images/zanan.png')} style={styles.categoryColImg}/>
        <LinearGradient colors={['#16B2F5', '#0385BC']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.bottomBox}>
        <View>
            <Text style={styles.bottomBoxText}>
                زنان
            </Text>
        </View>
  </LinearGradient>
        
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryCol2}>
        <Image source={require('../../assets/images/kids.png')} style={styles.categoryColImg}/>
        <LinearGradient colors={['#16B2F5', '#0385BC']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.bottomBox}>
        <View>
            <Text style={styles.bottomBoxText}>
                اطفال
            </Text>
        </View>
  </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryCol1}>
        <Image source={require('../../assets/images/orolojh.png')} style={styles.categoryColImg}/>
        <LinearGradient colors={['#16B2F5', '#0385BC']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.bottomBox}>
        <View>
            <Text style={styles.bottomBoxText}>
                اورولوژی
            </Text>
        </View>
  </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryCol2}>
        <Image source={require('../../assets/images/bihooshi.png')} style={styles.categoryColImg}/>
        <LinearGradient colors={['#16B2F5', '#0385BC']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.bottomBox}>
        <View>
            <Text style={styles.bottomBoxText}>
                بیهوشی
            </Text>
        </View>
  </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryCol1}>
        <Image source={require('../../assets/images/other.png')} style={styles.categoryColImg}/>
        <LinearGradient colors={['#16B2F5', '#0385BC']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.bottomBox}>
        <View>
            <Text style={styles.bottomBoxText}>
               سایر رشته ها
            </Text>
        </View>
  </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryCol2}>
        <Image source={require('../../assets/images/ortoped.png')} style={styles.categoryColImg}/>
        <LinearGradient colors={['#16B2F5', '#0385BC']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.bottomBox}>
        <View>
            <Text style={styles.bottomBoxText}>
             اورتوپد
            </Text>
        </View>
  </LinearGradient>
        </TouchableOpacity>
       </View>
      
      </ScrollView>






</View>
);
};

const styles = StyleSheet.create({

  container: {flex:3,backgroundColor:"#FAFAFB"},
  categoryRow:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  marginRight:responsiveWidth(5),
  marginLeft:responsiveWidth(5),
width:responsiveWidth(90),
},
  categoryCol1:{
        width:'50%',
        flexDirection: 'row', justifyContent: 'flex-start',
        marginBottom:20,
        

  }, categoryCol2:{
    width:'50%', flexDirection: 'row', justifyContent: 'flex-end',
},
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
  top:responsiveHeight(2),
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
      shadowColor: '#878B92',
      shadowOpacity: 0.1,
      shadowOffset: { width: 2, height: 0},
      shadowRadius: 700,
      elevation: 20,
  },customRow2:{
    flex:1, flexDirection:"row-reverse",
    position:"absolute",
    top:responsiveHeight(11),
    left:responsiveWidth(30),
    paddingRight:20,
    paddingLeft:20,
  },logoSize:{
     width:105,height:120,
      
  },categoryColImg:{
      width:'95%',
      borderTopRightRadius:10,
      borderTopLeftRadius:10,
      borderBottomLeftRadius:10,
      borderBottomRightRadius:10,
      height:responsiveHeight(22),
  },bottomBox:{
      height:38,
      borderBottomLeftRadius:10,
      borderBottomRightRadius:10,
   
      width:'95%',
      position:'absolute',
      bottom:responsiveHeight(0),
  },bottomBoxText:{
      fontFamily:'IRANSansBold',
      color:'#fff',
      fontSize:20,
      textAlign:'center',
  }
  });

  export default MainCategory;

//make this component available to the <app></app>
