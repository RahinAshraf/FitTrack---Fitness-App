import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TextInput, Alert } from 'react-native';

export default function WorkoutDetailScreen({ route }) {
  const { workoutType } = route.params;
  const [completed, setCompleted] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleFeedbackSubmit = () => {
    if (feedback.trim()) {
      Alert.alert('Feedback Submitted', `Your feedback: "${feedback}" has been submitted!`);
      setFeedback(''); // Clear the feedback input
    } else {
      Alert.alert('Error', 'Please enter your feedback before submitting.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{workoutType} Workouts</Text>
      <ScrollView>
        <Text style={styles.workoutText}>1. Jumping Jacks - 3 sets of 30 seconds</Text>
        <Text style={styles.workoutText}>2. Push-Ups - 3 sets of 15 reps</Text>
        <Text style={styles.workoutText}>3. Squats - 3 sets of 20 reps</Text>
        <Text style={styles.workoutText}>4. Lunges - 3 sets of 12 reps (each leg)</Text>
        
        <Text style={styles.subtitle}>Tips for a Successful Workout:</Text>
        <Text style={styles.tipText}>
          - Warm up for at least 5-10 minutes before starting.
        </Text>
        <Text style={styles.tipText}>
          - Stay hydrated throughout your workout.
        </Text>
        <Text style={styles.tipText}>
          - Focus on maintaining proper form to prevent injuries.
        </Text>
        <Text style={styles.tipText}>
          - Cool down with stretches after completing your workout.
        </Text>

        <Text style={styles.subtitle}>Your Feedback:</Text>
        <TextInput
          style={styles.feedbackInput}
          placeholder="Share your thoughts about this workout..."
          value={feedback}
          onChangeText={setFeedback}
          multiline
          numberOfLines={4}
        />
        <Button title="Submit Feedback" onPress={handleFeedbackSubmit} />
      </ScrollView>

      <Button
        title={completed ? "Workout Completed!" : "Mark as Completed"}
        onPress={() => setCompleted(true)}
        disabled={completed}
        style={styles.completeButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  workoutText: {
    fontSize: 18,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 2,
  },
  subtitle: {
    fontSize: 20,
    marginVertical: 15,
    fontWeight: 'bold',
    color: '#555',
  },
  tipText: {
    fontSize: 16,
    marginVertical: 5,
  },
  feedbackInput: {
    height: 80,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  completeButton: {
    marginTop: 20,
  },
});
