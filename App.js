import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import GenderSelection from './src/screens/GenderSelection';
import HomePage from './src/screens/Home';
import OutfitSelection from './src/screens/OutfitSelection';
import OpenCamera from './src/screens/OpenCamera';
import DummyCamera from './src/screens/DummyCamera';
import Measurements from './src/screens/Measurements';
import Help from './src/screens/Help';
import SQCategory from './src/screens/SQCategory';
import PSCategory from './src/screens/PSCategory';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"HOME"} component={HomeScreen} />
        <Stack.Screen name={"LOGIN"} component={LoginScreen} />
        <Stack.Screen name={"SIGNUP"} component={SignUpScreen} />
        <Stack.Screen name={"HomePage"} component={HomePage} />
        <Stack.Screen name={"GenderSelection"} component={GenderSelection} />
        <Stack.Screen name={"OutfitSelection"} component={OutfitSelection} />
        <Stack.Screen name={"OpenCamera"} component={OpenCamera} />
        <Stack.Screen name={"DummyCamera"} component={DummyCamera} />
        <Stack.Screen name={"Measurements"} component={Measurements} />
        <Stack.Screen name={"Help"} component={Help} />
        <Stack.Screen name={"SQCategory"} component={SQCategory} />
        <Stack.Screen name={"PSCategory"} component={PSCategory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({});
