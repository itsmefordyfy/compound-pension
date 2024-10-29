import React from 'react';
import {View, Text, TouchableOpacity, ViewStyle, TextStyle} from 'react-native';
import styles from './styles';

interface ButtonGroupProps {
  options?: string[]; // Array of button options, defaulting to ['25y', '30y', '35y', '40y']
  selectedOption?: string; // The currently selected option, defaulting to '30y'
  onSelect: (option: string) => void; // Function called when an option is selected
  containerStyle?: ViewStyle; // Optional style for the container
  buttonStyle?: ViewStyle; // Optional style for each button
  activeButtonStyle?: ViewStyle; // Style for the active (selected) button
  textStyle?: TextStyle; // Optional style for the button text
  activeTextStyle?: TextStyle; // Style for the text in the active button
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  options = ['25y', '30y', '35y', '40y'],
  selectedOption = '30y',
  onSelect,
  containerStyle,
  buttonStyle,
  activeButtonStyle,
  textStyle,
  activeTextStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {options.map((option, index) => {
        const isActive = option === selectedOption;
        return (
          <TouchableOpacity
            key={index}
            style={[styles.button, buttonStyle, isActive && activeButtonStyle]}
            onPress={() => onSelect(option)}>
            <Text style={[styles.text, textStyle, isActive && activeTextStyle]}>
              {option}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ButtonGroup;
