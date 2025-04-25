import { StyleSheet, Text, SafeAreaView, Button, View } from 'react-native';

import { Input } from '@rneui/themed';
import { useState } from 'react';
import FormCRM from '../components/FormCRM';

export default function CRM({navigation}) {
    const [isAdd, setAdd] = useState(false);
    let [listData, setListData] = useState([]);
    console.log('listData', listData);
    

    const addNote = (note) => {
        setListData([...listData, note]);
    }

    const renderList = () => {
        if(listData && listData.length !== 0){
            let jsx = []
            for(let item of listData){
                jsx.push(<Text>{item.name}</Text>) 
            }
            return jsx;
        } else {
            return <View style={styles.emptyBox}><Text>Нет данных</Text></View>
        }
        
    }

    const renderPageCRM = () => {
        if(isAdd){
            return <FormCRM addNote={addNote} goBack={setAdd}/>
        } else {
            return (
                <View style={styles.wrapper}>
                    <Button title='Добавить запись' onPress={() => setAdd(true)}/>
                    {renderList()}
                </View> 
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
        padding: 20,
        alignItems: 'center',
    },
    emptyBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
    }
});