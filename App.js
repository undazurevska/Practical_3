import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Appbar } from 'react-native-paper';

import HomeScreen from './components/HomeScreen';
import ListView from './components/ListViewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title: "React Application"}} />
      <Stack.Screen name="ListViewScreen" component = {ListView} options = {{title: "List View"}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
