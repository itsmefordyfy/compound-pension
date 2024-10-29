import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ArrowIcon from '../../assets/icons/arrow.svg'; // Adjust the path if necessary
import styles from './styles';

const PensionCircle = ({
  colors = ['#D100D3', '#8501EA', '#5824FF'],
  totalLabel = 'Pension total',
  totalAmount = '£7,500.23',
  onContributePress = () => {},
  contributeButtonLabel = 'Contribute',
}) => {
  return (
    <View style={styles.pensionCircleContainer}>
      <LinearGradient colors={colors} style={styles.pensionCircleGradient}>
        <View style={styles.pensionCircleInner}>
          <Text style={styles.pensionTotalLabel}>{totalLabel}</Text>
          <Text style={styles.pensionTotal}>{totalAmount}</Text>
        </View>
      </LinearGradient>
      <TouchableOpacity
        style={styles.contributeButton}
        onPress={onContributePress}>
        <Text style={styles.contributeButtonText}>{contributeButtonLabel}</Text>
        <ArrowIcon width={16} height={16} />
      </TouchableOpacity>
    </View>
  );
};

export default PensionCircle;
