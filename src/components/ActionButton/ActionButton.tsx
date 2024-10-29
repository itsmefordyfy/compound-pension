import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from 'react-native';
import styles from './styles';

interface ActionButtonProps {
  icon: React.ComponentType; // Icon component, passed with a `size` prop
  iconSize?: number; // Size of the icon, defaults to 24
  text: string; // Button text
  buttonStyle?: ViewStyle; // Optional style for the button container
  iconContainerStyle?: ViewStyle; // Optional style for the icon container
  textStyle?: TextStyle; // Optional style for the text
  onPress: (event: GestureResponderEvent) => void; // Function to handle button press
}

const ActionButton: React.FC<ActionButtonProps> = ({
  icon: IconComponent,
  text,
  buttonStyle,
  iconContainerStyle,
  textStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <View style={[styles.iconContainer, iconContainerStyle]}>
        <IconComponent />
      </View>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
