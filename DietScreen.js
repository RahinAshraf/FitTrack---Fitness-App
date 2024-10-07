import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function DietScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Personalized Diet Plan</Text>
      <ScrollView>
        <Text style={styles.sectionTitle}>Breakfast</Text>
        <Text style={styles.item}>- Oatmeal with fruits</Text>
        <Text style={styles.item}>- Green smoothie</Text>

        <Text style={styles.sectionTitle}>Lunch</Text>
        <Text style={styles.item}>- Grilled chicken salad</Text>
        <Text style={styles.item}>- Quinoa and veggies</Text>

        <Text style={styles.sectionTitle}>Dinner</Text>
        <Text style={styles.item}>- Salmon with steamed broccoli</Text>
        <Text style={styles.item}>- Sweet potato and beans</Text>

        <Text style={styles.sectionTitle}>Snacks</Text>
        <Text style={styles.item}>- Greek yogurt</Text>
        <Text style={styles.item}>- Almonds and a banana</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  item: {
    fontSize: 16,
    marginBottom: 5,
  },
});
