import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image, AsyncStorage } from 'react-native';
import { myFontStyle } from "../../assets/Constance";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors } from '../../assets/Colors';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
// import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import {TopBar} from '../../components/TopBar';
import Modal from "react-native-modal";
import DropDownPicker from 'react-native-dropdown-picker';
import {Input} from '../../components/Input';
import { Button } from '../../components/Button';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
// import { BarChart, Grid ,YAxis,XAxis} from 'react-native-svg-charts'
import * as scale from 'd3-scale'
import { LinearGradient, Stop, Defs } from 'react-native-svg'// create a component
import axios from 'axios';
import { apiUrl ,apiAsset} from "../../commons/inFormTypes";
import {
  BarChart,

} from "react-native-chart-kit";
const UserReport = ({navigation}) => {
    const [index, setIndex] = React.useState(0);
    useEffect(() => {

      mutLogin();


    }, []);
    const [data1,setData1] = useState([]);
    const [datay,setDatay] = useState([]);
    const [data2,setData2] = useState([]);
    const [datass,setDatass] = useState([]);
    const [allTime,setAllTime] = useState([]);
    const [count,setCount] = useState([]);
    const [nerkh,setNerkh] = useState(0);
    const [today,setToday] = useState(0);
//     const data1 = []
// const data2 = []


    const  mutLogin=async()=> {
      const state = await AsyncStorage.getItem("@user");

      axios.post(apiUrl + 'OneCustomerStudyDetail',{CustomerID:state})
      .then(function (response) {
        const message = response.data.Data;
        console.log(55);
        console.log(message);
        const result = response.data.result;
        console.log(result);
        const data11 = [];
        const datayy = [];
        const data22 = [];
        const data33 = [];
var allTimes=0
        if(result == "true"){
          // setData(response.data.Data)
          response.data.Data.map((item, index) => (
            allTimes+=item.Study &&
index<5?

            datayy.push(
          item.Study.toString()

              )
              &&
              data33.push(
               item.PersianDate

              )

              :
              null
          ))
          // setData1(response.data.Data)
          setDatay(datayy)
          setDatass(data33)
          setAllTime(allTimes)
          setCount(response.data.Data.length)
          setNerkh( Math.floor(allTimes/response.data.Data.length))
          setToday(response.data.Data[count].Study)

          // navigation.navigate("ChangePass",{mobile:user,verify:response.data.Data})
                          }else{

        }
      })
      .catch(function (error) {
        console.log(error);
      });


      };
    // const data1 = [ 14, 30, 100, 50, 94 ]
    // .map((value) => ({ value }))
// const data2 = [ 24, 28, 93, 77,30 ]
    // .map((value) => ({ value }))

const barData = [
    {
        data: data1,
        svg: {
          strokeWidth:20,
          fill: 'url(#gradient2)',        },
    },
    {
        data: data2,
    },
]
// const datass = [];
  const labels = ['9مهر', 'مهر', '9مهر', '9مهر', '9مهر'];
const Labels = ({x, y, bandwidth, data}) => (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      {labels.map((value, index) => (
        <Text key={index} style={styles.text}>
            {value}
        </Text>
      ))}
    </View>
  );
  const Numbers = ({x, y, bandwidth, data}) => (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      {data1.map((value, index) => (
        <Text key={index} style={styles.numText}>
          {value}
        </Text>
      ))}
    </View>
  );
  const Gradient = () => (
    <Defs key={'gradient'}>
    <LinearGradient id={'gradient'} x1={'0%'} y={'0%'} x2={'0%'} y2={'100%'}>
        <Stop offset={'0%'} stopColor={'rgba(246, 157, 13, 1)'}/>
        <Stop offset={'100%'} stopColor={'rgba(255, 196, 68, 1)'}/>
    </LinearGradient>
</Defs>
)
  const Gradient2 = () => (
    <Defs key={'gradient2'}>
    <LinearGradient id={'gradient2'} x1={'0%'} y={'0%'} x2={'0%'} y2={'100%'}>
        <Stop offset={'0%'} stopColor={'rgba(22, 178, 245, 1)'}/>
        <Stop offset={'100%'} stopColor={'rgba(122, 214, 254, 1)'}/>
    </LinearGradient>
</Defs>
)
    const [routes] = React.useState([
      {key: 'first', title: 'گزارش شخصی'},
      {key: 'second', title: 'مقایسه با دیگران'},

    ]);
    const data = {
      labels: datass,
      // color:"#fff",
      datasets: [
        {
          // color:"#fff",
          data: datay
        }
      ]
    };
    const chartConfig = {
      backgroundGradientFrom: "#fff",
      backgroundGradientFromOpacity: 10,
      backgroundGradientTo: "#fff",
      // backgroundGradientToOpacity: 0.1,
      color: (opacity = 1) => `rgba(22, 178, 245, 1)`,
      strokeWidth: 30, // optional, default 3
      barPercentage: 1,
      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      // decimalPlaces: 1,
      useShadowColorFromDataset: false // optional
    };
    const FirstRoute = () => (
        <View >
          <View style={{flexDirection:'row',alignItems:'center'}}>

<Image source={require('../../assets/images/ruzane.png')}/>
<Text style={{...myFontStyle.mediumRegular,color:Colors.gray}}>مطالعه روزانه</Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center'}}>

<Image source={require('../../assets/images/miangin.png')}/>
<Text style={{...myFontStyle.mediumRegular,color:Colors.gray}}>میانگین مطالعه روزانه</Text>
          </View>
{/* <YAxis
                    data={data1}
                    yAccessor={({ index }) => index}
                    // scale={scale.scaleBand}
                    contentInset={{ top: responsiveHeight(3), bottom: responsiveHeight(3) }}
                    spacing={1}
                    formatLabel={(value, index) => value}
                    // formatLabel={(value, index) =>datay[index]}
                    // formatLabel={(_, index) => data1[ index ].label}
                    svg={{ fontSize: 10, fill: 'black' }}
                    style={{ height: responsiveHeight(25) ,position:'absolute',right:0,top: responsiveHeight(5)}}
                />

        <BarChart
        style={ { height: responsiveHeight(25) ,marginRight:responsiveWidth(5)} }
        data={ barData }
        // formatLabel={5}
        gridMin={0}
        yAccessor={({ item }) => item.value}
        // svg={{
        //     fill: 'rgba(246, 157, 13, 1)',
        // }}
        svg={ {
                    strokeWidth:20,
                    fill: 'url(#gradient)',
                } }

        contentInset={ { top: responsiveHeight(4), bottom: responsiveHeight(4) } }
        // { ...this.props }
        bandwidth={5}
        spacingInner={0.1}
    >
           <Gradient/>
           <Gradient2/>
        </BarChart>
        <XAxis
                    style={{ marginHorizontal: -10 }}
                    data={datass}
                    xAccessor={({ index }) => index}
                    // scale={scale.scaleBand}
                    contentInset={{ left: responsiveWidth(15), right: responsiveWidth(15) }}
                    spacing={0.2}
                    formatLabel={(value, index) =>datass[index]}
                    svg={{ fontSize: 10, fill: 'black' }}
                    /> */}
<BarChart
   style={{color:"#fff"}}
  data={data}
  width={responsiveWidth(88)}
  height={responsiveHeight(25)}
  // yAxisLabel=""
  chartConfig={chartConfig}
  color={"#fff"}
  withInnerLines={false}
  fromZero={true}
  // flatColor={true}
  // withCustomBarColorFromData={true}
  // withHorizontalLabels={true}
  // xAxisLabel={"دقیقه"}
  // yAxisSuffix={"ایالیاییای"}
  // verticalLabelRotation={30}
/>

        </View>
      );
      const SecondRoute = () => (
        <View style={styles.container}>
        <Text>second</Text>
                  </View>
      );
      const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,

      });
      const renderTabBar = props => (
        <TabBar
          {...props}
          indicatorStyle={styles.indicatorStyle}
          style={styles.tabBar}
          getLabelText={({route}) => route.title}
          renderLabel={({route, focused, color}) =>
            focused ? (
              <Text style={styles.tabBarText}>{route.title}</Text>
            ) : (
              <Text style={styles.tabBarText2}>{route.title}</Text>
            )
          }
        />
      );
   const classes =()=>{
   return(
    <View style={styles.container}>

    <View style={styles.viewBody}>

    <View style={styles.subViewRead}>


    <TabView
          renderTabBar={renderTabBar}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          style={{width: '100%'}}
        />
            </View>

<View style={{flexDirection:'row',padding:responsiveWidth(3)}}>
<View style={styles.footerCart}>
<Icon name={"view-carousel"} color={"#15C837"} size={35}/>
<View style={{alignItems:'flex-start',marginLeft:responsiveWidth(1)}}>

<Text style={{...myFontStyle.mediumBold,color:Colors.text}}>فلش کارت مطالعه شده:</Text>
<Text style={{...myFontStyle.normalRegular,color:Colors.appColor}}>{count}</Text>
</View>
</View>
<View style={styles.footerCart}>
<Icon name={"auto-stories"} color={"#CC1111"} size={35}/>
<View style={{alignItems:'flex-start',marginLeft:responsiveWidth(1)}}>

<Text style={{...myFontStyle.mediumBold,color:Colors.text}}>مدت زمان مطالعه امروز:</Text>
<Text style={{...myFontStyle.normalRegular,color:Colors.appColor}}>{today}دقیقه</Text>
</View>
</View>

</View>
<View style={{flexDirection:'row',padding:responsiveWidth(3)}}>

<View style={styles.footerCart}>
<Icon name={"import-contacts"} color={"#068CC5"} size={35}/>
<View style={{alignItems:'flex-start',marginLeft:responsiveWidth(1)}}>

<Text style={{...myFontStyle.mediumBold,color:Colors.text}}>نرخ مطالعه:</Text>
<Text style={{...myFontStyle.mediumBold,color:Colors.appColor}}>1 کارت در {nerkh}دقیقه</Text>
</View>
</View>
<View style={styles.footerCart}>
<Icon name={"timer"} color={"#FFC444"} size={40}/>
<View style={{alignItems:'flex-start',marginLeft:responsiveWidth(1)}}>

<Text style={{...myFontStyle.mediumBold,color:Colors.text}}>کل زمان مطالعه:</Text>
<Text style={{...myFontStyle.normalRegular,color:Colors.appColor}}>{allTime}دقیقه</Text>
</View>
</View>

          </View>
          </View>


    </View>
   )
   }



return (
<TopBar Classes={classes} navigation={navigation} />

);
};

const styles = StyleSheet.create({

  container: {flex:1,backgroundColor:"#FAFAFB"},
  avatar: {
    width: responsiveWidth(18),
    height: responsiveHeight(10),
    resizeMode: "contain",
    // margin:5,
    marginRight:responsiveWidth(5)

  },
  button:{marginTop:responsiveHeight(2),width:responsiveWidth(30)
    ,height:responsiveHeight(4),backgroundColor:Colors.yellow,
  borderRadius:5,
  alignItems:'center',
  justifyContent:'center'

  },

  txtEdit: {
    color: Colors.white,
    ...myFontStyle.mediumRegular,
    borderWidth:1,
    borderColor:Colors.white,
    borderRadius:50,
    paddingVertical:3,
    paddingHorizontal:9,
    backgroundColor:Colors.yellow

  },
  modal:{
    // alignSelf: "center",
    // marginTop: responsiveHeight(30),
     height: responsiveHeight(63),
    width: responsiveWidth(90),
    // justifyContent: 'center',
    // alignItems: 'flex-start',
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding:  responsiveWidth(4),
  },
  viewRowCart:{flexDirection:'row',justifyContent:'space-between',paddingLeft:responsiveWidth(3),paddingRight:responsiveWidth(3) },
  viewRowCart2:{flexDirection:'row',justifyContent:'space-between',paddingLeft:responsiveWidth(3),paddingRight:responsiveWidth(3) },
  rowCart:{height:responsiveHeight(15),width:responsiveWidth(45),borderRadius:5,alignItems:"center",justifyContent:'center'},
  rowCart2:{height:responsiveHeight(11),borderRadius:5,alignItems:"center",justifyContent:'center',margin:responsiveWidth(3)},
  rowCart3:{height:responsiveHeight(11),borderRadius:5,alignItems:"center",
  justifyContent:'space-between',margin:responsiveWidth(3),flexDirection:'row'},
  viewBody:{backgroundColor:"#FAFAFB",flex:12},
  subViewBody:{backgroundColor:"#fff",
  elevation:5,
  shadowOpacity:1,
  shadowRadius:10,
  shadowOffset:5,
  borderRadius:5,
  height:responsiveHeight(12)
  ,alignItems:'flex-end',
  flexDirection:'row-reverse',
  justifyContent:'flex-end',
  paddingBottom:responsiveHeight(2)},
  subViewRead:{
    backgroundColor:"#fff",
    elevation:5,
    shadowOpacity:1,
    shadowRadius:10,
    shadowOffset:5,
    borderRadius:5,
    margin:responsiveHeight(2),
  height:responsiveHeight(43)
  ,alignItems:'center',
  flexDirection:'row',
  justifyContent:'space-between',
  padding:responsiveWidth(5),
  paddingBottom:responsiveHeight(2)},
  viewProfText:{marginRight:5,marginTop:responsiveHeight(1),alignItems:'flex-start'},
viewIconEdit:{position:"absolute",bottom:0,right:20,backgroundColor:Colors.yellow,borderRadius:50},
textInputLogin:{
  height:responsiveHeight(15),
  ...myFontStyle.mediumRegular,
  borderColor:"#F1F1F1",
  borderWidth:2,
alignItems:'flex-end'

  },
  indicatorStyle: {
    backgroundColor: Colors.yellow,
    marginBottom: responsiveHeight(1),
    marginLeft: responsiveWidth(6),
    width: responsiveWidth(30),
  },
  tabBar: {
    backgroundColor: 'white',
    elevation: 0,
  },
  tabBarText: {
    color: Colors.yellow,
...myFontStyle.mediumBold
  },
  tabBarText2: {
    color: Colors.gray,
    ...myFontStyle.mediumBold

  },
  labels: {
    position: 'absolute',
    bottom: responsiveHeight(3),
    left: responsiveWidth(10),
    justifyContent: 'space-between',
  },
  numbers: {
    position: 'absolute',
    left: responsiveWidth(20),
    top: responsiveHeight(4),
    justifyContent: 'space-between',
  },
  footerCart:{backgroundColor:Colors.white,width:responsiveWidth(44),height:responsiveHeight(10),margin:responsiveWidth(2)
  , shadowColor: '#878B92',
  flexDirection:'row',
  alignItems:'center',
  paddingLeft:3,
  shadowOpacity: 0.1,
  shadowOffset: { width: 2, height: 0},
  shadowRadius: 700,
  elevation: 10,},
  footerCart2:{backgroundColor:Colors.white,width:responsiveWidth(28),height:responsiveHeight(10),marginLeft:responsiveWidth(4)
  , shadowColor: '#878B92',
  shadowOpacity: 0.1,
  shadowOffset: { width: 2, height: 0},
  shadowRadius: 700,
  elevation: 10,}
});

  export default UserReport;

//make this component available to the <app></app>
