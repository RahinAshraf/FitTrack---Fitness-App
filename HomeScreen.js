import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fitness App</Text>
      <ScrollView style={styles.scrollView}>
        <Button
          title="Cardio Workouts"
          onPress={() => navigation.navigate('WorkoutDetail', { workoutType: 'Cardio' })}
        />
        <Button
          title="Strength Workouts"
          onPress={() => navigation.navigate('WorkoutDetail', { workoutType: 'Strength' })}
        />
        <Button
          title="Yoga Workouts"
          onPress={() => navigation.navigate('WorkoutDetail', { workoutType: 'Yoga' })}
        />
        <Button
          title="Progress Tracker"
          onPress={() => navigation.navigate('ProgressTracker')}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  scrollView: {
    marginBottom: 20,
  },
});
