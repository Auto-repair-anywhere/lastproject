import { Dimensions, PixelRatio } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export const fontValue = (fontSizePixel, standardScreenHeight = 852) => {
  const heightPercent = (fontSizePixel * screenHeight) / standardScreenHeight;
  return Math.round(heightPercent);
};

export const widthPercentageToDP = (widthPixel) => {
  return PixelRatio.roundToNearestPixel((screenWidth * widthPixel) / 393); 
};

export const heightPercentageToDP = (heightPixel) => {
  return PixelRatio.roundToNearestPixel((screenHeight * heightPixel) / 800); 
};

export const vw = screenWidth / 100;
export const vh = screenHeight / 100;