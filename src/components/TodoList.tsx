import React from 'react';
import {View, StyleSheet} from 'react-native';

interface ITodoList {}

const TodoList: React.FC<ITodoList> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerList}>
        <View style={styles.inputText} />
        <View style={styles.btnAdd} />
      </View>
      <View style={styles.containerList}>
        <View style={styles.inputText} />
        <View style={styles.btnAdd} />
      </View>
      <View style={styles.containerList}>
        <View style={styles.inputText} />
        <View style={styles.btnAdd} />
      </View>
      <View style={styles.containerList}>
        <View style={styles.inputText} />
        <View style={styles.btnAdd} />
      </View>
      <View style={styles.containerList}>
        <View style={styles.inputText} />
        <View style={styles.btnAdd} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 14,
    backgroundColor: 'gray',
  },
  containerList: {
    flex: 1,
    padding: 15,
    flexDirection: 'row',
    maxHeight: 100,
  },
  inputText: {
    flex: 4,
    backgroundColor: '#F24822',
  },
  btnAdd: {
    flex: 1,
    backgroundColor: '#FFA629',
  },
});

export default TodoList;
