import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { List } from 'react-native-paper';

const data = new Array(6).fill(null).map((v, i) => ({ key: i.toString(), title: `John Doe ${i+1}` }));

const renderTheFlatListItem = ({item}) => (
  <List.Item
      style = {styles.box}
      title = {item.title}
      onPress={()=> alert(item.title)}
  />
);

export default function ListViewScreen ({navigation, route}) {
  const {id, title} = route.params;
  
  return (
    <View style={styles.container, styles.paragraph}>
      <FlatList 
      data = {data} 
      renderItem = {renderTheFlatListItem}
      keyExtractor = {item => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  box: {
    width: '100%',
    height: 60,
    alignSelf: 'center',
    backgroundColor: '#ccc',
    margin: 7
  }
});
