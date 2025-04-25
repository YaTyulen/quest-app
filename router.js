import React from 'react';
import Home from './page/Home';
import TimeTable from './page/TimeTable';
import CRM from './page/CRM';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import FormCRM from './components/FormCRM';

const Stack = createStackNavigator();

export default function Router() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{title: 'Главная'}}/>
            <Stack.Screen name="TimeTable" component={TimeTable} options={{title: 'Расписание'}}/>
            <Stack.Screen name="CRM" component={CRM} options={{title: 'История посещений'}}/>
        </Stack.Navigator>
    </NavigationContainer>;
}
