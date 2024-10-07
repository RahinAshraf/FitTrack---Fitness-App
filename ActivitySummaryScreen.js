import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ActivitySummaryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activity Summary</Text>
      <Text style={styles.item}>Total Workouts Completed: 12</Text>
      <Text style={styles.item}>Calories Burned: 3500 kcal</Text>
      <Text style={styles.item}>Total Distance: 15 km</Text>
      <Text style={styles.item}>Active Days: 6 out of 7 days</Text>
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
  item: {
    fontSize: 18,
    marginBottom: 10,
  },
});
