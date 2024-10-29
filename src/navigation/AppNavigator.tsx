import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import HomeIcon from '../assets/icons/home.svg';
import InsightsIcon from '../assets/icons/insights.svg';
import FundsIcon from '../assets/icons/funds.svg';
import PensionApp from '../screens/PensionApp/PensionApp';
import TransferScreen from '../screens/TransferScreen/TransferScreen';
import DeveloperProfile from '../screens/DeveloperProfile/DeveloperProfile';
import SettingsIcon from '../assets/icons/settings.svg';

// Separate component for the header title
const HeaderTitle = () => (
  <View style={styles.headerTitleContainer}>
    <Text style={styles.headerTitleText}>Hello</Text>
    <Text style={styles.headerTitleName}>Sabina</Text>
  </View>
);

// Separate component for the header right icon
const HeaderRight = () => (
  <TouchableOpacity style={styles.headerRightButton}>
    <SettingsIcon width={24} height={24} />
  </TouchableOpacity>
);

// Define the tabBarIcon function outside of AppNavigator
const getTabBarIcon = (routeName: string) => {
  const iconSize = 24;

  if (routeName === 'Home') {
    return <HomeIcon width={iconSize} height={iconSize} />;
  } else if (routeName === 'Insights') {
    return <InsightsIcon width={iconSize} height={iconSize} />;
  } else if (routeName === 'Funds') {
    return <FundsIcon width={iconSize} height={iconSize} />;
  }
};

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => getTabBarIcon(route.name), // Use getTabBarIcon function
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarStyle: styles.tabBar,
        headerTitle: () => <HeaderTitle />, // Reference the HeaderTitle component
        headerTitleAlign: 'center',
        headerRight: () => <HeaderRight />, // Reference the HeaderRight component
      })}>
      <Tab.Screen name="Home" component={PensionApp} />
      <Tab.Screen name="Insights" component={TransferScreen} />
      <Tab.Screen name="Funds" component={DeveloperProfile} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  tabBarLabel: {
    fontSize: 12,
  },
  headerTitleContainer: {
    alignItems: 'center',
  },
  headerTitleText: {
    fontSize: 14,
    color: 'gray',
  },
  headerTitleName: {
    fontSize: 18,
    fontFamily: 'HelveticaNeue-Condensed',
  },
  headerRightButton: {
    marginRight: 15,
  },
});

export default AppNavigator;
