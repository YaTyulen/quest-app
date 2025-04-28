import { StyleSheet, Text, SafeAreaView, Button, View, FlatList, Dimensions, ScrollView } from 'react-native';

import { useState } from 'react';
import FormCRM from '../components/FormCRM';

export default function CRM() {
    const [isAdd, setAdd] = useState(false);
    const [listData, setListData] = useState([]);

    const numColumns = 6;
    const screenWidth = Dimensions.get("window").width
    const columnWidth = 2* screenWidth / numColumns - 10;
    

    const addNote = (note) => {
        setListData([...listData, note]);
    }

    const renderItem = (item) => {
        return (<View style={styles.rowTable} key={item.key}>
            <View style={{width: columnWidth}}><Text>{item.name}</Text></View>
            <View style={{width: columnWidth}}><Text>{item.phone}</Text></View>
            <View style={{width: columnWidth}}><Text>{item.players}</Text></View>
            <View style={{width: columnWidth}}><Text>{item.cost}</Text></View>
            <View style={{width: columnWidth}}><Text>{item.date}</Text></View>
            <View style={{width: columnWidth}}><Text>{item.comment}</Text></View>
        </View>)
    }

    const headerTable = () => {
        return (<View style={styles.rowTable}>
            <View style={{width: columnWidth}}><Text>Имя</Text></View>
            <View style={{width: columnWidth}}><Text>Телефон</Text></View>
            <View style={{width: columnWidth}}><Text>Количество игроков</Text></View>
            <View style={{width: columnWidth}}><Text>Стоимость</Text></View>
            <View style={{width: columnWidth}}><Text>Дата игры</Text></View>
            <View style={{width: columnWidth}}><Text>Комментарий</Text></View>
        </View>)
    }

    const renderList = () => {
        if(listData && listData.length !== 0){
            return (<>
                <View style={styles.rowTable}>
                    <View style={{width: columnWidth}}><Text>Имя</Text></View>
                    <View style={{width: columnWidth}}><Text>Телефон</Text></View>
                    <View style={{width: columnWidth}}><Text>Количество игроков</Text></View>
                    <View style={{width: columnWidth}}><Text>Стоимость</Text></View>
                    <View style={{width: columnWidth}}><Text>Дата игры</Text></View>
                    <View style={{width: columnWidth}}><Text>Комментарий</Text></View>
                </View>
                <FlatList
                    data={listData}
                    renderItem={({item}) => renderItem(item)}
                    keyExtractor={item => item.key}
                />
            </>)
            
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
                    <ScrollView horizontal={true} style={styles.table}>
                        {renderList()}
                    </ScrollView>
                    
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
        padding: 10,
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
    },
    rowTable: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        height: 30,
    },
    table: {
        display: 'flex',
        flexDirection: 'column'
    }
});