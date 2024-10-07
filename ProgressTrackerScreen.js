import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function ProgressTrackerScreen() {
  const [workout, setWorkout] = useState('');
  const [progress, setProgress] = useState([]);

  const addWorkout = () => {
    if (workout.length > 0) {
      setProgress([...progress, { key: workout }]);
      setWorkout('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Track Your Progress</Text>
      <TextInput
        style={styles.input}
        placeholder="Log your workout"
        value={workout}
        onChangeText={setWorkout}
      />
      <Button title="Add Workout" onPress={addWorkout} />
      <FlatList
        data={progress}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
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
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});
