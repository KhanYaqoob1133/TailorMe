import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SQCategory = () => {
  const navigation = useNavigation(); // Use navigation hook

  const [selectedDescription, setSelectedDescription] = useState(null);

  const categories = [
    {
      id: 1,
      name: 'Classic Shalwar Qameez',
      description: 'Traditional design with loose-fitting shalwar and simple straight-cut qameez.',
    },
    {
      id: 2,
      name: 'Modern Shalwar Qameez',
      description: 'Slim-fit with trendy cuts, mandarin collars, and cuffed sleeves.',
    },
    {
      id: 3,
      name: 'Kurta-Style Qameez',
      description: 'Shorter qameez often paired with trousers for a modern look.',
    },
    {
      id: 4,
      name: 'Angrakha Style',
      description: 'Overlapping front panel tied at the side, adding elegance.',
    },
    {
      id: 5,
      name: 'Wedding/Party Wear',
      description: 'Embellished with embroidery, zari, or threadwork for grand occasions.',
    },
    {
      id: 6,
      name: 'Casual Wear',
      description: 'Simple designs with lightweight fabrics like cotton or lawn.',
    },
  ];

  const toggleDescription = (id) => {
    setSelectedDescription(selectedDescription === id ? null : id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shalwar Qameez Categories</Text>
      <ScrollView>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.categoryContainer}
            onPress={() => navigation.navigate('DummyCamera', { categoryId: category.id })} // Navigate to 'OpenCamera' with categoryId
          >
            <View style={styles.categoryHeader}>
              <Text style={styles.categoryName}>{category.name}</Text>
              <TouchableOpacity
                style={styles.descriptionButton}
                onPress={() => toggleDescription(category.id)}
              >
                <Text style={styles.buttonText}>
                  {selectedDescription === category.id ? 'Hide' : 'Details'}
                </Text>
              </TouchableOpacity>
            </View>
            {selectedDescription === category.id && (
              <Text style={styles.description}>{category.description}</Text>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SQCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  title: {
    marginTop: 170,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  categoryContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  descriptionButton: {
    backgroundColor: '#6200ee',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 10,
    fontSize: 14,
    color: '#555',
  },
});
