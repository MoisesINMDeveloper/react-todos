import React from "react";
import { TodoContext } from "../Context/TodoContext"
import "../Styles/TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext)
  return (
    <input
      placeholder="TODOs PENDIENTE"
      className="todo-search"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}
export { TodoSearch };
