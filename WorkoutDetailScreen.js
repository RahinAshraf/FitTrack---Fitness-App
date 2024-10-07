import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

export default function WorkoutDetailScreen({ route }) {
  const { workoutType } = route.params;
  const [completed, setCompleted] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{workoutType} Workouts</Text>
      <ScrollView>
        <Text style={styles.workoutText}>1. Jumping Jacks - 3 sets of 30 seconds</Text>
        <Text style={styles.workoutText}>2. Push-Ups - 3 sets of 15 reps</Text>
        <Text style={styles.workoutText}>3. Squats - 3 sets of 20 reps</Text>
        <Text style={styles.workoutText}>4. Lunges - 3 sets of 12 reps (each leg)</Text>
      </ScrollView>

      <Button
        title={completed ? "Workout Completed!" : "Mark as Completed"}
        onPress={() => setCompleted(true)}
        disabled={completed}
      />
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
    textAlign: 'center',
    marginBottom: 20,
  },
  workoutText: {
    fontSize: 18,
    marginVertical: 10,
  },
});
