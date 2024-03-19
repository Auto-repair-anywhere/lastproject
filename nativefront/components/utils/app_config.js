import { Platform } from 'react-native';

const URL_REGEX = new RegExp(
  /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
);

export const GOOGLE_AUTOCOMPLET_KEY= "AIzaSyCc1cb7zEQVmZm8RzSql9BgXrBj88reaog"


const FONT = {
  bold:'Inter-Bold',
  black:'Inter-Black',
  medium: 'Inter-Medium',
  semi_bold: 'Inter-SemiBold',
  regular: 'Inter-Regular',
  light:"Inter-Light"
};

const COLORS = {
  white:'#FFFFFF',
  blue:'#3A9FFD',
  primaryColor: '#161364',
  secondaryColor:"#460F8C",
  black:"#000000",
  royalPurple:"#2723FF",
  orchidPink:"#E421F7",
  magentaMagic:"#DF21F7",
  grayText:"#969696",
  backgroundColor:"#171364",
  itemBackgrdound:"rgba(255, 255, 255, 0.11)",
  gray:"#C0BED0",
  lightDark:"#1F1F1F",
  red:'#FA5B5B',
  thirdColor:'#3F2885',
  green:'#3EE2A3',
  buttonPrimaryColor: '#3E24F4',
  buttonSecondaryColor:"#C837F0",
  dotBlack:"#141414",
  gold:'#EFC05D',
  borderColor:"#FFFFFF4D",
  purpleBlue : "#8000FF",
  move:"#D1A3FF",
  lightGreen:"#40C18E"
};


export { FONT, COLORS, URL_REGEX  };