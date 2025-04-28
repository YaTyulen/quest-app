import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import MainStack from './router';
import Auth from './page/Auth';

export default function App() {

  return <MainStack/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
