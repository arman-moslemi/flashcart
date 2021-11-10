import { responsiveFontSize } from "react-native-responsive-dimensions";


//myFonts
const myFontFamily = {
  Bold: "IRANSansBold",
  regularItalic: "RadomirTinkov-Gilroy-RegularItalic",
  Medium: "IRANSans",
  UltraLight: "RadomirTinkov-Gilroy-UltraLight",
}

//myFontStyle
export const myFontStyle = {
  smallBold: {
    fontFamily: myFontFamily.Bold,
    fontSize: 10,
  },
  mediumBold: {
    fontFamily: myFontFamily.Bold,
    fontSize: 13,
  },
  normalBold: {
    fontFamily: myFontFamily.Bold,
    fontSize: 16,
  },
  largBold: {
    fontFamily: myFontFamily.Bold,
    fontSize: 18,
  },
  UltraBold: {
    fontFamily: myFontFamily.Bold,
    fontSize: 20,
  },
  smallRegular: {
    fontFamily: myFontFamily.regularItalic,
    fontSize: 10,
  },
  mediumRegular: {
    fontFamily: myFontFamily.Medium,
    fontSize: 13,
  },
  normalRegular: {
    fontFamily: myFontFamily.Medium,
    fontSize: 16,
  },
  largeRegular: {
    fontFamily: myFontFamily.Medium,
    fontSize: 18,
  },
  smallUltraLight: {
    fontFamily: myFontFamily.UltraLight,
    fontSize: responsiveFontSize(1),
  },
  mediumUltraLight: {
    fontFamily: myFontFamily.UltraLight,
    fontSize: responsiveFontSize(1.5),
  },
  normalUltraLight: {
    fontFamily: myFontFamily.UltraLight,
    fontSize: responsiveFontSize(1.75),
  },
  largUltraLight: {
    fontFamily: myFontFamily.UltraLight,
    fontSize: responsiveFontSize(2),
  },btnBold:{
    fontFamily:myFontFamily.Bold,
    fontSize:responsiveFontSize(2),
  }
  ,textOnImg:{
    fontFamily:myFontFamily.Bold,
    fontSize:responsiveFontSize(2.5),
  }
}
