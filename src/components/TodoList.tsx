import React from 'react';
import {View, StyleSheet, ScrollView, Text, Pressable} from 'react-native';
import {ITodo} from '../interfaces/Todo';

interface ITodoList {
  deleteEvent: (id: number) => void;
  Todos: ITodo[];
}

const TodoList: React.FC<ITodoList> = ({Todos, deleteEvent}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {Todos.map((item, index) => (
          <View key={`${index}-${item.id}`} style={styles.containerList}>
            <Text style={styles.textStyle}>{item.name}</Text>
            <Pressable
              style={styles.btnDelete}
              onPress={() => deleteEvent(item.id)}>
              <Text style={styles.btnText}>Hapus</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
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
  textStyle: {
    flex: 4,
    color: '#fff',
    fontSize: 30,
  },
  btnDelete: {
    flex: 1,
    backgroundColor: '#FFA629',
    borderRadius: 15,
  },
  btnText: {
    flex: 4,
    color: '#fff',
    fontSize: 30,
    alignSelf: 'center',
  },
});

export default TodoList;
