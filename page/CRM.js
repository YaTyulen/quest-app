import { StyleSheet, Text, SafeAreaView, Button, View, FlatList, Dimensions, ScrollView, ActivityIndicator } from 'react-native';

import { useEffect, useState } from 'react';
import FormCRM from '../components/FormCRM';
import {collection, getDocs, onSnapshot} from 'firebase/firestore';
import {db} from '../firebase';

export default function CRM() {
    const [loading, setLoading] = useState()
    const [isAdd, setAdd] = useState(false);
    const [listData, setListData] = useState([]);

    useEffect(() => { 
        setLoading(true)
        const unsubscribe = onSnapshot(collection(db, "games"), (querySnapshot) => {
            const notes = [];
            querySnapshot.forEach((doc) => {
                notes.push(doc.data());
                setLoading(false)
            })

            setListData(notes)
        })

        return () => unsubscribe();
    }, [])

    const numColumns = 6;
    const screenWidth = Dimensions.get("window").width
    const columnWidth = 2* screenWidth / numColumns - 10

    // const getNotes = async () => {
    //     const notes = [];
    //     const querySnapshot = await getDocs(collection(db, "games"));
    //     querySnapshot.forEach((doc) => {
    //         console.log(doc.id, " => ", doc.data());
    //         notes.push(doc.data());
    //     });
    //     setListData(notes);
    // }
    
    const renderItem = (item) => {
        return (
        <View style={styles.row} key={item.key}>
            <Text style={[styles.cell, {width: columnWidth}]}>{item.name}</Text>
            <Text style={[styles.cell, {width: columnWidth}]}>{item.phone}</Text>
            <Text style={[styles.cell, {width: columnWidth}]}>{item.players}</Text>
            <Text style={[styles.cell, {width: columnWidth}]}>{item.cost}</Text>
            <Text style={[styles.cell, {width: columnWidth}]}>{item.date}</Text>
            <Text style={[styles.cell, {width: columnWidth}]}>{item.comment}</Text>
        </View>)
    }

    const renderList = () => {
        if(listData && listData.length !== 0){
            return (
            <View style={styles.table}>
                <View style={styles.headerRow}>
                    <Text style={[styles.headerCell, {width: columnWidth}]}>Имя</Text>
                    <Text style={[styles.headerCell, {width: columnWidth}]}>Телефон</Text>
                    <Text style={[styles.headerCell, {width: columnWidth}]}>Количество игроков</Text>
                    <Text style={[styles.headerCell, {width: columnWidth}]}>Стоимость</Text>
                    <Text style={[styles.headerCell, {width: columnWidth}]}>Дата игры</Text>
                    <Text style={[styles.headerCell, {width: columnWidth}]}>Комментарий</Text>
                </View>
                <FlatList
                    data={listData}
                    renderItem={({item}) => renderItem(item)}
                    keyExtractor={item => item.key}
                />
            </View>)
            
        } else {
            return <View style={styles.emptyBox}><Text>Нет данных</Text></View>
        }
        
    }

    const renderPageCRM = () => {
        if(isAdd){
            return <FormCRM goBack={setAdd}/>
        } else {
            return (
                <View style={styles.wrapper}>
                    {loading ? (<ActivityIndicator size='large'/>) : (<>
                    <Button title='Добавить запись' onPress={() => setAdd(true)}/>
                    <ScrollView horizontal={true} style={styles.scrollView}>
                        {loading ? <ActivityIndicator size='large'/> : (renderList())}
                    </ScrollView> 
                    </>)}
                    
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
        paddingHorizontal: 10,
    },
    emptyBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
    },
    rowTable: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        height: 30,
    },
    scrollView: {
        display: 'flex',
        flexDirection: 'column',
    },
    headerRow: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: '#c5c5c5',
        marginBottom: 10
    },
    headerCell: {
        fontWeight: 'bold',
        fontSize: 16,
        flex: 1,
        textAlign: 'center',
        paddingVertical: 10,
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#c5c5c5',
        paddingVertical: 10
    },
    cell: {
        fontSize: 14,
        flex: 1,
        textAlign: 'center'
    }
});