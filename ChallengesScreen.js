import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ChallengesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Fitness Challenge</Text>
      <Text style={styles.challengeText}>Complete 50 push-ups today!</Text>
      <Button title="Mark as Complete" onPress={() => alert('Challenge Completed!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  challengeText: {
    fontSize: 18,
    marginBottom: 20,
  },
});
