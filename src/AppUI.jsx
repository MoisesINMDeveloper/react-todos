import React from "react";
import { TodoCounter } from "./Components/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch";
import { TodoList } from "./Components/TodoList";
import { TodoItem } from "./Components/TodoItem";
import { CreateTodoButton } from "./Components/CreateTodoButton";
import { TodosLoading } from "./Components/TodosLoading";
import { TodosError } from "./Components/TodosError";
import { EmptyTodos } from "./Components/EmptyTodos";
import { Modal } from "./Components/Modal"
import { Todoform } from "./Components/TodoForm"
import { TodoContext } from "./Context/TodoContext";
function AppUI() {
    const { loading, error, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal
    } = React.useContext(TodoContext);
    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
                {searchedTodos.map((todo) => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            <CreateTodoButton setOpenModal={setOpenModal} />
            {openModal && (
                <Modal>
                    <Todoform />
                </Modal>
            )}
        </>
    )
}
export { AppUI }