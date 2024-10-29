// FindCombineSection.styles.js
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  pensionCircleContainer: {
    alignItems: 'center',
    marginVertical: 24,
  },
  pensionCircleGradient: {
    width: 250,
    height: 250,
    borderRadius: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pensionCircleInner: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pensionTotalLabel: {
    fontSize: 12,
    color: '#666666',
    fontFamily: 'RightGrotesk-Regular',
  },
  pensionTotal: {
    fontSize: 36,
    color: '#333333',
    fontFamily: 'Right-Grotesk-Compact-Black',
  },
  contributeButton: {
    marginTop: 24,
    flexDirection: 'row', // Aligns text and icon in a row
    alignItems: 'center', // Vertically centers text and icon
    backgroundColor: '#202020',
    paddingHorizontal: 10,
    borderRadius: 25,
    height: 32,
  },
  contributeButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    marginRight: 8, // Adds space between text and icon
  },
});
