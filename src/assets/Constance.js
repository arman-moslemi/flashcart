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
    fontSize: responsiveFontSize(1),
  },
  mediumBold: {
    fontFamily: myFontFamily.Bold,
    fontSize: responsiveFontSize(1.5),
  },
  normalBold: {
    fontFamily: myFontFamily.Bold,
    fontSize: responsiveFontSize(1.75),
  },
  largBold: {
    fontFamily: myFontFamily.Bold,
    fontSize: responsiveFontSize(3),
  },
  smallRegular: {
    fontFamily: myFontFamily.regularItalic,
    fontSize: responsiveFontSize(1),
  },
  mediumRegular: {
    fontFamily: myFontFamily.Medium,
    fontSize: responsiveFontSize(1.5),
  },
  normalRegular: {
    fontFamily: myFontFamily.Medium,
    fontSize: responsiveFontSize(1.75),
  },
  largeRegular: {
    fontFamily: myFontFamily.Medium,
    fontSize: responsiveFontSize(2),
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
}
