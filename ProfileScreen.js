import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Button, 
  StyleSheet, 
  TextInput, 
  Image, 
  TouchableOpacity 
} from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // Import the ImagePicker

export default function ProfileScreen() {
  const [name, setName] = useState("John Doe");
  const [goal, setGoal] = useState("Lose 10 pounds");
  const [profilePicture, setProfilePicture] = useState(null);
  const [quote, setQuote] = useState("Believe in yourself!");

  const handleImagePick = async () => {
    // Ask the user for the permission to access the camera roll
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    
    if (!pickerResult.cancelled) {
      setProfilePicture(pickerResult.uri);
    }
  };

  const resetProfile = () => {
    setName("John Doe");
    setGoal("Lose 10 pounds");
    setProfilePicture(null);
    setQuote("Believe in yourself!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>

      <TouchableOpacity onPress={handleImagePick} style={styles.imageContainer}>
        {profilePicture ? (
          <Image source={{ uri: profilePicture }} style={styles.profileImage} />
        ) : (
          <Text style={styles.imagePlaceholder}>Tap to upload a profile picture</Text>
        )}
      </TouchableOpacity>

      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Fitness Goal:</Text>
      <TextInput
        style={styles.input}
        value={goal}
        onChangeText={setGoal}
      />

      <Text style={styles.label}>Motivational Quote:</Text>
      <TextInput
        style={styles.input}
        value={quote}
        onChangeText={setQuote}
      />

      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={() => alert('Profile Updated!')} />
        <Button title="Reset" onPress={resetProfile} color="#FF6347" />
      </View>
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
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#eaeaea',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  imagePlaceholder: {
    color: '#888',
    fontStyle: 'italic',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
