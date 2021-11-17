import React, { useState,useEffect,useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image, Dimensions } from 'react-native';
import { myFontStyle } from "../../assets/Constance";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors } from '../../assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import {TopBar} from '../../components/TopBar';
import { ScrollView } from 'react-native-gesture-handler';
import Box1 from '../../assets/images/box1';
import Box2 from '../../assets/images/box2';
import Box3 from '../../assets/images/box3';
import Box4 from '../../assets/images/box4';
import Box5 from '../../assets/images/box5';
import axios from 'axios';
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Player from "../../components/Player";
import VideoPlayer from 'react-native-video-player';
import TrackPlayer, { usePlaybackState } from "react-native-track-player";

// create a component
 const LitnearBox = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
    const [sound, setSound] = useState(false);
    const [isplay, setPlay] = useState(false);
    const [video, setVideo] = useState(false);
    const [isPhoto, setPhoto] = useState(false);
    const [answer, setAnswer] = useState(false);
    const [soundAns, setSoundAns] = useState(false);
    const [isplayAns, setPlayAns] = useState(false);
    const [videoAns, setVideoAns] = useState(false);
    const [isPhotoAns, setPhotoAns] = useState(false);
    const [level, setLevel] = useState(5);
    const [rateNum, setRateNum] = useState(false);
    const [wid, setWid] = useState(0);
    const [green, setGreen] = useState(false);
    const [red, setRed] = useState(false);
    const [blue, setBlue] = useState(false);
    const [yellow, setYellow] = useState(false);
    const vid = useRef(null);
    const vidAnswer = useRef(null);
    const [data,setData]=useState([]);
    // const {id,first,last} = route?.params ?? {};
    useEffect(() => {
      // setID(id)
            mutLogin();


          }, []);

          const  mutLogin=async()=> {
            setSound(false)
            setPlay(false)
            setVideo(false)
            setPhoto(false)
            setSoundAns(false)
            setVideoAns(false)
            setPhotoAns(false)
            const state = await AsyncStorage.getItem("@user");


            axios.post(apiUrl+'FirstLitnear',{CustomerID:state})
            .then(function (response) {
              const message = response.data.Data;
              const result = response.data.result;
              console.log(result);
              console.log(9999)
              console.log(message)

              if(result == "true" ){
                setData(response?.data?.Data);
                // console.log(data.toString().length)
             if(  data){
      if(response.data.Data.Voice){
        setSound(true);
      }
      if(response.data.Data.Video){
        setVideo(true);
      }
      if(response.data.Data.Photo){
        setPhoto(true);
      }
      if(response.data.Data.VoiceAnswer){
        setSoundAns(true);
      }
      if(response.data.Data.VideoAnswer){
        setVideoAns(true);
      }
      if(response.data.Data.PhotoAnswer){
        setPhotoAns(true);
      }
    }
                // navigation.navigate("ChangePass",{mobile:user,verify:response.data.Data})
                                }else{

              }
            })
            .catch(function (error) {
              console.log(error);
            });


            };
            const  transfer=async(ss,col)=> {
              const state = await AsyncStorage.getItem("@user");
              var xx=1
              if(data?.LitnearLevel == 5){
                setWid(8)
                }
                if(data?.LitnearLevel==4){
                  setWid(26)

                }
                if(data?.LitnearLevel==3){
                  setWid(42)

                }
                if(data?.LitnearLevel==2){
                  setWid(62)

                }
                if(data?.LitnearLevel==1){
                  setWid(75)

                }
              // if(xx == 5){
              //   setWid(8)
              //   }
              //   if(xx==4){
              //     setWid(26)

              //   }
              //   if(xx==3){
              //     setWid(42)

              //   }
              //   if(xx==2){
              //     setWid(62)

              //   }
              //   if(xx==1){
              //     setWid(75)

              //   }
                // if(col == "green" && xx!=1 && xx!=2){
                //   setGreen(true)
                //   }
                //   if(col == "red" && xx!=5){
                //     setRed(true)
                //     }
                //     if(col == "blue" && xx!=1){
                //       setBlue(true)
                //       }
                //       if(col == "yellow"){
                //         setYellow(true)
                //         }
              if(col == "green" && data?.LitnearLevel!=1 && data?.LitnearLevel!=2){
                setGreen(true)
                }
                if(col == "red"){
                  setRed(true)
                  }
                  if(col == "blue" && data?.LitnearLevel!=1){
                    setBlue(true)
                    }
                    if(col == "yellow"){
                      setYellow(true)
                      }
                      var mm=data?.LitnearLevel+ss
if(mm>5)
{
  mm=5
}
if(mm<1){

  mm=1
}


              axios.post(apiUrl+'TransferLitnear',{CustomerID:state,FlashCardID:data.FlashCardID,LitnearLevel:mm})
              .then(function (response) {
                const message = response.data.Data;
                const result = response.data.result;
                console.log(result);
                console.log(9999)
                console.log(message)

                if(result == "true"){
mutLogin();
setGreen(false)
setBlue(false)
setRed(false)
setYellow(false)


                                  }else{

                }
              })
              .catch(function (error) {
                console.log(error);
              });

            };
    async function togglePlayback() {
      const currentTrack = await TrackPlayer.getPosition();
      const currentTrack2 = await TrackPlayer.getDuration();
      console.log(444)
      console.log(currentTrack)
      if (currentTrack == currentTrack2) {
        setPlay(true)
        await TrackPlayer.reset();
        await TrackPlayer.add({
          id: "local-track",
          // url: localTrack,
          url: apiAsset+data?.Voice,
          title: "FlashCart",
          artwork: "https://i.picsum.photos/id/500/200/200.jpg",
          // duration: 10
        });
        await TrackPlayer.play();
      }
      else{

        if(isplay)
       { await TrackPlayer.pause()
setPlay(false)}
else{

  await TrackPlayer.play()
  setPlay(true)
}
      }


      // }
    }
    async function stop() {
if(isplay)
       { await TrackPlayer.pause()
setPlay(false)}
else{

  await TrackPlayer.play()
  setPlay(true)
}

      // }
    }
    async function togglePlaybackAnswer() {
      const currentTrack = await TrackPlayer.getPosition();
      const currentTrack2 = await TrackPlayer.getDuration();
      console.log(444)
      console.log(currentTrack)
      if (currentTrack == currentTrack2) {
        setPlay(true)
        await TrackPlayer.reset();
        await TrackPlayer.add({
          id: "local-track",
          // url: localTrack,
          url: apiAsset+data?.VoiceAnswer,
          title: "FlashCart",
          // artist: "David Chavez",
          artwork: "https://i.picsum.photos/id/500/200/200.jpg",
          // duration: 10
        });
        await TrackPlayer.play();
      }
      else{

        if(isplayAns)
       { await TrackPlayer.pause()
setPlayAns(false)}
else{

  await TrackPlayer.play()
  setPlayAns(true)
}
      }


      // }
    }
    async function stopAnswer() {
if(isplayAns)
       { await TrackPlayer.pause()
setPlayAns(false)}
else{

  await TrackPlayer.play()
  setPlayAns(true)
}

      // }
    }
  const classes =()=>{
return (
  <View style={styles.container}>
        <View style={styles.pageBody}>
        <Text style={styles.pageHeader}>لایتنر</Text>
        {data?

<ScrollView style={{marginBottom:20}}>
          <View style={styles.arrowRow}>
           <View style={styles.arrow} >
              <Image source={require('../../assets/images/red.png')} style={red?{ position:'absolute',
  bottom:0,
  right:responsiveWidth(wid-15)}:{width:0,height:0}}/>
            </View>
            <View style={styles.arrow} >
              <Image source={require('../../assets/images/orange.png')} style={yellow?{ position:'absolute',
  bottom:0,
  right:responsiveWidth(wid-2)}:{width:0,height:0}}/>
            </View>
            <View style={styles.arrow} >
              <Image source={require('../../assets/images/Green.png')} style={green?{ position:'absolute',
  bottom:0,
  right:responsiveWidth(wid)}:{width:0,height:0}}/>
            </View>
            <View style={styles.arrow} >
              <Image source={require('../../assets/images/lightGreen.png')} style={blue?{ position:'absolute',
  bottom:0,
  right:responsiveWidth(wid)}:{width:0,height:0}}/>
            </View>
            </View>
          <View style={{flexDirection:'row',marginTop:-2}}>
            <TouchableOpacity style={styles.miniBoxL}  onPress={()=>navigation.navigate("LitnearBoxCardList",{id:1})}>
              <Box1/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.miniBoxL}  onPress={()=>navigation.navigate("LitnearBoxCardList",{id:2})}>
              <Box2/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.miniBoxL} onPress={()=>navigation.navigate("LitnearBoxCardList",{id:3})}>
              <Box3/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.miniBoxL} onPress={()=>navigation.navigate("LitnearBoxCardList",{id:4})}>
              <Box4/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.miniBoxL} onPress={()=>navigation.navigate("LitnearBoxCardList",{id:5})}>
              <Box5/>
              </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row'}}>

            <View style={styles.polygon}>
                <Image source={require('../../assets/images/Polygon.png')} style={data?.LitnearLevel==1? {alignSelf:'center'} :{ opacity:0}}/>
              </View>
              <View style={styles.polygon}>
                <Image source={require('../../assets/images/Polygon.png')} style={data?.LitnearLevel==2? {alignSelf:'center'} :{ opacity:0}}/>
              </View>
              <View style={styles.polygon}>
                <Image source={require('../../assets/images/Polygon.png')} style={data?.LitnearLevel==3? {alignSelf:'center'} :{ opacity:0}}/>
              </View>
              <View style={styles.polygon}>
                <Image source={require('../../assets/images/Polygon.png')} style={data?.LitnearLevel==4? {alignSelf:'center'} :{ opacity:0}}/>
              </View>
              <View style={styles.polygon}>
                <Image source={require('../../assets/images/Polygon.png')} style={data?.LitnearLevel==5? {alignSelf:'center'} :{ opacity:0}}/>
              </View>

            </View>


          <View style={styles.container}>
        <View style={{padding:10,flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',}}>
            <View style={styles.flashCardBox}>
            <View style={styles.yellowBox}>


            <View style={{width:responsiveWidth(90),height:5}}>

<Text style={styles.answerTitle}>سوال</Text>

</View>

                          </View>
            <View style={styles.textBoxCard}>
            <Text style={styles.questionText}>
            {/* لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است   */}
            {data?.Text}
            </Text>

            </View>

              {
                sound ?
            <View style={{padding:responsiveWidth(5),alignItems:'center'}} >
                <Player
        // onNext={skipToNext}
        style={{ marginTop: 10}}
        // onPrevious={skipToPrevious}
        onTogglePlayback={togglePlayback}
        stop={stop}
        isplay={isplay}
      />
                  </View>

                :
//               <TouchableOpacity onPress={()=>setSound(true)}>

// <Icon name={"volume-up"} color={Colors.appColor} size={60} />
//               </TouchableOpacity>
null

              }
{
  video?
  <View style={{padding:responsiveWidth(4)}}>
        <TouchableOpacity style={{flexDirection:'row',marginBottom:2}} onPress={()=>{vid.current. vid?.current?.stop();navigation.navigate('FlashCardVideo',{paths:apiAsset+data?.Video})}}>
              <Icon name={"crop-free"} color={Colors.yellow} size={20}/>
              <Text style={{...myFontStyle.mediumBold,color:Colors.yellow}}>بزرگنمایی</Text>
            </TouchableOpacity>
  <VideoPlayer
//             source={{
//   uri: "https://www.example.com/video.mp4",
//   headers: {
//     Authorization: 'bearer some-token-value',
//     'X-Custom-Header': 'some value'
//   }
// }}
audioOnly={true}

// videoWidth={2000}
//     videoHeight={900}
// source={require( "../../assets/images/mahmmod.mp4")}
// video={require( "../../assets/images/mahmmod.mp4")}
video={{uri:apiAsset+data?.Video}}
showDuration={true}
fullScreenOnLongPress={true}
fullscreen={true}

// Can be a URL or a local file.
      //  ref={(ref) => {
      //    this.player = ref
      //  }}
       ref={vid}
      //  resizeMode={"stretch"}

      //  onBuffer={this.onBuffer}
      //  onError={this.videoError}
      // toggleResizeModeOnFullscreen={true}

      //  style={styles.backgroundVideo}
       />

       </View>
  :
  null

}

{
  isPhoto?
  <View style={{padding:responsiveWidth(4),alignItems:'center'}}>

   <Image source={{uri:apiAsset+data?.Photo}} style={{width:responsiveWidth(70),height:responsiveHeight(50)}}/>

       </View>
  :
  null

}
           <View>
           <TouchableOpacity onPress={()=>setAnswer(!answer)} style={styles.seeAnswerBtn} >
              <Text style={styles.seeAnswer}>مشاهده پاسخ</Text>
            </TouchableOpacity>
           </View>
            </View>

        </View>
{
  answer?
<View style={{padding:10,flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',}}>
            <View style={styles.flashCardBox2}>
            <View style={styles.yellowBox}>
              <View style={{width:responsiveWidth(90),height:5}}>

                 <Text style={styles.answerTitle}>پاسخ</Text>

              </View>


            </View>
            <View style={styles.textBoxCard}>
            <Text style={styles.questionText}>
            {/* لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است   */}
{data?.TextAnswer}

</Text>
            </View>
            {
                soundAns ?
            <View style={{padding:responsiveWidth(5),alignItems:'center'}} >
                <Player
        // onNext={skipToNext}
        style={{ marginTop: 10}}
        // onPrevious={skipToPrevious}
        onTogglePlayback={togglePlaybackAnswer}
        stop={stopAnswer}
        isplay={isplayAns}
      />
                  </View>

                :
//               <TouchableOpacity onPress={()=>setSound(true)}>

// <Icon name={"volume-up"} color={Colors.appColor} size={60} />
//               </TouchableOpacity>
null

              }
{
  videoAns?
  <View style={{padding:responsiveWidth(4)}}>
        <TouchableOpacity style={{flexDirection:'row',marginBottom:2}} onPress={()=>{vid.current. vid?.current?.stop();navigation.navigate('FlashCardVideo',{paths:apiAsset+data?.VideoAnswer})}}>
              <Icon name={"crop-free"} color={Colors.yellow} size={20}/>
              <Text style={{...myFontStyle.mediumBold,color:Colors.yellow}}>بزرگنمایی</Text>
            </TouchableOpacity>
  <VideoPlayer
//             source={{
//   uri: "https://www.example.com/video.mp4",
//   headers: {
//     Authorization: 'bearer some-token-value',
//     'X-Custom-Header': 'some value'
//   }
// }}
audioOnly={true}

// videoWidth={2000}
//     videoHeight={900}
// source={require( "../../assets/images/mahmmod.mp4")}
// video={require( "../../assets/images/mahmmod.mp4")}
video={{uri:apiAsset+data?.VideoAnswer}}
showDuration={true}
fullScreenOnLongPress={true}
fullscreen={true}

// Can be a URL or a local file.
      //  ref={(ref) => {
      //    this.player = ref
      //  }}
       ref={vidAnswer}
      //  resizeMode={"stretch"}

      //  onBuffer={this.onBuffer}
      //  onError={this.videoError}
      // toggleResizeModeOnFullscreen={true}

      //  style={styles.backgroundVideo}
       />

       </View>
  :
  null

}

{
  isPhotoAns?
  <View style={{padding:responsiveWidth(4),alignItems:'center'}}>

   <Image source={{uri:apiAsset+data?.PhotoAnswer}} style={{width:responsiveWidth(70),height:responsiveHeight(50)}}/>

       </View>
  :
  null

}
            <View>
           {/* <TouchableOpacity style={styles.seeAnswerBtn}>
              <Text style={styles.seeAnswer}>توضیح بیشتر</Text>
            </TouchableOpacity> */}
           </View>
            </View>

        </View>
  :
  null
}


        </View>











        <View style={styles.btnBox}>

              <TouchableOpacity style={styles.btnFlash1} onPress={()=>transfer(-2,"green")}>
                  <View style={styles.iconBox1}>
                  <Icon size={20} name={'done-all'} color={'#fff'} style={{alignSelf:'center'}}></Icon>
                    </View>
                  <Text style={styles.btnFlashText1}>کاملا بلدم</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnFlash2} onPress={()=>transfer(-1,"blue")}>
              <View style={styles.iconBox2}>
                  <Icon size={20} name={'done'} color={'#fff'} style={{alignSelf:'center'}}></Icon>
                    </View>
                  <Text style={styles.btnFlashText2}>بلدم</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnFlash3} onPress={()=>transfer(0,"yellow")}>
              <View style={styles.iconBox3}>
                  <Icon size={20} name={'priority-high'} color={'#fff'} style={{alignSelf:'center'}}></Icon>
                    </View>
                  <Text style={styles.btnFlashText3}>تاحدی بلدم</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnFlash4} onPress={()=>transfer(+1,"red")}>
              <View style={styles.iconBox4}>
                  <Icon size={20} name={'close'} color={'#fff'} style={{alignSelf:'center'}}></Icon>
                    </View>
                  <Text style={styles.btnFlashText4}>بلد نیستم</Text>
              </TouchableOpacity>

            </View>
        </ScrollView>
        :
        <View style={{alignItems:'center',justifyContent:'center',alignSelf:'center',position:'absolute',top:responsiveHeight(40)}}>

<Text style={{color:Colors.black,...myFontStyle.UltraBold}}>لایتنر فعالی ندارید</Text>
        </View>



        }
        </View>



</View>
)}
return (
  <TopBar Classes={classes} navigation={navigation} />

  );
};

const styles = StyleSheet.create({

  container: {flex:3,backgroundColor:"#FAFAFB"},
  flashCardBox:{
    backgroundColor:'#fff',
    borderRadius:3,

    // height:responsiveHeight(30),
    width:responsiveWidth(90),
    shadowColor: '#DEE0E3',

    paddingBottom:5,
    // shadowColor: '#878B92',

      shadowOpacity: 0.1,
      shadowOffset: { width: 2, height: 0},
      shadowRadius: 700,
      elevation: 20,
      marginTop:responsiveHeight(5),
  }, flashCardBox2:{
    backgroundColor:'#fff',
    borderRadius:3,

    // height:responsiveHeight(30),
    width:responsiveWidth(90),
    shadowColor: '#DEE0E3',
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
    ...myFontStyle.normalBold,
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


    width:responsiveWidth(26),
    marginRight:responsiveWidth(3),
    marginTop:responsiveHeight(2),
    marginBottom:responsiveHeight(2),
    //    justifyContent:'center',
    // textAlign:'center',
    alignContent:'center',
alignSelf:'flex-end'
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
    ...myFontStyle.mediumRegular,
    color:'#fff',
    textAlign:'center',
    // fontSize:responsiveFontSize(1.5),
  },modalTitle2:{
    ...myFontStyle.mediumBold,
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
  },  pageHeader:{
    ...myFontStyle.textOnImg,
    color:'#0384BC',

},pageBody:{
  paddingTop:responsiveHeight(2),
  paddingRight:responsiveWidth(6),
  paddingBottom:responsiveHeight(2),
  paddingLeft:responsiveWidth(6),
},
menuTitle:{
  fontFamily:"IRANSansBold",
  color:"#fff",
  fontSize:25,
  marginTop:responsiveHeight(1),
},miniBoxL:{
  width:responsiveWidth(15),
  backgroundColor:'#fff',
  borderRadius:5,
  shadowColor: '#DEE0E3',
    shadowOpacity: 0.9,
    shadowOffset: { width: 2, height: 0},
    shadowRadius: 700,
    elevation: 10,
    padding:10,
    margin:responsiveWidth(1.5),
    justifyContent:'center',
    alignContent:'center',
    textAlign:'center',

},polygon:{
  width:responsiveWidth(15),
  marginRight:responsiveWidth(1.5),
  marginLeft:responsiveWidth(1.5),
  textAlign:'center',
  justifyContent:'center',
  alignContent:'center',
  flexDirection:'column'
}

,arrowRow:{
  marginTop:responsiveHeight(5)
}
,redArrow:{
  position:'absolute',
  bottom:0,
  left:responsiveWidth(26),
},orangeArrow:{
  position:'absolute',
  bottom:0,
  left:responsiveWidth(42),
},greenArrow:{
  position:'absolute',
  bottom:0,
  left:responsiveWidth(8),
},lightGreenArrow:{
  position:'absolute',
  bottom:0,
  left:responsiveWidth(62),

},btnBox:{
  marginTop:responsiveHeight(4),
  backgroundColor:'#fff',
  borderRadius:3,
  flexDirection: 'row',
  height:responsiveHeight(6),
  width:responsiveWidth(90),
  shadowColor: '#DEE0E3',
    shadowOpacity: 0.01,
    shadowOffset: { width: 2, height: 0},
    shadowRadius: 10,
    elevation: 20,
},btnFlash1:{
  width:responsiveWidth(22.5),
  backgroundColor:'#fff',
  height:responsiveHeight(6),
  justifyContent:'center',
  borderRightColor:'#ECEDEF',
  borderRightWidth:1,

}
,btnFlash2:{
  width:responsiveWidth(22.5),
  backgroundColor:'#fff',
  height:responsiveHeight(6),
  justifyContent:'center',
  borderRightColor:'#ECEDEF',
  borderRightWidth:1,
}
,btnFlash3:{
  width:responsiveWidth(22.5),
  backgroundColor:'#fff',
  height:responsiveHeight(6),
  justifyContent:'center',
  borderRightColor:'#ECEDEF',
  borderRightWidth:1,
},btnFlash4:{
  width:responsiveWidth(22.5),
  backgroundColor:'#fff',
  height:responsiveHeight(6),
  justifyContent:'center',
}
,btnFlashText1:{
  ...myFontStyle.btnBold,
  color:'#0D8424',
  alignSelf:'center',
  marginTop:responsiveHeight(1),
}
,btnFlashText2:{
  ...myFontStyle.btnBold,
  color:'#15C837',
  alignSelf:'center',
  marginTop:responsiveHeight(1),
}
,btnFlashText3:{
  ...myFontStyle.btnBold,
  color:'#F69D0D',
  alignSelf:'center',
  marginTop:responsiveHeight(1),
}
,btnFlashText4:{
  ...myFontStyle.btnBold,
  color:'#E82B63',
  alignSelf:'center',
  marginTop:responsiveHeight(1),
},iconBox1:{
  width:25,
  height:25,
  backgroundColor:'#0D8424',
  borderRadius:50,
  marginTop:responsiveHeight(-2),
  alignSelf:'center',
  alignContent:'center',
  justifyContent:'center',
},iconBox2:{
  width:25,
  height:25,
  backgroundColor:'#15C837',
  borderRadius:50,
  marginTop:responsiveHeight(-2),
  alignSelf:'center',
  alignContent:'center',
  justifyContent:'center',
},iconBox3:{
  width:25,
  height:25,
  backgroundColor:'#F69D0D',
  borderRadius:50,
  marginTop:responsiveHeight(-2),
  alignSelf:'center',
  alignContent:'center',
  justifyContent:'center',
},iconBox4:{
  width:25,
  height:25,
  backgroundColor:'#E82B63',
  borderRadius:50,
  marginTop:responsiveHeight(-2),
  alignSelf:'center',
  alignContent:'center',
  justifyContent:'center',
}
});

  export default LitnearBox;

//make this component available to the <app></app>
