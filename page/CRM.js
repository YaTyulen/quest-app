import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

import { Input } from '@rneui/themed';
import { useState } from 'react';
import { View } from 'react-native-web';
import FormCRM from '../components/FormCRM';

export default function CRM({navigation}) {
    const [isAdd, setAdd] = useState(false);
    let [listData, setListData] = useState([]);

    const addNote = (note) => {
        setListData([...listData, note]);
    }

    const renderList = () => {
        if(listData && listData.length !== 0){
            for(let item of listData){
                <View>{item.name}</View>
            }
        } else {
            return <View style={styles.emptyBox}>Нет данных</View>
        }
        
    }

    const renderPageCRM = () => {
        if(isAdd){
            return <FormCRM addNote={addNote} goBack={setAdd}/>
        } else {
            return (
                <>
                <Button title='Добавить запись' onPress={() => setAdd(true)}/>
                {renderList()}
                </> 
            )
        }
    }

    return (
      <SafeAreaView style={styles.container}>
        {renderPageCRM()}
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});