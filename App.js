import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import MainStack from './router';

export default function App() {
  return (
    <MainStack/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
