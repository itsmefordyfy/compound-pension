import React from 'react';
import {View, Text, TouchableOpacity, Linking, Alert} from 'react-native';
import styles from './styles';

const DeveloperProfile = () => {
  const handlePress = () => {
    const email = 'your-email@example.com';
    const subject = 'Hiring Inquiry';
    const body = 'Hi, I am interested in discussing a potential collaboration.';

    const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    Linking.openURL(mailtoURL).catch(() => {
      Alert.alert(
        'Error',
        'Could not open the email app. Please check your email configuration.',
      );
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clifford Francisco</Text>
      <Text style={styles.subtitle}>
        I'm a skilled developer with expertise in React Native, full-stack
        development, and more. Let's build something great together!
      </Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Contact Me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeveloperProfile;
