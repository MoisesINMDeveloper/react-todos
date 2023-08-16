import React from "react";
import { TodoContext } from "../Context/TodoContext";
import "../Styles/TodoForm.css";

function Todoform() {
    const {
        addTodo,
        setOpenModal } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    const onCancel = () => {
        setOpenModal(false);
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="modal-container">
                <h2 className="modal-title">Ingresa nuevos TODOs</h2>
                <textarea
                    className="modal-input"
                    placeholder="Un nuevo TODOs"
                    value={newTodoValue}
                    onChange={onChange}
                    required />
                <div className="modal-container--decision">
                    <button className="modal-decision-x" type="submit"
                        onClick={onCancel}
                    >
                        Cancelar
                    </button>
                    <button className="modal-decision-a" type="submit"
                        onClick={onSubmit}
                    >
                        Añadir
                    </button>
                </div>
            </div >
        </form >
    )
}
export { Todoform };