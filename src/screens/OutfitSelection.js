import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const OutfitSelection = () => {
  const navigation = useNavigation();

  const OpenCamera = () => {
    navigation.navigate("DummyCamera");
  };
  const SQcategory = () => {
    navigation.navigate("SQCategory");
  };
  const PScategory = () => {
    navigation.navigate("PSCategory");
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require("../assets/homeImage.png")} 
        style={styles.logo} 
      />
      <Text style={styles.heading}>Select Outfit Type</Text>
      <TouchableOpacity style={styles.button} onPress={SQcategory}>
        <Text style={styles.buttonText}>Shalwar Qameez</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={PScategory}>
        <Text style={styles.buttonText}>Pent Shirt</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OutfitSelection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 150, // Adjusted size for better visibility
    height: 150,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  button: {
    minWidth:175,
    alignItems:"center",
    backgroundColor: '#6200ee',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
