import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from 'react-native';
import styles from './styles';

interface FindCombineSectionProps {
  colors?: string[]; // Array of gradient colors, defaults to ['#D100D3', '#8501EA', '#5824FF']
  containerStyle?: ViewStyle; // Optional style for the container
  title: string; // Title text
  titleStyle?: TextStyle; // Optional style for the title text
  text: string; // Main descriptive text
  textStyle?: TextStyle; // Optional style for the main text
  buttonText: string; // Text for the button
  buttonStyle?: ViewStyle; // Optional style for the button
  buttonTextStyle?: TextStyle; // Optional style for the button text
  icon: React.ComponentType; // Icon component that accepts size and optional style
  iconSize?: number; // Size of the icon, defaults to 16
  iconStyle?: ViewStyle; // Optional style for the icon container
  onPress: (event: GestureResponderEvent) => void; // Function to handle button press
}

const FindCombineSection: React.FC<FindCombineSectionProps> = ({
  colors = ['#D100D3', '#8501EA', '#5824FF'],
  containerStyle,
  title,
  titleStyle,
  text,
  textStyle,
  buttonText,
  buttonStyle,
  buttonTextStyle,
  icon: IconComponent,
  iconStyle,
  onPress,
}) => {
  return (
    <LinearGradient colors={colors} style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <Text style={[styles.text, textStyle]}>{text}</Text>
      <TouchableOpacity
        style={[buttonStyle || styles.button]}
        onPress={onPress}>
        <Text style={[styles.buttonText, buttonTextStyle]}>{buttonText}</Text>
        <View style={[styles.iconContainer, iconStyle]}>
          {IconComponent && <IconComponent />}
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default FindCombineSection;
