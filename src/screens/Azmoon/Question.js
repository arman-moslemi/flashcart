import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image, AsyncStorage } from 'react-native';
import { myFontStyle } from "../../assets/Constance";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors } from '../../assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import {TopBar} from '../../components/TopBar';
import Modal from "react-native-modal";
import DropDownPicker from 'react-native-dropdown-picker';
import {Input} from '../../components/Input';
import { Button } from '../../components/Button';
import { RadioButton } from 'react-native-paper';

// create a component
const Question = ({navigation}) => {
    const [checked, setChecked] = useState('first');

   const classes =()=>{
   return(
       <View>
           <View style={styles.header}>
      <Text  style={styles.headerTitle}>
        سوال 2
      </Text>
      <LinearGradient  colors={['#16B2F5', '#068DF6']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.etmam}>

      <Text style={{...myFontStyle.mediumBold,color:Colors.white}}>
        اتمام آزمون
      </Text>
    </LinearGradient>
    </View>
    <View style={styles.modalcontainer}
          >



                {/* <Text style={styles.txtSkyLine}>{item.title}</Text> */}
                <View style={{flexDirection:'row',alignItems:"center"}}>
                <Icon name={"label-important"} size={25} color={Colors.yellow}  style={{marginLeft:5,transform: [{rotateY: '180deg'}]}}/>
                <Text style={styles.txtSkyLine}>چه زمانی تب خطرناک است؟</Text>

                </View>

<View>


      <View style={styles.viewRadio}>
      <RadioButton
            //   value={"option2"+item._id}
              status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
              color={Colors.yellow}

            />
            <Text style={styles.txtRadio}>افزایش دما</Text>
            </View>
            <View style={styles.viewRadio}>

            <RadioButton
            //   value={"option2"+item._id}
              status={ checked === 'Second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('Second')}
        color={Colors.yellow}

            />

      <Text style={styles.txtRadio}>option 2</Text>
            </View>
          {/* <RadioButton
            value="Egypt"
            status={ checked === 'Egypt' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('Egypt')}
          /> */}
      <View style={styles.viewRadio}>

      <RadioButton
            //   value={"option2"+item._id}
              status={ checked === 'third' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('third')}
        color={Colors.yellow}

            />
       <Text style={styles.txtRadio}>option 3</Text>
            </View>
            <View style={styles.viewRadio}>

            <RadioButton
            //   value={"option2"+item._id}
              status={ checked === 'four' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('four')}
        color={Colors.yellow}

            />
        <Text style={styles.txtRadio}>option 4</Text>
            </View>
       </View>
          </View>
          <View style={styles.viewFooter}>
          <LinearGradient  colors={['#FFC444', '#F36F56']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.viewNext}>

<Icon name={"double-arrow"} size={20} color={Colors.white}/>
<Text style={{...myFontStyle.mediumBold,color:Colors.white}}>
  سوال بعدی
</Text>
</LinearGradient>
<LinearGradient   colors={['#FFC444', '#F36F56']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.viewNext}>

<Text style={{...myFontStyle.mediumBold,color:Colors.white}}>
سوال قبلی
</Text>
<Icon name={"double-arrow"} size={20} style={{transform: [{rotateY: '180deg'}]}} color={Colors.white}/>

</LinearGradient>
          </View>
          </View>
   )
   }



return (
<TopBar Classes={classes} />

);
};

const styles = StyleSheet.create({

  container: {flex:1,backgroundColor:"#FAFAFB"},
  modalcontainer: {
    // flex: 1,
    alignSelf: "center",
    paddingHorizontal:responsiveWidth(5),
    marginTop: responsiveHeight(2),
    // height: responsiveHeight(20),
    width: responsiveWidth(90),
    shadowColor: '#878B92',
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 0},
    shadowRadius: 700,
    elevation: 20,
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    backgroundColor: Colors.white,
    borderRadius: 5,
    paddingBottom:  responsiveHeight(4),
    marginBottom:responsiveHeight(2)
    // marginTop:responsiveHeight(31),
    // marginBottom:responsiveHeight(33),
    // marginLeft:responsiveWidth(10),
    // marginRight:responsiveWidth(10),

  },
  headerTitle:{...myFontStyle.largBold,color:Colors.text,marginLeft:responsiveWidth(5)},
  header:{flexDirection:"row",justifyContent:'space-between',
  paddingLeft:responsiveWidth(2),paddingRight:responsiveWidth(5),
  marginTop:responsiveHeight(3)},
  etmam:{
      width:responsiveWidth(30),
      height:responsiveHeight(4),
      alignItems:'center',
      borderRadius:5
  },
  viewNext:{
      width:responsiveWidth(30),
      height:responsiveHeight(4),
      alignItems:'center',
      justifyContent:'space-around',
      borderRadius:25,
      flexDirection:'row'
  },
  txtSkyLine: {
    color: Colors.text,
    ...myFontStyle.normalBold,
    marginTop:responsiveHeight(2),
    marginLeft:responsiveWidth(2),
    marginBottom:responsiveHeight(2)
  },
  txtRadio: {
    color: Colors.text,
    ...myFontStyle.mediumRegular,
    // lineHeight:responsiveHeight(3)

  },
  viewRadio: {flexDirection:'row',alignItems:'center',marginTop:responsiveHeight(1)},
  viewFooter: {flexDirection:'row',alignItems:'center',marginTop:responsiveHeight(1)
  ,justifyContent:"space-between",paddingHorizontal:responsiveWidth(5)},

});

  export default Question;

