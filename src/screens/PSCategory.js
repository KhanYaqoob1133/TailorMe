import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PSCategory = () => {
  const navigation = useNavigation(); // Use navigation hook

  const [selectedDescription, setSelectedDescription] = useState(null);

  const categories = [
    {
      id: 1,
      name: 'Slim Fit Pants',
      description: 'Tapered pants that are form-fitting and modern.',
    },
    {
      id: 2,
      name: 'Bootcut Pants',
      description: 'Pants with a slight flare at the bottom, ideal for boots.',
    },
    {
      id: 3,
      name: 'Chinos',
      description: 'Casual yet stylish pants, often made of cotton or twill fabric.',
    },
    {
      id: 4,
      name: 'Dress Pants',
      description: 'Formal pants made from wool or synthetic fabric, perfect for business wear.',
    },
    {
      id: 5,
      name: 'Cargo Pants',
      description: 'Pants with large pockets on the sides, often worn in casual or work settings.',
    },
    {
      id: 6,
      name: 'Button-Down Shirts',
      description: 'Classic shirts with buttons along the front, perfect for formal occasions.',
    },
    {
      id: 7,
      name: 'Polo Shirts',
      description: 'Casual shirts with a collar and buttons, ideal for relaxed settings.',
    },
    {
      id: 8,
      name: 'T-Shirts',
      description: 'Simple, short-sleeved shirts, perfect for casual wear.',
    },
    {
      id: 9,
      name: 'Dress Shirts',
      description: 'Formal shirts often made of cotton or linen, designed for formal events.',
    },
    {
      id: 10,
      name: 'Henley Shirts',
      description: 'Casual shirts with a buttoned neckline, often worn in relaxed settings.',
    },
  ];

  const toggleDescription = (id) => {
    setSelectedDescription(selectedDescription === id ? null : id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pant & Shirt Categories</Text>
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

export default PSCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  title: {
    marginTop: 100,
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
