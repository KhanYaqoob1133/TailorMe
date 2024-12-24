import { StyleSheet, Text, View, TouchableOpacity, Image, Linking } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const navigation = useNavigation();

  const GenderSelection = () => {
    navigation.navigate("GenderSelection");
  };

  const HelpPage = () => {
    navigation.navigate("Help");
  };

  const openGoogleMaps = () => {
    const query = "tailor shops near me"; // You can customize the query
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

    Linking.openURL(url).catch(err => {
      console.error("Failed to open Google Maps: ", err);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>TailorMe</Text>
        <TouchableOpacity style={styles.profileContainer}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQLHZh0aF5Og2DF4G19yPVx_QGjXfaBByFZA&s' }}
            style={[styles.logo, { marginTop: 20 }]}
          />
          <Text style={styles.editText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={GenderSelection}>
          <Text style={styles.buttonText}>Take New Measurements</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Previous Measurements</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={openGoogleMaps}>
          <Text style={styles.buttonText}>Find Nearby Tailor</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={HelpPage}>
          <Text style={styles.buttonText}>Help</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Aligns items on both ends
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileContainer: {
    alignItems: 'center',
    flexDirection: 'column', // Stack profile image and text vertically
  },
  editText: {
    color: '#6200ee',
    fontSize: 14,
    marginTop: 5, // Adds space between image and text
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
    minWidth: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 100,
  },
  heading: {
    fontSize: 35,
    fontWeight: "bold",
  },
});
