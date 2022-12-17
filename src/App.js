/** @format */
import "./styles/app.scss";
import React from "react";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="container">
      <TodoList />
    </div>
  );
};

export default App;
