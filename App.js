import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Alert } from 'react-native';

export default function App() {
  const [list, setList] = useState('');
  const [lists, setLists] = useState([]);

  const handleAdd = () => {
    setLists([{ key: list }, ...lists]);
    setList('');
  };

  const handleClearAll = () => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to clear the entire list?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Yes',
          onPress: () => setLists([])
        }
      ]
    );
  }; 


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Shopping List</Text>
      <TextInput style={styles.input}
        placeholder='Enter new item'
        keyboardType='default'
        onChangeText={text => setList(text)}
        value={list}
      />
      <StatusBar style="auto" />

      <View style={styles.buttonContainer}>
        <Button title='Add' onPress={handleAdd}/>
        <Button title='Clear All' onPress={handleClearAll}/>
      </View>
      <Text></Text>
      <FlatList
        data={lists}
        renderItem={({item}) => <Text style={styles.listText}>{item.key}</Text>}
      />

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '15%'
  },
  header: {
    fontSize: 25,
    marginBottom: 50,
  },
  input: {
    width: 200,
    height: 40,
    borderColor:'gray',
    borderWidth: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  listText: {
    width: 100, 
    textAlign: 'center'
  }

});
