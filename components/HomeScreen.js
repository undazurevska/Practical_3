import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { useState } from 'react';

export default function HomeScreen(
  {navigation}) {
    const [counter, setCounter] = useState(0);
    return (
      <View style={styles.container}>
      <Button 
        title="Go to List View" 
        onPress={() => {navigation.navigate ("ListViewScreen", {})} }>
      </Button>
      <View style={{marginTop: 10}}></View>
      <Button
        title='Increase Count'
        onPress={() => {setCounter(counter+1);}}
      />
      <View style={{marginTop:10}}></View>
      <Button
        title='Decrease Count'
        onPress={() => {
          setCounter(counter-1);}}
      />
      <View style={{marginTop:10}}></View>
      <Text style={styles.paragraph}> Current count: {counter}</Text>
      </View> 
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'top',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    margin: 10,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
