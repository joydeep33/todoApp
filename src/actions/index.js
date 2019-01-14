import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  SET_VISIBILITY_FILTER
} from "./actionTypes";
let nextId = Math.random();
export const addTodos = text => ({
  type: ADD_TODO,
  id: nextId++,
  text
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
