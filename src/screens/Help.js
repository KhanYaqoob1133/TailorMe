import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const Help = () => {
    const navigation = useNavigation();
    const handleHome = () => {
        navigation?.navigate('HomePage'); 
    };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Help & Support</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Using the App</Text>
        <Text style={styles.text}>
          - To take measurements, go to the "Measurements" section and follow the instructions.
        </Text>
        <Text style={styles.text}>
          - You can edit measurements by clicking on the "Edit Measurements" button on the Measurements page.
        </Text>
        <Text style={styles.text}>
          - Generate customer orders by adding details.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Common Issues</Text>
        <Text style={styles.text}>
          - Camera not opening? Ensure that camera permissions are granted in your phone settings.
        </Text>
        <Text style={styles.text}>
          - Unable to save measurements? Double-check your input fields and try again.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Support</Text>
        <Text style={styles.text}>
          If you encounter any issues or have any queries, please contact our support team:
        </Text>
        <Text style={styles.contactText}>Email: support@TailorMe.com</Text>
        <Text style={styles.contactText}>Phone: +92-3034275021</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleHome}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#6200ee',
  },
  text: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
    lineHeight: 22,
  },
  contactText: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
