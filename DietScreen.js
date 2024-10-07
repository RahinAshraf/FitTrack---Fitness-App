import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Modal, TextInput, Alert } from 'react-native';

export default function DietScreen() {
  // State to manage recipes and preferences
  const [showRecipeModal, setShowRecipeModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [preference, setPreference] = useState('');

  const meals = {
    breakfast: [
      {
        id: '1',
        name: 'Oatmeal with fruits',
        recipe: 'Cook oatmeal according to package instructions. Top with your choice of fruits such as bananas, strawberries, or blueberries.',
      },
      {
        id: '2',
        name: 'Green smoothie',
        recipe: 'Blend spinach, banana, and almond milk until smooth. Add protein powder for extra nutrients.',
      },
    ],
    lunch: [
      {
        id: '3',
        name: 'Grilled chicken salad',
        recipe: 'Grill chicken breast and slice it. Serve on a bed of mixed greens with your favorite dressing.',
      },
      {
        id: '4',
        name: 'Quinoa and veggies',
        recipe: 'Cook quinoa and toss with sautéed vegetables such as bell peppers, zucchini, and carrots.',
      },
    ],
    dinner: [
      {
        id: '5',
        name: 'Salmon with steamed broccoli',
        recipe: 'Bake salmon in the oven and steam broccoli until tender. Serve with lemon juice.',
      },
      {
        id: '6',
        name: 'Sweet potato and beans',
        recipe: 'Bake sweet potatoes and serve with black beans seasoned with cumin and lime.',
      },
    ],
    snacks: [
      {
        id: '7',
        name: 'Greek yogurt',
        recipe: 'Top Greek yogurt with honey and a sprinkle of granola for added texture.',
      },
      {
        id: '8',
        name: 'Almonds and a banana',
        recipe: 'A simple and healthy snack; just grab a handful of almonds and a banana.',
      },
    ],
  };

  // Function to open the recipe modal
  const openRecipeModal = (meal) => {
    setSelectedMeal(meal);
    setShowRecipeModal(true);
  };

  // Function to close the recipe modal
  const closeRecipeModal = () => {
    setSelectedMeal(null);
    setShowRecipeModal(false);
  };

  // Function to handle user preference submission
  const handlePreferenceSubmit = () => {
    if (!preference.trim()) {
      Alert.alert('Error', 'Please enter your dietary preference.');
      return;
    }
    Alert.alert('Preference Saved', `Your preference "${preference}" has been saved.`);
    setPreference('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Personalized Diet Plan</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter dietary preference (e.g., vegetarian, gluten-free)"
        value={preference}
        onChangeText={setPreference}
      />
      <Button title="Save Preference" onPress={handlePreferenceSubmit} />

      <ScrollView>
        {Object.entries(meals).map(([mealType, mealList]) => (
          <View key={mealType}>
            <Text style={styles.sectionTitle}>{mealType.charAt(0).toUpperCase() + mealType.slice(1)}</Text>
            {mealList.map(meal => (
              <View key={meal.id} style={styles.itemContainer}>
                <Text style={styles.item}>{meal.name}</Text>
                <Button title="View Recipe" onPress={() => openRecipeModal(meal)} />
              </View>
            ))}
          </View>
        ))}
      </ScrollView>

      {/* Recipe Modal */}
      <Modal visible={showRecipeModal} animationType="slide">
        <View style={styles.modalContainer}>
          {selectedMeal && (
            <>
              <Text style={styles.modalTitle}>{selectedMeal.name}</Text>
              <Text style={styles.modalRecipe}>{selectedMeal.recipe}</Text>
              <Button title="Close" onPress={closeRecipeModal} />
            </>
          )}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: '600',
  },
  itemContainer: {
    marginBottom: 15,
  },
  item: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalRecipe: {
    fontSize: 16,
    marginBottom: 20,
  },
});
