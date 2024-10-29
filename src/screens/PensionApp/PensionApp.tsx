import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
import {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
  useDerivedValue,
  runOnJS,
} from 'react-native-reanimated';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ManageContributionsIcon from '../../assets/icons/manage-contributions.svg'; // Update with the correct path to your SVG file
import YourActivityIcon from '../../assets/icons/your-activity.svg'; // Adjust the path as needed
import ArrowIcon from '../../assets/icons/arrow.svg'; // Adjust the path if necessary
import PensionCircle from '../../components/PensionCircle/PensionCircle';
import ActionButton from '../../components/ActionButton/ActionButton';
import FindCombineSection from '../../components/FindCombineSection/FindCombineSection';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';
import CustomSlider from '../../components/CustomSlider/CustomSlider';
import styles from './styles';

const screenWidth = Dimensions.get('window').width;

const PensionApp = () => {
  const sliderValue = useSharedValue(7);
  const [selectedTimeframe, setSelectedTimeframe] = useState('30y');
  const [chartData, setChartData] = useState([100, 200, 400, 800]);
  const [monthlyContribution, setMonthlyContribution] = useState(100); // initial amount
  const startingValue = useSharedValue(0); // Track where each gesture starts

  const animatedThumbStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: (sliderValue.value / 100) * (screenWidth - 120)},
      ],
    };
  });

  const animatedTrackStyle = useAnimatedStyle(() => {
    return {
      width: `${sliderValue.value}%`,
    };
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: () => {
      // Save the current sliderValue as the starting point
      startingValue.value = sliderValue.value;
    },
    onActive: event => {
      const newValue = Math.max(
        0,
        Math.min(
          100,
          startingValue.value + (event.translationX / (screenWidth - 60)) * 100,
        ),
      );

      console.log('sliderValue.value: ', newValue);

      // Update the slider's visual position
      sliderValue.value = withSpring(newValue);
    },
  });

  // useDerivedValue to monitor sliderValue and trigger setMonthlyContribution in the JS thread
  useDerivedValue(() => {
    const incrementedContribution = 100 * Math.round(sliderValue.value / 10);
    runOnJS(setMonthlyContribution)(incrementedContribution);
  }, [sliderValue]);

  const handleTimeframeSelect = (timeframe: string) => {
    setSelectedTimeframe(timeframe);

    // Hypothetical projections for each timeframe
    let newData;
    switch (timeframe) {
      case '25y':
        newData = [100, 200, 300, 450, 600, 750]; // 25-year projection
        break;
      case '30y':
        newData = [100, 250, 400, 650, 850, 1100]; // 30-year projection
        break;
      case '35y':
        newData = [100, 300, 500, 800, 1200, 1500]; // 35-year projection
        break;
      case '40y':
        newData = [100, 350, 600, 1000, 1500, 2000]; // 40-year projection
        break;
      default:
        newData = [100, 150, 300, 400, 550, 800];
    }
    setChartData(newData);
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        {/* Pension Total */}
        <PensionCircle />
        {/* Manage Contributions & Activity Buttons */}
        <View style={styles.actionButtonsContainer}>
          <ActionButton
            icon={ManageContributionsIcon}
            text="Manage contributions"
            buttonStyle={styles.manageContributionsButton}
            iconContainerStyle={styles.iconPlaceholderPink}
            textStyle={styles.actionButtonText}
            onPress={() => {
              /* Handle button press */
            }}
          />
          <ActionButton
            icon={YourActivityIcon}
            text="Your activity"
            buttonStyle={styles.yourActivityButton}
            iconContainerStyle={styles.iconPlaceholderBlue}
            textStyle={styles.actionButtonText}
            onPress={() => {
              /* Handle button press */
            }}
          />
        </View>

        {/* Find & Combine Section */}
        <FindCombineSection
          title="Find & combine your old pensions"
          text="Ready to take charge? Transfer your pension savings into one place with ease—we'll help you find any lost pots along the way."
          buttonText="Let's get started"
          containerStyle={styles.findCombineContainer}
          titleStyle={styles.findCombineTitle}
          textStyle={styles.findCombineText}
          buttonStyle={styles.getStartedButtonUpdated}
          buttonTextStyle={styles.getStartedButtonTextUpdated}
          icon={ArrowIcon}
          iconSize={16}
          iconStyle={styles.getStartedIconPlaceholderUpdated}
          onPress={() => {
            /* Handle button press */
          }}
        />

        {/* Explore Pension Potential Section */}
        <View style={styles.exploreContainer}>
          <Text style={styles.exploreTitle}>
            Explore your pension potential
          </Text>
          <Text style={styles.exploreDescription}>
            Adjust your monthly personal contributions to explore how much you
            could have when you retire.
          </Text>

          <LineChart
            data={{
              labels: ['5y', '10y', '15y', '20y', '25y', '30y'], // Adjust based on the x-axis (years)
              datasets: [
                {
                  data: chartData,
                  color: () => `rgba(138, 0, 212, 1)`,
                  strokeWidth: 2,
                  withDots: false,
                },
              ],
            }}
            width={screenWidth - 55}
            height={200}
            chartConfig={{
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              fillShadowGradient: `rgba(138, 0, 212, 1)`, // Gradient color
              fillShadowGradientOpacity: 0.2, // Adjust opacity as needed
              propsForDots: {r: '0'},
            }}
            style={styles.lineChartStyle}
          />

          <ButtonGroup
            options={['25y', '30y', '35y', '40y']}
            selectedOption={selectedTimeframe}
            onSelect={handleTimeframeSelect}
            containerStyle={styles.containerStyle}
            buttonStyle={styles.buttonStyle}
            activeButtonStyle={styles.activeButtonStyle}
            textStyle={styles.textStyle}
            activeTextStyle={styles.activeTextStyle}
          />

          <Text style={styles.targetRetirementText}>Your current fund</Text>
          <Text style={styles.targetRetirement}>Target retirement 2055</Text>
          <Text style={styles.estimatedPot}>
            Estimated pension pot{'\n'}£480,000
          </Text>

          <View style={styles.sliderContainer}>
            <Text style={styles.monthlyContributionLabel}>
              £{monthlyContribution}
            </Text>
            <Text style={styles.perMonthLabel}>per month</Text>
          </View>
          <View style={styles.customSliderContainer}>
            <CustomSlider
              sliderTrackBackgroundStyle={{backgroundColor: '#E0E0E0'}}
              onGestureEvent={onGestureEvent}
              animatedTrackStyle={animatedTrackStyle}
              animatedThumbStyle={animatedThumbStyle}
            />
          </View>
          <Text style={styles.disclaimerText}>
            Past performance is not a reliable indicator of future performance.
            Assumptions have been used in this projection.
          </Text>
          <TouchableOpacity>
            <Text style={styles.findOutMoreText}>Find out more</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default PensionApp;
