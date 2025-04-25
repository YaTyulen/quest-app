import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

import { Input } from '@rneui/themed';
import { useState } from 'react';

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
        let newData = {...note};
        newData[name] = value;
        setNote(newData)
    };

    const handlerSave = () => {
        addNote(note);
        goBack();
    }

    return (
      <SafeAreaView style={styles.container}>
        <Input placeholder='Имя' value={note.name} onChangeText={(event) => {handlerChangeField('name', event)}}/>
        <Input placeholder='Телефон' value={note.phone} onChangeText={(event) => {handlerChangeField('phone', event)}}/>
        <Input placeholder='Количество игроков' value={note.players} onChangeText={(event) => {handlerChangeField('players', event)}}/>
        <Input placeholder='Стоимость' value={note.cost} onChangeText={(event) => {handlerChangeField('cost', event)}}/>
        <Input placeholder='Дата игры' value={note.date} onChangeText={(event) => {handlerChangeField('date', event)}}/>
        <Input placeholder='Комментарий' value={note.comment} onChangeText={(event) => {handlerChangeField('comment', event)}}/>
        <Button title="Отправить" onPress={() => handlerSave()}/>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  container: {
    width: '80%',
  }
});