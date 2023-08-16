import React from "react";
import ReactDOM from "react-dom";
import "../Styles/Modal.css";

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className="Modal-Background">
            {children}
        </div>,
        document.getElementById("modal")
    );
}
export { Modal };