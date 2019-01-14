import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import CheckBox from "react-native-check-box";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
  <View style={{ padding: 20 }}>
    {todos.map(todo => (
      <TouchableOpacity style={{ flexDirection: "row" }} key={todo.id}>
        <CheckBox
          style={{ marginTop: 3 }}
          onClick={() => {
            toggleTodo(todo.id);
          }}
          isChecked={todo.completed}
        />
        <Text
          style={{
            fontSize: 24,
            textDecorationLine: todo.completed ? "line-through" : "none"
          }}
        >
          {todo.text}
        </Text>
        <Button
          title="Remove"
          color="red"
          onPress={() => {
            deleteTodo(todo.id);
          }}
        />
      </TouchableOpacity>
    ))}
  </View>
);
export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
