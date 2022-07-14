/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Spacer from './src/components/Spacer';
import TodoInput from './src/components/TodoInput';
import TodoList from './src/components/TodoList';
import {ITodo} from './src/interfaces/Todo';

const App = () => {
  const [listTodos, setListTodos] = React.useState<ITodo[]>([]);

  const handleAdd = (id: number, nama: string) => {
    setListTodos([...listTodos, {id: id, name: nama}]);
  };

  const handleDelete = (id: number) => {
    const newList = listTodos.filter(item => item.id !== id);
    setListTodos(newList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TodoInput addEvent={handleAdd} />
      <Spacer />
      <TodoList Todos={listTodos} deleteEvent={handleDelete} />
      <StatusBar barStyle={'light-content'} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default App;
