import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';

const Measurements = ({ navigation }) => {
  const handleHome = () => {
    navigation?.navigate('HomePage');
  };

  const handleShareToWhatsApp = () => {
    const message = `
      Shalwar Qameez Measurements:
      ------------------------------
      Chest: 38 inches
      Shoulder: 18 inches
      Sleeves: 24 inches
      Waist: 36 inches
      Qameez Length: 42 inches
      Shalwar Length: 40 inches
      Bottom: 14 inches
    `;
    
    const phoneNumber = 'whatsapp://send?text=' + encodeURIComponent(message);
    Linking.openURL(phoneNumber);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shalwar Qameez Measurements</Text>
      
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/human.webp")} 
          style={styles.image}
        />
        <Text style={[styles.measurementText, styles.chest]}>38 inches</Text>
        <Text style={[styles.measurementText, styles.shoulder]}>18 inches</Text>
        <Text style={[styles.measurementText, styles.sleeves]}>24 inches</Text>
        <Text style={[styles.measurementText, styles.waist]}>36 inches</Text>
        <Text style={[styles.measurementText, styles.qameezLength]}>42 inches</Text>
        <Text style={[styles.measurementText, styles.shalwarLength]}>40 inches</Text>
        <Text style={[styles.measurementText, styles.bottom]}>14 inches</Text>
      </View>
      
      <View style={styles.measurementContainer}>
        <View style={styles.measurementRow}>
          <Text style={styles.label}>Length of Qameez:</Text>
          <Text style={styles.value}>42 inches</Text>
        </View>
        <View style={styles.measurementRow}>
          <Text style={styles.label}>Chest:</Text>
          <Text style={styles.value}>38 inches</Text>
        </View>
        <View style={styles.measurementRow}>
          <Text style={styles.label}>Shoulder:</Text>
          <Text style={styles.value}>18 inches</Text>
        </View>
        <View style={styles.measurementRow}>
          <Text style={styles.label}>Sleeves:</Text>
          <Text style={styles.value}>24 inches</Text>
        </View>
        <View style={styles.measurementRow}>
          <Text style={styles.label}>Length of Shalwar:</Text>
          <Text style={styles.value}>40 inches</Text>
        </View>
        <View style={styles.measurementRow}>
          <Text style={styles.label}>Waist:</Text>
          <Text style={styles.value}>36 inches</Text>
        </View>
        <View style={styles.measurementRow}>
          <Text style={styles.label}>Bottom:</Text>
          <Text style={styles.value}>14 inches</Text>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleHome}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleShareToWhatsApp}>
          <Text style={styles.buttonText}>Share PDF</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Measurements;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  imageContainer: {
    position: 'relative',
    width: 200,
    height: 300,
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  measurementText: {
    position: 'absolute',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingHorizontal: 5,
    borderRadius: 4,
  },
  chest: {
    top: '30%',
    left: '35%',
  },
  shoulder: {
    top: '20%',
    left: '25%',
  },
  sleeves: {
    top: '25%',
    left: '65%',
  },
  waist: {
    top: '50%',
    left: '35%',
  },
  qameezLength: {
    top: '70%',
    left: '35%',
  },
  shalwarLength: {
    top: '85%',
    left: '35%',
  },
  bottom: {
    top: '90%',
    left: '60%',
  },
  measurementContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 20,
  },
  measurementRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#555',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
