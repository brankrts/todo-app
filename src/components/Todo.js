/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../todo/todoSlice";
import EditDialog from "./EditDialog";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div className="todo">
      <p>{todo.description}</p>
      <button onClick={handleOpen}>Edit</button>
      <button onClick={handleDeleteTodo}>Delete</button>
      <EditDialog isOpen={isOpen} setIsOpen={setIsOpen} todo={todo} />
    </div>
  );
};

export default Todo;
