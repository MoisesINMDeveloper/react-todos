import React from "react";
import "../Styles/CreateTodoButton.css";

function CreateTodoButton({ setOpenModal }) {
  return (
    <button
      className="button-blue"
      onClick={() => {
        { setOpenModal(state => !state) }
      }}
    ></button>
  );
}
export { CreateTodoButton };
