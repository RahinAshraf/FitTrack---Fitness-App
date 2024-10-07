import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Alert } from 'react-native';

export default function WorkoutPlanScreen({ navigation }) {
  const workoutPlans = [
    {
      title: 'Weight Loss Plan',
      description: 'A comprehensive plan focusing on calorie burn and fat loss through a mix of cardio and strength training.',
    },
    {
      title: 'Muscle Gain Plan',
      description: 'A structured regimen designed to increase muscle mass through targeted resistance training and nutritional guidance.',
    },
    {
      title: 'Endurance Training',
      description: 'Improve your stamina with a combination of aerobic exercises and interval training.',
    },
    {
      title: 'Flexibility & Mobility',
      description: 'Enhance your flexibility and joint mobility through yoga and stretching exercises.',
    },
    {
      title: 'HIIT Workouts',
      description: 'High-Intensity Interval Training for maximum calorie burn in a short amount of time.',
    },
    {
      title: 'Strength Training',
      description: 'Build strength with progressive overload exercises targeting major muscle groups.',
    },
    {
      title: 'Bodyweight Workouts',
      description: 'No equipment needed! Use your body weight to build strength and endurance.',
    },
    {
      title: 'Cardio Blast',
      description: 'A fun and dynamic cardio-focused workout to boost your heart rate and burn calories.',
    },
    {
      title: 'Core Strengthening',
      description: 'Focus on building core strength with exercises that stabilize and support your entire body.',
    },
    {
      title: 'Dance Fitness',
      description: 'Combine cardio with fun dance routines to stay fit and enjoy your workouts!',
    },
    {
      title: 'Circuit Training',
      description: 'Fast-paced workouts that target multiple muscle groups with minimal rest for effective training.',
    },
  ];

  const handlePlanSelect = (plan) => {
    Alert.alert('Plan Selected', `You have selected the ${plan.title}.`, [
      { text: 'OK', onPress: () => navigation.navigate('WorkoutDetail', { workoutType: plan.title }) },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Workout Plan</Text>
      <ScrollView>
        {workoutPlans.map((plan, index) => (
          <View key={index} style={styles.planContainer}>
            <Text style={styles.planTitle}>{plan.title}</Text>
            <Text style={styles.planDescription}>{plan.description}</Text>
            <Button title="Select Plan" onPress={() => handlePlanSelect(plan)} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  planContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  planTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2a2a2a',
  },
  planDescription: {
    fontSize: 16,
    marginVertical: 10,
    color: '#555',
  },
});

// Additional Styles for Buttons
const buttonStyles = StyleSheet.create({
  button: {
    marginTop: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    padding: 10,
  },
});
