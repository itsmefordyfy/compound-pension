import React from 'react';
import {View, ViewStyle} from 'react-native';
import Animated from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

interface CustomSliderProps {
  sliderTrackBackgroundStyle?: ViewStyle;
  sliderTrackFilledStyle?: ViewStyle;
  gradientColors?: string[];
  sliderGradientStyle?: ViewStyle;
  sliderThumbStyle?: ViewStyle;
  innerCircleStyle?: ViewStyle;
  onGestureEvent?: (event: PanGestureHandlerGestureEvent) => void;
  animatedTrackStyle?: Animated.AnimateStyle<ViewStyle>;
  animatedThumbStyle?: Animated.AnimateStyle<ViewStyle>;
}

const CustomSlider: React.FC<CustomSliderProps> = ({
  sliderTrackBackgroundStyle,
  sliderTrackFilledStyle,
  gradientColors = ['#D100D3', '#8501EA', '#5824FF'],
  sliderGradientStyle,
  sliderThumbStyle,
  innerCircleStyle,
  onGestureEvent,
  animatedTrackStyle,
  animatedThumbStyle,
}) => {
  return (
    <>
      <Animated.View
        style={[styles.sliderTrackBackground, sliderTrackBackgroundStyle]}
      />
      <Animated.View
        style={[
          styles.sliderTrackFilled,
          sliderTrackFilledStyle,
          animatedTrackStyle,
        ]}>
        <LinearGradient
          colors={gradientColors}
          style={[styles.sliderGradient, sliderGradientStyle]}
        />
      </Animated.View>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[styles.sliderThumb, sliderThumbStyle, animatedThumbStyle]}>
          <View style={[styles.innerCircle, innerCircleStyle]} />
        </Animated.View>
      </PanGestureHandler>
    </>
  );
};

export default CustomSlider;
