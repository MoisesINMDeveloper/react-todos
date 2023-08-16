import React from "react";
import useTodosLoading from "../Hooks/useTodosLoading";
import SkeletonLoader from "./SkeletonLoader"
import "../Styles/TodosLoading.css";

function TodosLoading() {
    const { loading, items } = useTodosLoading();
    return (
        <div>
            {loading ? (
                <>
                    {[...Array(items.lenght)].map((_, items) => (
                        <SkeletonLoader key={items} />
                    ))}
                </>
            ) : (
                <ul>
                    {items.map((_, item) => (
                        <li className="Loading-container" key={item}>
                            <span className="Loading-iconComplete"></span>
                            <span className="Loading-text"></span>
                            <span className="Loading-iconDelete"></span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
export { TodosLoading }