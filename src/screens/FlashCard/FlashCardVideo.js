import React, { useState,useEffect,useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image, AsyncStorage } from 'react-native';
import { myFontStyle } from "../../assets/Constance";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Colors } from '../../assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import {TopBar} from '../../components/TopBar';
import Box1 from '../../assets/images/box1';
import Box2 from '../../assets/images/box2';
import Box3 from '../../assets/images/box3';
import Box4 from '../../assets/images/box4';
import Box5 from '../../assets/images/box5';
import Svg, { Path } from 'react-native-svg';
import DropDownPicker from 'react-native-dropdown-picker';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';
//  import VideoPlayer from 'react-native-video-player';
// create a component
 const FlashCardVideo = ({navigation,route}) => {

    const [isModalVisible, setModalVisible] = useState(false);
    const vid = useRef(null);

    const {paths} = route?.params ?? {};


return (

  // <TopBar Classes={classes} navigation={navigation}/>
  <VideoPlayer
  //             source={{
  //   uri: "https://www.example.com/video.mp4",
  //   headers: {
  //     Authorization: 'bearer some-token-value',
  //     'X-Custom-Header': 'some value'
  //   }
  // }}
  // videoWidth={2000}
  //     videoHeight={900}
  // source={require( "../../assets/images/mahmmod.mp4")}
  source={{uri:paths}}
  // video={require( "../../assets/images/mahmmod.mp4")}
  showDuration={true}
  fullScreenOnLongPress={true}
  onBack={()=>navigation.navigate("FlashCardView")}
  // fullscreen={true}

  // Can be a URL or a local file.
        //  ref={(ref) => {
        //    this.player = ref
        //  }}
        //  ref={vid}
        //  resizeMode={"stretch"}

        //  onBuffer={this.onBuffer}
        //  onError={this.videoError}
        // toggleResizeModeOnFullscreen={true}
        tapAnywhereToPause={true}
        //  style={styles.backgroundVideo}
         />

);
};

const styles = StyleSheet.create({

  container: {flex:3,backgroundColor:"#FAFAFB"},
  flashCardBox:{
    backgroundColor:'#fff',
    borderRadius:3,

    // height:responsiveHeight(30),
    width:responsiveWidth(90),
    paddingBottom:5,
    shadowColor: '#878B92',
      shadowOpacity: 0.1,
      shadowOffset: { width: 2, height: 0},
      shadowRadius: 700,
      elevation: 20,
      marginTop:responsiveHeight(5),
  }, flashCardBox2:{
    backgroundColor:'#fff',
    borderRadius:3,

    height:responsiveHeight(30),
    width:responsiveWidth(90),
    shadowColor: '#878B92',
      shadowOpacity: 0.1,
      shadowOffset: { width: 2, height: 0},
      shadowRadius: 700,
      elevation: 20,
      marginTop:responsiveHeight(1),
  },
  yellowBox:{
    backgroundColor:'#FFC444',
    height:responsiveHeight(4),

    flexDirection:'row',
    justifyContent:'space-between'
  },favoriteBtn:{
    height:65,
    width:65,
    backgroundColor:'#fff',
   borderRadius:100,
   marginTop:responsiveHeight(-2),
   borderColor:'#ffc444',
   borderWidth:1,
   justifyContent: 'center',
   alignItems: 'center',
  },nextBtnText:{
    ...myFontStyle.largBold,
    // position:'absolute',
    // left:responsiveWidth(8),
    // top:responsiveHeight(-0.8),
    color:'#fff',
    // fontSize:responsiveFontSize(3),
  },nextBtn:{
    flexDirection:'row',
  }
  ,preBtnText:{
   ...myFontStyle.largBold,
    position:'absolute',
    right:responsiveWidth(12),
    top:responsiveHeight(-0.8),
    color:'#fff',
    // fontSize:responsiveFontSize(3),
  },questionText:{
    ...myFontStyle.normalRegular,
    color:'#000',

  marginLeft:10,
  marginTop:10,
  marginRight:10,
    textAlign:'left',
  },textBoxCard:{

  },
  seeAnswerBtn:{
    backgroundColor:'#fff',
    borderStyle:"dashed",
    borderBottomWidth:2,
    borderBottomColor:'#ffc444',


    width:responsiveWidth(30),
    marginLeft:responsiveWidth(3),
    marginTop:responsiveHeight(2)
    //    justifyContent:'center',
    // textAlign:'center',
    // alignContent:'center',

  }
  ,seeAnswer:{
    ...myFontStyle.btnBold,
    color:'#ffc444',
    // fontSize:responsiveFontSize(2),
  },
  returnFirst:
  {width:responsiveWidth(35),backgroundColor:"#ffffff",height:responsiveHeight(5),flexDirection:'row',alignItems:'center',borderRadius:5,  shadowColor: '#878B92',
  shadowOpacity: 0.1,
  shadowOffset: { width: 2, height: 0},
  shadowRadius: 700,
  elevation: 10,
  padding:2}
,returnFirst2:{
    backgroundColor:'#fff',
    height:20,
    shadowColor: '#878B92',
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 0},
    shadowRadius: 700,
    elevation: 20,
    width:responsiveWidth(43),
    paddingBottom:responsiveHeight(5),
    justifyContent:'center',
    alignContent:'center',
   right:responsiveWidth(-6),
   borderRadius:3,
      }
  ,returnText:{
    color:'#3AC3FE',
    ...myFontStyle.mediumBold,
    // position:'absolute',
    // left:responsiveWidth(2),

  },answerTitle:{
    ...myFontStyle.largBold,
    position:'absolute',
    left:responsiveWidth(5),
    top:responsiveHeight(-0.2),
    // fontSize:responsiveFontSize(2.5),
    color:'#fff',
  },addLitnearText:{
    color:'#3AC3FE',
    ...myFontStyle.mediumBold,
    // position:'absolute',
    // right:responsiveWidth(8),

  },rateModal:{
    width:responsiveWidth(80),
    marginTop:responsiveHeight(-20),
    backgroundColor:'#fff',
    borderRadius:5,
    shadowColor: '#fff',
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 0},
    shadowRadius: 700,
    elevation: 20,
    alignContent:'center',
    paddingTop:responsiveHeight(3),
    paddingBottom:responsiveHeight(3),
    paddingRight:responsiveWidth(3),
    paddingLeft:responsiveWidth(3),
  }
  ,modalTitle:{
    ...myFontStyle.btnBold,
    color:'#FFC444',
    textAlign:'center',
    // fontSize:responsiveFontSize(2.5),
  }
  ,notShowBtn:{
   textAlign:'center',

  },
  modalBtnText:{
    ...myFontStyle.mediumBold,
    color:'#fff',
    textAlign:'center',
    // fontSize:responsiveFontSize(1.5),
  },modalTitle2:{
    ...myFontStyle.normalBold,
    color:'#000',
    // fontSize:responsiveFontSize(1.7),
    textAlign:'center',
  },inlineBox:{
     margin:10,
  }
  ,boxRow:{
    flexDirection:'row-reverse',
    textAlign:'center',
    alignContent:'center',
    justifyContent:'center',
    marginTop:responsiveHeight(2),
  },
  backgroundVideo: {
    // position: 'absolute',
    width:200,
    height:200,
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
  },
  });

  export default FlashCardVideo;

