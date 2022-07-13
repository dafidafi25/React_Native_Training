import React from 'react';
import {View, StyleSheet} from 'react-native';

interface ITodoInput {}

const TodoInput: React.FC<ITodoInput> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputText} />
      <View style={styles.btnAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'gray',
  },
  inputText: {
    flex: 4,
    backgroundColor: '#AFF4C6',
  },
  btnAdd: {
    flex: 1,
    backgroundColor: '#FFA629',
  },
});

export default TodoInput;
