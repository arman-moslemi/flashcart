import { responsiveFontSize } from "react-native-responsive-dimensions";


//myFonts
const myFontFamily = {
  Bold: "RadomirTinkov-Gilroy-Bold",
  regularItalic: "RadomirTinkov-Gilroy-RegularItalic",
  MediumItalic: "RadomirTinkov-Gilroy-MediumItalic",
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
  smallRegularItalic: {
    fontFamily: myFontFamily.regularItalic,
    fontSize: responsiveFontSize(1),
  },
  mediumRegularItalic: {
    fontFamily: myFontFamily.regularItalic,
    fontSize: responsiveFontSize(1.5),
  },
  normalRegularItalic: {
    fontFamily: myFontFamily.regularItalic,
    fontSize: responsiveFontSize(1.75),
  },
  largRegularItalic: {
    fontFamily: myFontFamily.regularItalic,
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
  }
}
