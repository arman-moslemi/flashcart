import React, { useState,useEffect,useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image } from 'react-native';
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
// import VideoPlayer from 'react-native-video-controls';
 import VideoPlayer from 'react-native-video-player';
 import TrackPlayer, { usePlaybackState } from "react-native-track-player";
 import localTrack from "../../assets/images/audio_2021-11-02_15-04-15.mp3";
import Player from "../../components/Player";
import axios from 'axios';
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
 const FlashCardView = ({navigation,route}) => {

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
    const [rateNum, setRateNum] = useState(false);
    const vid = useRef(null);
    const vidAnswer = useRef(null);
    const [data,setData]=useState([]);
    const {id,first,last} = route?.params ?? {};
    const [ids,setID]=useState(id);

    useEffect(() => {
// setID(id)
      mutLogin(ids);


    }, [ids]);

    const  mutLogin=async(mm)=> {
      setSound(false)
      setPlay(false)
      setVideo(false)
      setPhoto(false)
      setSoundAns(false)
      setVideoAns(false)
      setPhotoAns(false)

      axios.post(apiUrl+'OneFlashCard',{FlashCardID:mm})
      .then(function (response) {
        const message = response.data.Data;
        const result = response.data.result;
        console.log(result);
        console.log(message)

        if(result == "true"){
          setData(response.data.Data)
if(response.data.Data[0].Voice){
  setSound(true)
}
if(response.data.Data[0].Video){
  setVideo(true)
}
if(response.data.Data[0].Photo){
  setPhoto(true)
}
if(response.data.Data[0].VoiceAnswer){
  setSoundAns(true)
}
if(response.data.Data[0].VideoAnswer){
  setVideoAns(true)
}
if(response.data.Data[0].PhotoAnswer){
  setPhotoAns(true)
}
          // navigation.navigate("ChangePass",{mobile:user,verify:response.data.Data})
                          }else{

        }
      })
      .catch(function (error) {
        console.log(error);
      });


      };
      const  setRate=async()=> {
        console.log(rateNum)
        // const ss=await AsyncStorage.getItem("userID")
        const state = await AsyncStorage.getItem("@user");

        // console.log(ss)

        axios.post(apiUrl + 'InsertRate',{FlashCardID:id,CustomerID:state,Rate:rateNum})
        .then(function (response) {
          const message = response.data.Data;
          const result = response.data.result;
          console.log(result);
          console.log(message)

          if(result == "true"){
   alert("با موفقیت ثبت شد")
     navigation.navigate("FlashCardView",{id:id,first:first,last:last})
  }
                          else{

          }
        })
        .catch(function (error) {
          console.log(error);
        });


        };
    async function setup() {
      await TrackPlayer.setupPlayer({});
      await TrackPlayer.updateOptions({
        stopWithApp: true,
        capabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
          TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
          TrackPlayer.CAPABILITY_STOP
        ],
        compactCapabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE
        ]
      });
    }
    async function setup() {
      await TrackPlayer.setupPlayer({});
      await TrackPlayer.updateOptions({
        stopWithApp: true,
        capabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
          TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
          TrackPlayer.CAPABILITY_STOP
        ],
        compactCapabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE
        ]
      });
    }

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
          url: apiAsset+data[0]?.Voice,
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
          url: apiAsset+data[0]?.VoiceAnswer,
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
    const toggleModal = () => {
     setModalVisible(!isModalVisible);
    };

    const closeModal=()=>{
      setModalVisible(!isModalVisible);
    }
    const [isModalVisible2, setModalVisible2] = useState(false);

    const toggleModal2 = () => {
     setModalVisible2(!isModalVisible2);
    };

    const closeModal2=()=>{
      setModalVisible2(!isModalVisible2);
    }
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'خیلی آسان', value: 'very easy'},
      {label: 'آسان', value: 'easy'},
      {label: 'متوسط', value: 'medium'},
      {label: 'سخت', value: 'hard'},
      {label: 'خیلی سخت', value: 'very hard'},
      {label: 'راهنمایی از استاد', value: 'guide'},
    ]);
    const classes =()=>{
      return(
        <ScrollView style={styles.container}>
        <View style={{padding:10,flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',}}>
            <View style={styles.flashCardBox}>
            <View style={styles.yellowBox}>
            <TouchableOpacity style={{flexDirection:"row",justifyContent:'center',alignItems:'center'}}  onPress={toggleModal}>
                  <Icon name={"chevron-right"} color={'#fff'} size={30} ></Icon>
                  <Text style={styles.nextBtnText}>بعدی</Text>
              </TouchableOpacity>
              <Modal isVisible={isModalVisible} onBackdropPress={closeModal} style={{justifyContent:'center',alignItems:'center'}}>
                <View style={styles.rateModal}>
                  <Text style={styles.modalTitle}>نظر خود را راجع به این سوال ثبت نمایید.</Text>
                  <Rating
                    type='star'
                    ratingCount={5}
                    imageSize={40}
                    showRating
                    ratingTextColor={'#fff'}
                    ratingColor={'#FFC444'}
                    onFinishRating={(ss)=>setRateNum(ss)}
                  />

                  <View style={{flexDirection:'row',marginTop:responsiveHeight(3)}}>
                    <View style={{width:'70%'}}>
                    <LinearGradient colors={['#CC1111', '#F43535'] }start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{borderRadius:3,padding:5}}>


                      <TouchableOpacity style={styles.notShowBtn}>
                        <Text style={styles.modalBtnText}>تمایلی به ثبت نظر ندارم،دیگر نمایش نده.</Text>
                        </TouchableOpacity>
                        </LinearGradient>
                    </View>
                    <View style={{width:'2%'}}></View>
                   <View style={{width:'28%'}}>
                   <LinearGradient colors={['#3AC3FE', '#0284BB'] }start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{borderRadius:3,padding:5}}>


          <TouchableOpacity onPress={()=>setRate()} style={styles.notShowBtn}>
          <Text style={styles.modalBtnText}>ثبت نظر</Text>
          </TouchableOpacity>
          </LinearGradient>
                    </View>
                </View>
                </View>
              </Modal>
              <TouchableOpacity style={styles.favoriteBtn} onPress={()=>vid.current.presentFullscreenPlayer()}>
                  <Icon name={"favorite-border"} size={40} color={'#ffc444'}></Icon>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection:'row-reverse',alignItems:'center'}}onPress={toggleModal}>
                  <Icon name={"chevron-left"} color={'#fff'} size={30} ></Icon>
                  <Text style={styles.nextBtnText}>قبلی</Text>
              </TouchableOpacity>

                          </View>
            <View style={styles.textBoxCard}>
            <Text style={styles.questionText}>
            {/* لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است   */}
            {data[0]?.Text}
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
        <TouchableOpacity style={{flexDirection:'row',marginBottom:2}} onPress={()=>{vid.current. vid?.current?.stop();navigation.navigate('FlashCardVideo',{paths:apiAsset+data[0]?.Video})}}>
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
video={{uri:apiAsset+data[0]?.Video}}
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

   <Image source={{uri:apiAsset+data[0]?.Photo}} style={{width:responsiveWidth(70),height:responsiveHeight(50)}}/>

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
{data[0]?.TextAnswer}

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
        <TouchableOpacity style={{flexDirection:'row',marginBottom:2}} onPress={()=>{vid.current. vid?.current?.stop();navigation.navigate('FlashCardVideo',{paths:apiAsset+data[0]?.VideoAnswer})}}>
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
video={{uri:apiAsset+data[0]?.VideoAnswer}}
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

   <Image source={{uri:apiAsset+data[0]?.PhotoAnswer}} style={{width:responsiveWidth(70),height:responsiveHeight(50)}}/>

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

        <View style={{padding:responsiveWidth(5),flexDirection:'row',justifyContent:'space-between'}}>
           <TouchableOpacity style={styles.returnFirst}
            onPress={toggleModal2}>
           <Icon name={"add"} color={'#3AC3FE'} size={20} ></Icon>
           <Text style={styles.addLitnearText}>افزودن به جعبه لایتنر</Text>


           <Modal isVisible={isModalVisible2} onBackdropPress={closeModal2} style={{justifyContent:'center',alignItems:'center'}}>
                <View style={styles.rateModal}>
                  <Text style={styles.modalTitle2}>جهت افزودن به جعبه لایتنر،درجه سختی کارت را انتخاب نمایید.</Text>
                <View style={styles.boxRow}>
                  <Box1 style={styles.inlineBox} />
                  <Box2 style={styles.inlineBox}/>
                  <Box3 style={styles.inlineBox}/>
                  <Box4 style={styles.inlineBox}/>
                  <Box5 style={styles.inlineBox}/>
                </View>
                <View style={{flexDirection:'row',marginTop:responsiveHeight(2)}}>
                <View style={{width:'50%'}}>
                <Text style={styles.modalTitle2}>درجه سختی این کارت:</Text>

                 </View>
                 <View style={{width:'50%'}}>
                 <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      // width={100}
      style={{
        borderColor:'#F1F1F1',
        borderWidth:2,
        // margin:5,
        width:responsiveWidth(37)
      }}
      placeholder="انتخاب کنید"
      zIndex={1000}
      dropDownContainerStyle={{
        borderColor:'#F1F1F1',
        borderWidth:2,
      borderRadius:5}}
    />
                   </View>
                   </View>
                   <View style={{flexDirection:'row',marginTop:responsiveHeight(3)}}>
                   <View style={{width:'42%'}}></View>
                    <View style={{width:'28%'}}>
                    <LinearGradient colors={['#CC1111', '#F43535'] }start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{borderRadius:3,padding:5}}>


                      <TouchableOpacity style={styles.notShowBtn}>
                        <Text style={styles.modalBtnText}>بستن</Text>
                        </TouchableOpacity>
                        </LinearGradient>
                    </View>
                    <View style={{width:'2%'}}></View>
                   <View style={{width:'28%'}}>
                   <LinearGradient colors={['#3AC3FE', '#0284BB'] }start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{borderRadius:3,padding:5}}>


          <TouchableOpacity style={styles.notShowBtn}>
          <Text style={styles.modalBtnText}>افزودن به لایتنر</Text>
          </TouchableOpacity>
          </LinearGradient>
                    </View>
                </View>
                </View>
              </Modal>
          </TouchableOpacity>
           <TouchableOpacity onPress={()=>setID(first)} style={styles.returnFirst}>


             <Text style={styles.returnText}>بازگشت به اولین سوال</Text>
             <Icon name={"chevron-left"} color={'#3AC3FE'} size={20} ></Icon>

           </TouchableOpacity>
        </View>
        </ScrollView>
      )
      }
return (

  <TopBar Classes={classes} navigation={navigation}/>

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

    // height:responsiveHeight(30),
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

  export default FlashCardView;

