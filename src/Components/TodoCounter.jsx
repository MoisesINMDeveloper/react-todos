import React from "react";
import { TodoContext } from "../Context/TodoContext"
import "../Styles/TodoCounter.css";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext)
  return (
    <h1>
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
    </h1>
  );
}
export { TodoCounter };
