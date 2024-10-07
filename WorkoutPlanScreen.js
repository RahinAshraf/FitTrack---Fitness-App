import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

export default function WorkoutPlanScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Workout Plan</Text>
      <ScrollView>
        <Button
          title="Weight Loss Plan"
          onPress={() => navigation.navigate('WorkoutDetail', { workoutType: 'Weight Loss' })}
        />
        <Button
          title="Muscle Gain Plan"
          onPress={() => navigation.navigate('WorkoutDetail', { workoutType: 'Muscle Gain' })}
        />
        <Button
          title="Endurance Training"
          onPress={() => navigation.navigate('WorkoutDetail', { workoutType: 'Endurance' })}
        />
        <Button
          title="Flexibility & Mobility"
          onPress={() => navigation.navigate('WorkoutDetail', { workoutType: 'Flexibility' })}
        />
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
});
