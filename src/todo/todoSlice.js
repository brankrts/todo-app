/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      console.log(action.payload);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return { ...todo, description: action.payload.description };
        }
        return todo;
      });
    },
  },
});
export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
