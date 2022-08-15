import { useEffect, useState } from 'react';

const useTodo = () => {
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        const url = `https://stark-crag-91352.herokuapp.com/todos`
        fetch(url)
        .then(res => res.json())
        .then(data =>setTodos(data))
    },[])

    return [todos, setTodos]
};

export default useTodo;