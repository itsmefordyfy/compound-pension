import React from 'react';
import {TextInput, ViewStyle, TextStyle} from 'react-native';
import styles from './styles';

interface CustomTextInputProps {
  placeholder?: string;
  placeholderTextColor?: string;
  multiline?: boolean;
  style?: ViewStyle | TextStyle;
  inputStyle?: TextStyle;
  value?: string;
  onChangeText?: (text: string) => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  placeholder = 'Enter text',
  placeholderTextColor = '#6F5E76',
  multiline = false,
  style,
  inputStyle,
  value,
  onChangeText,
}) => {
  return (
    <TextInput
      style={[style, inputStyle, styles.input]} // Combines default and custom styles
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      multiline={multiline}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default CustomTextInput;
