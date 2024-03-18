import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles as defaultStyles } from './styles';

const CustomButton = ({ onPress, text, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity style={[defaultStyles.button, buttonStyle]} onPress={onPress}>
      <Text style={[defaultStyles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
