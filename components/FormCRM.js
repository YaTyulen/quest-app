import { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Button, ScrollView, FlatList, View } from 'react-native';

import { Input } from '@rneui/themed';
import {collection, addDoc} from 'firebase/firestore';
import {db} from '../firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
let count = 0;


const fields = [
  {
    key: '1',
    name: 'name',
    nameRU: 'Имя'
  },
  {
    key: '2',
    name: 'phone',
    nameRU: 'Телефон'
  },
  {
    key: '3',
    name: 'players',
    nameRU: 'Количество игроков'
  },
  {
    key: '4',
    name: 'cost',
    nameRU: 'Стоимость'
  },
  {
    key: '5',
    name: 'date',
    nameRU: 'Дата игры'
  },
  {
    key: '6',
    name: 'comment',
    nameRU: 'Комментарий'
  },
]

export default function FormCRM({goBack}) {
    
  const [note, setNote] = useState({
    name: '',
    phone: '',
    players: '',
    cost: '',
    date: '',
    comment: '',
    user: ''
  });

  const handlerChangeField = (name, value) => {
    count+= 1;
    let newData = {...note, key: count};
    newData[name] = value;
    setNote(newData)
  };

  const addNote = async (note) => {
    try {
      await addDoc(collection(db, "games"), note);
    } catch (error) {
      console.error(error)
    }
  }

  const handlerSave = async () => {
    note.user = await AsyncStorage.getItem('user');
    console.log(note);
    addNote(note);
    //addNote(note);
    goBack();
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={fields}
        renderItem={({item}) => <Input placeholder={item.nameRU} value={note[item.name]} onChangeText={(event) => {handlerChangeField(item.name, event)}}/>}
        keyExtractor={item => item.key}
      />
      <View>
        <Button title="Отправить" onPress={() => handlerSave()}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center'
  }
});