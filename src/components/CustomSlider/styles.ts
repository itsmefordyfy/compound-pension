// CustomSlider.styles.js
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  sliderTrackBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#e0e0e0',
  },
  sliderTrackFilled: {
    position: 'absolute',
    left: 0,
    height: 12,
    borderRadius: 6,
    overflow: 'hidden',
  },
  sliderGradient: {
    flex: 1,
    borderRadius: 6,
  },
  sliderThumb: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    borderWidth: 3,
    borderColor: '#ffffff',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',

    // Shadow properties for iOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 3,

    // Shadow for Android
    elevation: 3,
  },
  innerCircle: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    borderWidth: 3,
    borderColor: '#D100D3',
  },
});
