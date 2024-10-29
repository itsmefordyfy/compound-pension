import React from 'react';
import {View, Text, TouchableOpacity, ViewStyle, TextStyle} from 'react-native';
import styles from './styles';

interface RadioButtonProps {
  selected: boolean;
  onPress: () => void;
  label: string;
  color?: string;
  containerStyle?: ViewStyle;
  radioButtonStyle?: ViewStyle;
  labelStyle?: TextStyle;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  selected,
  onPress,
  label,
  color = '#5824FF',
  containerStyle,
  radioButtonStyle,
  labelStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.radioButtonContainer, containerStyle]}
      onPress={onPress}>
      <View
        style={[styles.radioButton, radioButtonStyle, {borderColor: color}]}>
        {selected && (
          <View style={[styles.radioButtonInner, {backgroundColor: color}]} />
        )}
      </View>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default RadioButton;
