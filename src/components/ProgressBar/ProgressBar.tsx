import React from 'react';
import {View, ViewStyle} from 'react-native';
import styles from './styles';

interface ProgressBarProps {
  progress: number; // The progress percentage (0-100)
  containerStyle?: ViewStyle;
  barStyle?: ViewStyle;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  containerStyle,
  barStyle,
}) => {
  return (
    <View style={[styles.progressContainer, containerStyle]}>
      <View style={[styles.progressBar, barStyle, {width: `${progress}%`}]} />
    </View>
  );
};

export default ProgressBar;
