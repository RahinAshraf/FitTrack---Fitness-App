import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Fitness App!</Text>

      <ScrollView style={styles.scrollView}>
        <View style={styles.featuredSection}>
          <Text style={styles.featuredTitle}>Featured Workouts</Text>
          <Image 
            source={{ uri: 'https://example.com/featured-workout.jpg' }} // Replace with a valid image URL
            style={styles.featuredImage}
          />
          <Text style={styles.featuredDescription}>
            Check out our featured workouts to kickstart your fitness journey!
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Workout Categories</Text>
        <Button
          title="Cardio Workouts"
          onPress={() => navigation.navigate('WorkoutDetail', { workoutType: 'Cardio' })}
          color="#FF6347" // Tomato color for visual appeal
        />
        <Button
          title="Strength Workouts"
          onPress={() => navigation.navigate('WorkoutDetail', { workoutType: 'Strength' })}
          color="#4682B4" // SteelBlue color for visual appeal
        />
        <Button
          title="Yoga Workouts"
          onPress={() => navigation.navigate('WorkoutDetail', { workoutType: 'Yoga' })}
          color="#32CD32" // LimeGreen color for visual appeal
        />
        <Button
          title="Progress Tracker"
          onPress={() => navigation.navigate('ProgressTracker')}
          color="#6A5ACD" // SlateBlue color for visual appeal
        />

        <View style={styles.tipsSection}>
          <Text style={styles.tipsTitle}>Fitness Tips</Text>
          <Text style={styles.tip}>
            1. Stay hydrated! Drink plenty of water before, during, and after your workouts.
          </Text>
          <Text style={styles.tip}>
            2. Listen to your body. If you feel pain, stop and rest.
          </Text>
          <Text style={styles.tip}>
            3. Set realistic goals and track your progress to stay motivated.
          </Text>
          <Text style={styles.tip}>
            4. Mix up your workouts to prevent boredom and work different muscle groups.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#f9f9f9', // Light gray background for better contrast
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333', // Dark gray color for the title
  },
  scrollView: {
    marginBottom: 20,
  },
  featuredSection: {
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  featuredTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  featuredImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  featuredDescription: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginVertical: 10,
  },
  tipsSection: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tipsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tip: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
});
