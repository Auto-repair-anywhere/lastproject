import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { styles as defaultStyles, styles } from './styles';

const CustomButtonWithSvg = ({ onPress, text, svgUri, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity style={[defaultStyles.button, buttonStyle]} onPress={onPress}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image resizeMode='contain' style={defaultStyles.icon} source={svgUri} />
        <Text style={[defaultStyles.buttonText, textStyle]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButtonWithSvg;
