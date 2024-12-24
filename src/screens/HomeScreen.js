import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import React from 'react';
import { colors } from '../utils/colors';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  
  const handleLogin = () => {
    navigation.navigate("LOGIN");
  };

  const handleSignUp = () => {
    navigation.navigate("SIGNUP");
  };

  return (
    <View style={styles.container}>
      {/* Set status bar background color to white */}
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      
      <Text style={styles.TailorMe}>TailorMe</Text>
      <Image source={require("../assets/homeImage.png")} style={styles.homeImage} />
      <Text style={styles.text}>Welcome To TailorMe:</Text>
      <Text style={styles.intro}>
        Easily capture your clothing measurements with just a photo and explore nearby tailors to bring your designs to life. Experience the convenience of AI-driven precision and the seamless integration of style and technology. Find trusted tailors, customize your fittings, and bring your fashion ideas to reality, all in one app.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.loginButtonwrapper, { backgroundColor: '#6200ee' }]} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButtonwrapper} onPress={handleSignUp}>
          <Text style={styles.signButtonText}>Sign-Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white, // Ensures entire background is white
    alignItems: 'center',
    justifyContent: 'flex-start', // Aligns content to the top of the screen
  },
  logo: {
    height: 80,
    width: 80,
    borderRadius: 200,
    marginTop: 30,
  },
  homeImage: {
    height: 250,
    width: 231,
    marginTop: 20,
  },
  text: {
    marginTop: 30, // Adjusted to fit well on screen
    fontSize: 25,
    fontWeight: "bold",
  },
  intro: {
    marginTop: 20,
    maxWidth: "80%",
    textAlign: "justify",
    fontSize: 18,
    fontWeight: "400",
  },
  TailorMe: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 80, // Adjusted for button section position
    flexDirection: "row",
    borderWidth: 2,
    borderColor: colors.primary,
    width: "90%",
    height: 60,
    borderRadius: 100,
  },
  loginButtonwrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    borderRadius: 98,
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "700",
  },
  signButtonText: {
    fontSize: 18,
    fontWeight: "700",
  },
});
