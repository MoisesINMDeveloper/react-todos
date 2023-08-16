import "../Styles/TodoItem.css";

function TodoItem(props) {
  return (
    <li>
      <span
        className={`img-v ${props.completed && "img-v--active"}`}
        onClick={props.onComplete}
      ></span>
      <p className={`parrafo ${props.completed && "parrafo-completed"}`}>
        {props.text}{" "}
      </p>
      <span className={`img-x`} onClick={props.onDelete}></span>
    </li>
  );
}

export { TodoItem };
