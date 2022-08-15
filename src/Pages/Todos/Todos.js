import React from 'react';
import useTodo from '../../hooks/useTodo';
import Todo from '../Todo/Todo';
import './Todos.css'

const Todos = () => {
    const [todos] = useTodo();

    return (
        <div className="todosContainer">
            {
                todos.map(todo => <Todo key={todo._id} todo={todo}></Todo>)
            }
        </div>
    );
};

export default Todos;