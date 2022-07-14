import React from 'react';
import {View, StyleSheet, ScrollView, Text, Pressable} from 'react-native';

interface ITodoList {}

const TodoList: React.FC<ITodoList> = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerList}>
          <Text style={styles.inputText} />
          <Pressable
            style={styles.btnAdd}
            onPress={() => console.log('Button Tertekan123')}
          />
        </View>
        <View style={styles.containerList}>
          <Text style={styles.inputText} />
          <Pressable
            style={styles.btnAdd}
            onPress={() => console.log('Button Tertekan123123')}
          />
        </View>
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
