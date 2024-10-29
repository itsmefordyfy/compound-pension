// FindCombineSection.styles.js
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  headerGreeting: {
    fontSize: 18,
    color: '#333333',
    fontFamily: 'RightGrotesk-Regular',
  },
  headerName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    fontFamily: 'RightGrotesk-Bold',
  },
  settingsButton: {
    padding: 12,
  },
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
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  manageContributionsButton: {
    flexDirection: 'row', // Aligns icon and text in a row
    alignItems: 'center', // Vertically centers icon and text
    borderWidth: 2,
    borderColor: '#D100D3',
    paddingVertical: 12,
    paddingHorizontal: 16, // Adds padding around the button
    borderRadius: 16,
    width: '50%', // Set to full width if needed
  },
  yourActivityButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#5824FF',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 16,
    width: '48%',
  },
  iconPlaceholderPink: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#D100D3',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8, // Adds space between icon and text
  },
  iconPlaceholderBlue: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#5824FF', // Blue color
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonText: {
    color: '#333333',
    fontSize: 16,
    flexShrink: 1, // Prevents text from overflowing
    fontFamily: 'HelveticaNeue-Condensed',
  },
  findCombineContainer: {
    padding: 24,
    borderRadius: 16,
    marginVertical: 24,
  },
  findCombineTitle: {
    fontSize: 30,
    color: '#FFFFFF',
    marginBottom: 12,
    fontFamily: 'Right-Grotesk-Compact-Black',
  },
  findCombineText: {
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 24,
    fontFamily: 'PP Right Grotesk',
  },
  getStartedButtonUpdated: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#202020',
    paddingHorizontal: 20,
    borderRadius: 16,
    alignSelf: 'flex-start',
    height: 32,
    width: 172,
  },
  getStartedIconPlaceholderUpdated: {
    width: 24,
    height: 24,
    marginLeft: 3,
    borderRadius: 12,
    alignItems: 'center', // Centers content horizontally
    justifyContent: 'center', // Centers content vertically
  },

  getStartedButtonTextUpdated: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'RightGrotesk-Bold',
    fontWeight: 'bold',
  },
  exploreContainer: {
    padding: 24,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#8a00d4',
    marginVertical: 24,
  },
  exploreTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  exploreDescription: {
    fontSize: 14,
    marginVertical: 16,
  },
  exploreButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 10,
  },
  monthlyContributionLabel: {
    fontSize: 40,
    color: '#212121',
    fontFamily: 'Right-Grotesk-Compact-Black',
  },
  perMonthLabel: {
    fontSize: 12,
    marginLeft: 8,
    fontFamily: 'HelveticaNeue-Condensed',
  },
  customSliderContainer: {
    position: 'relative',
    width: '100%',
    height: 30,
    justifyContent: 'center',
    marginVertical: 16,
  },
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
    width: 30, // Adjust size as needed
    height: 30,
    borderRadius: 20,
    backgroundColor: '#ffffff', // Inner circle color
    borderWidth: 3,
    borderColor: '#D100D3',
  },
  targetRetirementText: {
    fontSize: 14,
    fontFamily: 'HelveticaNeue-Condensed',
  },
  targetRetirement: {
    fontSize: 16,
    color: '#D100D3',
    fontFamily: 'HelveticaNeue-Condensed',
    marginBottom: 20,
  },
  estimatedPot: {
    fontSize: 14,
    fontFamily: 'HelveticaNeue-Condensed',
  },
  disclaimerText: {
    fontSize: 12,
    fontFamily: 'HelveticaNeue-CondensedObl',
  },
  findOutMoreText: {
    fontSize: 12,
    color: '#D100D3',
    textDecorationLine: 'underline',
    fontFamily: 'HelveticaNeue-CondensedObl',
  },
  containerStyle: {
    marginVertical: 10,
  },
  buttonStyle: {
    backgroundColor: '#ffffff',
    borderRadius: 66,
    width: 70,
    height: 22,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    justifyContent: 'center',
  },
  activeButtonStyle: {
    backgroundColor: '#5824FF',
  },
  textStyle: {
    color: '#8501EA',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  activeTextStyle: {
    color: '#fff',
    fontSize: 14,
  },
  lineChartStyle: {
    alignSelf: 'center',
  },
});
