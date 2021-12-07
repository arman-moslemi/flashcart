import React, {useState,useRef,useEffect} from 'react';
import {View, Text, TouchableOpacity,Image} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '../../assets/Colors';
import LinearGradient from 'react-native-linear-gradient';
import Drawer from 'react-native-drawer'
import DrawerContent from '../../components/drewerContent/DrawerContent';
import { myFontStyle } from "../../assets/Constance";
import {Input} from '../../components/Input';
import axios from 'axios';
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";
 const FlashCardSearch = ({navigation}) => {
  const drawers = useRef(null);
  const [search,setSearch]=useState("");
  const [data,setData]=useState([]);
  useEffect(() => {

    mutLogin();


  }, [search]);
  const  mutLogin=async()=> {
    axios.post(apiUrl+'MenuSearch',{Title:search})
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



  return (
    <Drawer
    // type="static"
    type="overlay"
    acceptDoubleTap ={true}
        ref={drawers}
        content={<DrawerContent />}
        tapToClose={true}
  openDrawerOffset={0.4} // 20% gap on the right side of drawer
  panCloseMask={0.2}
  closedDrawerOffset={-3}
  styles={styles.drawerStyles}
  tweenHandler={(ratio) => ({
    main: { opacity:(2-ratio)/2 }
  })}
        >
    <View >

    <View style={styles.parent}>


    <LinearGradient colors={['#16B2F5', '#007FB5']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.child} >

      </LinearGradient>

</View>
<View style={styles.customRow}>
    <View style={{paddingLeft:20,flex:1,flexDirection:'row'}} >
     <TouchableOpacity onPress={()=>drawers.current.open()}>
     <Icon name={"notes"} size={responsiveHeight(7)} color={"#fff"} style={{transform: [{rotateY: '180deg'}]}}/>

     </TouchableOpacity>
      <Text style={styles.menuTitle}>نوآوران دانش(ماهان)</Text>
     </View>
  
    <View >
      <TouchableOpacity onPress={()=>navigation.goBack()} style={{}}>
        <Icon name={"chevron-left"} color={"#fff"} size={30} style={{marginTop:10}}/>
      </TouchableOpacity>
      </View>

</View>

</View>
<View style={{position:'absolute',top:responsiveHeight(15),paddingHorizontal:responsiveWidth(6)}}>

<Input  placeholder="جستجو در فلش کارت ها" onChangeText={(ss)=>setSearch(ss)} isIconLeft={"search"}inputStyle={styles.input} containerStyle={styles.textInputLogin} />
</View>
<View>
    {
        search==""?
<View style={{alignItems:'center',justifyContent:'center',marginTop:responsiveHeight(20)}}>

<Image source={require('../../assets/images/NoSearch.png')} />
<Text style={styles.txtNoSearch}>مطلبی را جستجو نکرده اید</Text>
</View>
        :





        <View style={styles.container}>
            <View style={{alignItems:'center',marginTop:responsiveHeight(5)}}>
<Text style={{...myFontStyle.UltraBold,color:Colors.appColor}}>نتایج جستجو</Text>

            </View>
    {/* <View style={styles.viewBody}> */}


{
    data.map((item)=>(


    <TouchableOpacity onPress={()=>navigation.navigate("Question")} style={styles.subViewRead}>
<View style={{flexDirection:'row',alignItems:'center'}}>
<Text style={{...myFontStyle.mediumRegular,color:Colors.gray,marginRight:3}}>مشاهده کارت</Text>

<Icon name="remove-red-eye" size={30} color={Colors.yellow}/>
</View>

<View style={styles.viewText}>
<Text style={{...myFontStyle.normalRegular,color:Colors.black,width:responsiveWidth(27)}}>{item.Text?.substring(0, 20)}...</Text>

{/* <Image source={require('../../assets/images/RectangleYellow.png')} style={{ height:responsiveHeight(8),width:5,marginRight:responsiveWidth(3),marginBottom:responsiveHeight(0.5),marginLeft:responsiveWidth(-5),}}/> */}
</View>
    {/* </View> */}



          </TouchableOpacity>

))
}


    </View>
    }


</View>
</Drawer>
  );
};

const styles =StyleSheet.create({
    container: {},

    menuTitle:{
...myFontStyle.largBold,
      color:"#fff",
      marginTop:responsiveHeight(2),
    },
    viewText:{flexDirection:'row-reverse'},

    page: {
    flexDirection: 'column',
  },customRow:{
    flex:1, flexDirection:"row",
    position:"absolute",
    top:responsiveHeight(2),
    paddingRight:responsiveWidth(5),
    paddingLeft:responsiveWidth(5),
  },
  drawerStyles: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3,zIndex:5},
  parent : {
    height : responsiveHeight(20),
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
textInputLogin:{
    borderWidth:0,
    // fontFamily:"IRANSans",
    ...myFontStyle.largeRegular,
    // height:responsiveHeight(8),
alignItems:'center',
    backgroundColor:"#fff",
    borderRadius:5,
    padding:0,
    margin:0,
    shadowColor: '#878B92',

    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 0},
    shadowRadius: 700,
    elevation: 20,
    },
input:{
    borderWidth:0,
    height:responsiveHeight(6),
    width:responsiveWidth(90),

    // width:"100%",
    // fontFamily:"IRANSans",
    ...myFontStyle.largeRegular,
    alignItems:'center',
    backgroundColor:"#fff",
    color:"#000"

    },
    txtNoSearch:{
        ...myFontStyle.largBold,
        color:Colors.text

    },
    subViewRead:{
      backgroundColor:"#fff",
      borderLeftWidth:5,
      borderLeftColor:Colors.yellow,
      elevation:1,
      shadowOpacity:5,
      shadowRadius:1,
      shadowOffset:{width:0,height:2},
      borderRadius:5,
      margin:responsiveHeight(2),
    height:responsiveHeight(8),
    // marginTop:responsiveHeight(1),
    alignItems:'center',
    flexDirection:'row-reverse',
    justifyContent:'space-between',
    // padding:responsiveWidth(5),
    paddingHorizontal:responsiveHeight(1)
  },

});

export default FlashCardSearch;
