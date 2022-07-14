import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Pressable, Text} from 'react-native';

interface ITodoInput {
  addEvent: (id: number, nama: string) => void;
}

const TodoInput: React.FC<ITodoInput> = ({addEvent}) => {
  const [todoInput, setTodoInput] = useState<string>('');
  const idRand = Math.random();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputText}
        value={todoInput}
        onChangeText={newText => setTodoInput(newText)}
      />
      <Pressable
        style={styles.btnAdd}
        onPress={() => addEvent(idRand, todoInput)}>
        <Text style={styles.btnText}>+</Text>
      </Pressable>
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
    justifyContent: 'center',
    backgroundColor: '#FFA629',
    borderRadius: 20,
  },
  btnText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 50,
  },
});

export default TodoInput;
