import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DummyCamera = () => {
    const navigation = useNavigation();
    const Measurements =()=>{
      navigation.navigate("Measurements");
    }

  return (
    <View style={styles.container}>
      <View style={styles.cameraView}>
        <Text style={styles.cameraText}>Camera View</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={Measurements}>
        <Text style={styles.buttonText}>Take Picture</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DummyCamera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  cameraView: {
    width: "90%",
    height: "70%",
    backgroundColor: "#333",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#555",
  },
  cameraText: {
    color: "#fff",
    fontSize: 18,
    fontStyle: "italic",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#6200ee",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
