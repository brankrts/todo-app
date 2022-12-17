/** @format */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { addTodo } from "../todo/todoSlice";
import { v4 as uuidv4 } from "uuid";
import EditDialog from "./EditDialog";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const [todoInput, setTodoInput] = useState();

  return (
    <>
      <form className="todo-list">
        <input
          value={todoInput}
          type="text"
          onChange={(e) => {
            setTodoInput(e.target.value);
          }}
          placeholder="Add new todo"
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            dispatch(
              addTodo({
                id: uuidv4(),
                description: todoInput,
                createdAt: new Date(Date.now()).toDateString(),
              })
            );
            setTodoInput("");
          }}
        >
          Add Todo
        </button>
      </form>

      {todos.map((todo) => (
        <>
          <Todo todo={todo}></Todo>
          <EditDialog />
        </>
      ))}
    </>
  );
};

export default TodoList;
