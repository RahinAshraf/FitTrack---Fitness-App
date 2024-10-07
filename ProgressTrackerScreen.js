import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Button, 
  FlatList, 
  StyleSheet, 
  Alert 
} from 'react-native';

export default function ProgressTrackerScreen() {
  const [workout, setWorkout] = useState('');
  const [date, setDate] = useState('');
  const [progress, setProgress] = useState([]);

  const addWorkout = () => {
    if (workout.length > 0 && date.length > 0) {
      const newWorkout = { key: workout, date: date };
      setProgress([...progress, newWorkout]);
      setWorkout('');
      setDate('');
      Alert.alert('Success', 'Workout logged successfully!');
    } else {
      Alert.alert('Error', 'Please enter both workout and date!');
    }
  };

  const deleteWorkout = (workoutToDelete) => {
    const filteredProgress = progress.filter(item => item.key !== workoutToDelete);
    setProgress(filteredProgress);
    Alert.alert('Deleted', 'Workout has been removed from your log.');
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.item}>{item.key}</Text>
      <Text style={styles.date}>{item.date}</Text>
      <Button title="Delete" onPress={() => deleteWorkout(item.key)} color="#FF6347" />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Track Your Progress</Text>
      <TextInput
        style={styles.input}
        placeholder="Log your workout"
        value={workout}
        onChangeText={setWorkout}
      />
      <TextInput
        style={styles.input}
        placeholder="Date (e.g., 2023-10-07)"
        value={date}
        onChangeText={setDate}
      />
      <Button title="Add Workout" onPress={addWorkout} />
      <FlatList
        data={progress}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  itemContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    fontSize: 18,
    color: '#333',
  },
  date: {
    fontSize: 14,
    color: '#888',
  },
});
