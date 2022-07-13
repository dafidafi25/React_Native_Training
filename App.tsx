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
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import TodoInput from './src/components/TodoInput';
import TodoList from './src/components/TodoList';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TodoInput />
      <View style={styles.spacer} />
      <TodoList />
      <StatusBar barStyle={'light-content'} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  spacer: {
    marginBottom: 20,
  },
});

export default App;
