import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './app/navigation/Navigation';
import { LogBox } from 'react-native';
export default function App() {
  LogBox.ignoreAllLogs(true);
  return (
    <Navigation />
  );
}

