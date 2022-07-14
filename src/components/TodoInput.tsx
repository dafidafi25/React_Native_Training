import React from 'react';
import {View, StyleSheet, TextInput, Pressable} from 'react-native';

interface ITodoInput {}

const TodoInput: React.FC<ITodoInput> = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.inputText} />
      <Pressable
        style={styles.btnAdd}
        onPress={() => console.log('Button Tertekan')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'gray',
  },
  inputText: {
    flex: 4,
    // backgroundColor: '#AFF4C6',
    fontSize: 30,
    borderRadius: 5,
    borderWidth: 3,
    elevation: 5,
    marginRight: 15,
  },
  btnAdd: {
    flex: 1,
    backgroundColor: '#FFA629',
  },
});

export default TodoInput;
