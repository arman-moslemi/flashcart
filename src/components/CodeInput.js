import React, {useRef, useState, useImperativeHandle} from 'react';
import {View,StyleSheet} from 'react-native';
import CodeInput from 'react-native-code-input';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { myFontStyle } from "../assets/Constance";

const CodeInputMain = React.forwardRef((props, ref) => {
  const codeInputRef = useRef(null);
  const {onCodeInputEnd, validCode, hasError} = props;

  const onResendButton = props => {
    codeInputRef.current.clear();
  };
  useImperativeHandle(ref, () => {
    return {
      onResendButton: onResendButton,
    };
  });

  const onFinished = code => {
    // if (code === validCode) {
    //     onCodeInputEnd()
    // }

    onCodeInputEnd(code);
  };
  return (
    <View>
      <CodeInput
        ref={codeInputRef}
        activeColor={hasError ? '#FF2323' : '#3A3838'}
        inactiveColor={hasError ? '#FF2323' : '#CECECE'}
        // borderType={'underline'}
        space={styles.space.width}
        size={styles.size.width}
        codeLength={4}
        cellBorderWidth={styles.cellBorderWidth.height}
        containerStyle={styles.containerStyle}
        inputPosition="center"
        codeInputStyle={[styles.inputStyle, hasError && styles.inputErrorStyle]}
        onFulfill={code => onFinished(code)}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection:"row-reverse",
    marginBottom: responsiveHeight(5), //is needed cause of CodeInput package default margin
    height:responsiveHeight(5) ,
  },
  inputStyle: {
    // font: {
    //   weight: 'Bold',
    //   size: '35f',
    // },
    ...myFontStyle.largBold,
    textAlign: 'center',
    color: '#3A3838',
    paddingBottom:responsiveHeight(2),
    borderRadius:10,
    backgroundColor:'#EAEDF3'


  },
  size: {
    width: responsiveWidth(18),
  },
  space: {
    width: 10,
  },
  cellBorderWidth: {
    height: 3,
  },
  inputErrorStyle: {
    color: '#FF2323',
  },
});

export default CodeInputMain;
