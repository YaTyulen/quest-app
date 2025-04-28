import { StyleSheet, Text, SafeAreaView, Button, ScrollView, FlatList } from 'react-native';

import { Input } from '@rneui/themed';
import { useState } from 'react';
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

export default function FormCRM({addNote, goBack}) {
    
  const [note, setNote] = useState({
    name: '',
    phone: '',
    players: '',
    cost: '',
    date: '',
    comment: '',
  });

  const handlerChangeField = (name, value) => {
    count+= 1;
    let newData = {...note, key: count};
    newData[name] = value;
    setNote(newData)
  };

  const handlerSave = () => {
    addNote(note);
    goBack();
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={fields}
        renderItem={({item}) => <Input placeholder={item.nameRU} value={note[item.name]} onChangeText={(event) => {handlerChangeField(item.name, event)}}/>}
        keyExtractor={item => item.key}
      />
      <Button title="Отправить" onPress={() => handlerSave()}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
  }
});