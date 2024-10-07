import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import WorkoutDetailScreen from './screens/WorkoutDetailScreen';
import ProgressTrackerScreen from './screens/ProgressTrackerScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WorkoutDetail" component={WorkoutDetailScreen} />
        <Stack.Screen name="ProgressTracker" component={ProgressTrackerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
