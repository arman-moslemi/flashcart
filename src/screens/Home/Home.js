import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image, AsyncStorage } from 'react-native';
import { myFontStyle } from "../../assets/Constance";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';


// create a component
 const Home = ({navigation}) => {
const [user,setUser]=useState("");
const [pass,setPass]=useState("");
const [isLoading,setLoading]=useState(false);
const [eror,SetEror]=useState(false);
const [eror2,SetEror2]=useState(false);



//       const  mutLogin=async()=> {
//         setLoading(true);
// if(user=="" || pass==""){
//         alert("Please fill input")
//         SetEror(true)
// }

// else{

//         if((user=="user1"&&pass=="pass1")||(user=="user2"&&pass=="pass2")){
//                 setLoading(false);
// AsyncStorage.setItem("user","true")
//                 navigation.navigate("MainPage")
//         }
// else{
//         setLoading(false);
//          SetEror2(true)



// }


// }

//         };

return (
  <View style={styles.container}>


<View style={styles.parent}>
			<LinearGradient colors={['#16B2F5', '#0385BC']} style={styles.child}>
  
      		</LinearGradient>
          
      	</View>
        <View style={styles.customRow}> 
            <View style={{flex : 1,backgroundColor:"red"}}>
                <Icon name={"notes"} style={styles.menuIcon} size={50} color={"#fff"} />
              </View>
            <View style={{flex : 1, backgroundColor:"yellow"}}/>
            <View style={{flex : 1, backgroundColor:"red"}}/>
            <View style={{flex : 1, backgroundColor:"yellow"}}/>
       </View>
</View>
);
};

const styles = StyleSheet.create({

  container: {flex:3,backgroundColor:"#fff"},
  parent : {
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
login:{
  position:"absolute",
  top:responsiveHeight(8),
  width:responsiveWidth(80),
height:responsiveHeight(40),
  left:responsiveWidth(10),
  right:responsiveWidth(10),
},
loginTitle:{
 textAlign:"center",
 color: Colors.splashcolor,

...myFontStyle.largBold,
marginTop:responsiveHeight(3),
fontWeight:"bold",
},
loginView:{
  // width:responsiveWidth(80),
  // flex: 1,
  marginTop:responsiveHeight(3),

  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
},
textInputLogin:{
// borderBottomColor:"#ffb921",
// borderBottomWidth:2,
// width:"100%",

}
,customRow:{
  flex:1, flexDirection:"row-reverse",
  position:"absolute",
  top:responsiveHeight(5),
}
,menuIcon:{
 
}
  });

  export default Home;

//make this component available to the <app></app>
