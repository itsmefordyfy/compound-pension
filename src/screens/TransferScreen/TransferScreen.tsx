import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import RadioButton from '../../components/RadioButton/RadioButton'; // Import the reusable RadioButton component
import InfoIcon from '../../assets/icons/info.svg'; // Adjust the path if necessary
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import styles from './styles';

const TransferScreen = () => {
  const [selectedOption, setSelectedOption] = useState('All');
  const [progress, setProgress] = useState(10); // Initial progress is 50%
  const [textInput, setTextInput] = useState(''); // Initial progress is 50%

  const increaseProgress = () => {
    setProgress(prevProgress => Math.min(prevProgress + 10, 100));
  };

  const setTextInputValue = (value: string) => {
    setTextInput(value);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Progress Bar */}
      <ProgressBar
        progress={progress}
        containerStyle={styles.customProgressContainer}
        barStyle={styles.customProgressBar}
      />

      {/* Title */}
      <Text style={styles.title}>How much will you transfer?</Text>

      {/* Options (All/Part) */}
      <View style={styles.optionContainer}>
        <RadioButton
          label="All"
          selected={selectedOption === 'All'}
          onPress={() => setSelectedOption('All')}
          containerStyle={styles.radioContainer}
          radioButtonStyle={styles.radioButton}
          labelStyle={styles.radioLabel}
          color="#65558F"
        />
        <RadioButton
          label="Part"
          selected={selectedOption === 'Part'}
          onPress={() => setSelectedOption('Part')}
          containerStyle={styles.radioContainer}
          radioButtonStyle={styles.radioButton}
          labelStyle={styles.radioLabel}
          color="#65558F"
        />

        {/* Input Field */}
        <CustomTextInput
          placeholder="Estimated pension value"
          placeholderTextColor="#6F5E76"
          multiline={true}
          style={styles.customInput}
          value={textInput}
          onChangeText={value => setTextInputValue(value)}
        />
      </View>

      {/* Info Section */}
      <View style={styles.infoContainer}>
        <View style={styles.infoHeader}>
          <InfoIcon width={20} height={20} fill="#000" />{' '}
          {/* Use Info SVG icon */}
          <Text style={styles.infoTitle}>Estimating your pension value</Text>
        </View>
        <Text style={styles.infoText}>
          We need an estimate of your pension value for our service providers to
          complete the transfer.
        </Text>
        <Text style={styles.infoBullet}>
          <Text style={styles.bulletSymbol}>•</Text>
          {'  '}Check old pension documents for a pension value - you can use
          the most recent value you find.
        </Text>
        <Text style={styles.infoBullet}>
          <Text style={styles.bulletSymbol}>•</Text>
          {'  '}However it doesn’t have to be precise - don’t worry if you’re
          not sure, your best estimate will do.
        </Text>
        <Text style={styles.infoBullet}>
          <Text style={styles.bulletSymbol}>•</Text>
          {'  '}One way to estimate an old workplace pension - multiply the
          number of years you worked there by £1,000.
        </Text>
      </View>

      {/* Contribute Button */}
      <CustomButton
        title="Contribute"
        onPress={increaseProgress}
        buttonStyle={styles.customButton}
        textStyle={styles.customButtonText}
      />
    </ScrollView>
  );
};

export default TransferScreen;
