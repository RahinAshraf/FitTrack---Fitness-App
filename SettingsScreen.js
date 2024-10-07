import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet, AsyncStorage } from 'react-native';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const notifications = await AsyncStorage.getItem('notificationsEnabled');
        const darkMode = await AsyncStorage.getItem('darkModeEnabled');

        if (notifications !== null) {
          setNotificationsEnabled(JSON.parse(notifications));
        }
        if (darkMode !== null) {
          setDarkModeEnabled(JSON.parse(darkMode));
        }
      } catch (error) {
        console.error('Failed to load settings:', error);
      }
    };

    loadSettings();
  }, []);

  useEffect(() => {
    const saveSettings = async () => {
      try {
        await AsyncStorage.setItem('notificationsEnabled', JSON.stringify(notificationsEnabled));
        await AsyncStorage.setItem('darkModeEnabled', JSON.stringify(darkModeEnabled));
      } catch (error) {
        console.error('Failed to save settings:', error);
      }
    };

    saveSettings();
  }, [notificationsEnabled, darkModeEnabled]);

  const handleDarkModeToggle = () => {
    setDarkModeEnabled(previousState => !previousState);
  };

  return (
    <View style={[styles.container, darkModeEnabled && styles.darkContainer]}>
      <Text style={[styles.title, darkModeEnabled && styles.darkTitle]}>Settings</Text>

      <View style={styles.settingItem}>
        <Text style={[styles.settingText, darkModeEnabled && styles.darkText]}>Enable Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={[styles.settingText, darkModeEnabled && styles.darkText]}>Dark Mode</Text>
        <Switch
          value={darkModeEnabled}
          onValueChange={handleDarkModeToggle}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={[styles.settingText, darkModeEnabled && styles.darkText]}>Language</Text>
        {/* Placeholder for Language Selector */}
        <Text style={styles.placeholderText}>English (tap to change)</Text>
      </View>

      <View style={styles.settingItem}>
        <Text style={[styles.settingText, darkModeEnabled && styles.darkText]}>Help</Text>
        <Text style={styles.placeholderText}>View Help & Support</Text>
      </View>

      <View style={styles.settingItem}>
        <Text style={[styles.settingText, darkModeEnabled && styles.darkText]}>About</Text>
        <Text style={styles.placeholderText}>App Version 1.0.0</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#000',
  },
  darkTitle: {
    color: '#fff',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: '#f7f7f7',
  },
  darkSettingItem: {
    backgroundColor: '#444',
  },
  settingText: {
    fontSize: 18,
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
  placeholderText: {
    fontSize: 16,
    color: '#666',
  },
});
