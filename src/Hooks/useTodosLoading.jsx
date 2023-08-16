import { useState, useEffect } from 'react';

function useTodosLoading() {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Simulando carga de datos
        setTimeout(() => {
            const fetchedItems = [
                <li></li>,
                <li></li>,
                <li></li>,
            ];
            setItems(fetchedItems);
            setLoading(false);
        },);
    }, []);

    return { loading, items };
}

export default useTodosLoading;