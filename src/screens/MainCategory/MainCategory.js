import React, { useState,useEffect,useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image, AsyncStorage ,FlatList} from 'react-native';
import { myFontStyle } from "../../assets/Constance";
import Icon from 'react-native-vector-icons/MaterialIcons';
import DrawerContent from '../../components/drewerContent/DrawerContent';
import Drawer from 'react-native-drawer'
import { Colors } from '../../assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";

// create a component
 const MainCategory = ({navigation,route}) => {
  const drawers = useRef(null);
  const [data,setData]=useState([]);
  useEffect(() => {

    mutLogin();


}, []);
const {id} = route?.params ?? {};

  const  mutLogin=async()=> {
    axios.post(apiUrl+'Groups',{MainGroupID:id})
    .then(function (response) {
      const message = response.data.Data;
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
        <TouchableOpacity onPress={()=>navigation.navigate('SubCategory',{id:item.item.GroupID,title:item.item.Title})} style={styles.categoryCol1}>
        {/* <Image source={require('../../assets/images/zanan.png')} style={styles.categoryColImg}/> */}
        <Image source={{uri:apiAsset+item.item.Photo}} style={styles.categoryColImg}/>
        <LinearGradient colors={['#16B2F5', '#0385BC']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.bottomBox}>
        <View>
            <Text style={styles.bottomBoxText}>
                {item.item.Title}
            </Text>
        </View>
  </LinearGradient>

        </TouchableOpacity>
      );
    };

return (
  <Drawer
  // type="static"
  type="overlay"
  acceptDoubleTap ={true}
      ref={drawers}
      content={<DrawerContent navigation={navigation}/>}
      tapToClose={true}
openDrawerOffset={0.4} // 20% gap on the right side of drawer
panCloseMask={0.2}
closedDrawerOffset={-3}
styles={styles.drawerStyles}
tweenHandler={(ratio) => ({
  main: { opacity:(2-ratio)/2 }
})}
      >
  <View style={styles.container}>


<View style={styles.parent}>
			<LinearGradient colors={['#16B2F5', '#0385BC']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.child}>

      		</LinearGradient>

      	</View>


          <View style={styles.customRow}>
            <View style={{paddingLeft:20}}>
            <TouchableOpacity  onPress={()=>drawers.current.open()}>
             <Icon name={"notes"}  size={50} color={"#fff"} style={{transform: [{rotateY: '180deg'}]}}/>

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
         {
           id == 1?

           <Image source={require('../../assets/images/pezeshkiLogo.png')} style={styles.logoSize}/>
           :id==2?
           <Image source={require('../../assets/images/dentalLogo.png')} style={styles.logoSize}/>

           :
           id==3?
           <Image source={require('../../assets/images/boardLogo.png')} style={styles.logoSize}/>

           :
           null
         }
       </View>
       </View>
       <View>

       <FlatList
          numColumns={2}
          columnWrapperStyle={styles.charityList}
          keyExtractor={keyExtractor}
          data={data}
          renderItem={_render}
          style={{marginTop:responsiveHeight(6),marginLeft:responsiveWidth(2),marginBottom:responsiveHeight(20)}}
                    // ListFooterComponent={listFooter}
          // onEndReached={fetchNextCharityPage}
        />
       </View>





</View>
</Drawer>

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
        width:'45%',
        flexDirection: 'row',
       justifyContent: 'flex-start',
        marginBottom:responsiveHeight(2),


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
charityList: {
  marginTop: responsiveHeight(2),

  justifyContent: 'center',
},
customRow:{
  flex:1, flexDirection:"row",
  position:"absolute",
  top:responsiveHeight(2),
  paddingRight:20,
  paddingLeft:20,
},menuTitle:{
    // fontFamily:"IRANSansBold",
    color:"#fff",
    ...myFontStyle.largBold,

    // fontSize:25,
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
    alignSelf:'center'
    // left:responsiveWidth(35),
    // paddingRight:20,
    // paddingLeft:20,
  },logoSize:{
     width:responsiveWidth(22.5),height:responsiveHeight(15),

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
