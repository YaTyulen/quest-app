import { StyleSheet, Text, SafeAreaView, View, Button } from 'react-native';

export default function Home({ navigation }) {

    const loadScene = (name) => {
        navigation.navigate(name);
    }

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.nav}>
            <View style={styles.buttonNav}>
                <Button title="Расписание" onPress={() => loadScene('TimeTable')}/>
            </View>
            <View style={styles.buttonNav}>
                <Button title="CRM" onPress={() => loadScene('CRM')}/>
            </View>
        </View>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
    nav: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        backgroundColor: '#c5c5c5',
       
    },
    buttonNav: {
        borderWidth: '1px',
        borderColor: '#000000',
        borderStyle: 'solid',
    }
});