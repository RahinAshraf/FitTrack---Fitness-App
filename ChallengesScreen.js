import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TextInput, Alert } from 'react-native';

export default function ChallengesScreen() {
  // State to manage challenges
  const [challenges, setChallenges] = useState([
    { id: '1', text: 'Complete 50 push-ups today!', completed: false },
    { id: '2', text: 'Run 5 kilometers today!', completed: false },
    { id: '3', text: 'Drink 8 glasses of water today!', completed: false },
  ]);

  const [newChallenge, setNewChallenge] = useState('');

  // Function to mark a challenge as complete
  const markAsComplete = (id) => {
    const updatedChallenges = challenges.map(challenge =>
      challenge.id === id ? { ...challenge, completed: true } : challenge
    );
    setChallenges(updatedChallenges);
    Alert.alert('Challenge Completed!', 'Well done on completing the challenge!');
  };

  // Function to add a new challenge
  const addChallenge = () => {
    if (newChallenge.trim() === '') {
      Alert.alert('Error', 'Please enter a challenge.');
      return;
    }
    
    const newChallengeItem = {
      id: (challenges.length + 1).toString(),
      text: newChallenge,
      completed: false,
    };

    setChallenges([...challenges, newChallengeItem]);
    setNewChallenge(''); // Clear input field
  };

  // Render each challenge item
  const renderChallengeItem = ({ item }) => (
    <View style={styles.challengeContainer}>
      <Text style={[styles.challengeText, item.completed && styles.completed]}>
        {item.text}
      </Text>
      {!item.completed && (
        <Button title="Mark as Complete" onPress={() => markAsComplete(item.id)} />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Fitness Challenges</Text>

      {/* Input for new challenge */}
      <TextInput
        style={styles.input}
        placeholder="Add a new challenge"
        value={newChallenge}
        onChangeText={setNewChallenge}
      />
      <Button title="Add Challenge" onPress={addChallenge} />

      {/* Challenge List */}
      <FlatList
        data={challenges}
        renderItem={renderChallengeItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  list: {
    width: '100%',
  },
  challengeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    elevation: 2,
  },
  challengeText: {
    fontSize: 16,
    flex: 1,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});
