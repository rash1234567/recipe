import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './src/navigator/StackNavigator';

export default function App() {
  return (
      <StackNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#552ac1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
