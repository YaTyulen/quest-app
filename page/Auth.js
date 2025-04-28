import { StyleSheet, Text, SafeAreaView, View, Button } from 'react-native';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Input } from '@rneui/themed';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Auth({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    async function signIn(email, password) {
      try {
        await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
          AsyncStorage.setItem('user', userCredential.user.uid);
          navigation.replace('Home');
          
        }); 
      } catch {
        console.log('error');   
      }
    }

    return (
      <SafeAreaView style={styles.container}>
        <Input placeholder="Email" value={email} onChangeText={(event) => setEmail(event)}/>
        <Input placeholder="Password" value={password} onChangeText={(event) => setPassword(event)}/>
        <Button title="Войти" onPress={() => signIn(email, password)}/>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({

});