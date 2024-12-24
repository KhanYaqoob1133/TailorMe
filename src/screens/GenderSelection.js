import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const GenderSelection = () => {
  const navigation = useNavigation();
  const OutfitSelection =()=>{
      navigation.navigate("OutfitSelection")
    }
  return (
    <View style={styles.container}>
      <Image 
        source={require("../assets/homeImage.png")} 
        style={styles.logo} 
      />
      <Text style={styles.heading}>Select Your Gender</Text>
      <TouchableOpacity style={styles.button} onPress={OutfitSelection}>
        <Text style={styles.buttonText}>Male</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={OutfitSelection}>
        <Text style={styles.buttonText}>Female</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GenderSelection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    minWidth:100,
    alignItems:"center",
    backgroundColor: '#6200ee',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
