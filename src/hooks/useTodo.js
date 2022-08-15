import { useEffect, useState } from 'react';

const useTodo = () => {
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        const url = `http://localhost:5000/todos`
        fetch(url)
        .then(res => res.json())
        .then(data =>setTodos(data))
    },[])

    return [todos, setTodos]
};

export default useTodo;