import React from 'react';
import TodoForm from '../TodoForm/TodoForm';
import Todos from '../Todos/Todos';
import TodoTitle from '../TodoTitle/TodoTitle';
import './Home.css'

const Home = () => {
    return (
        <div className='homeContainer'>
            <TodoTitle></TodoTitle>
            <TodoForm></TodoForm>
            <Todos></Todos>
        </div>
    );
};

export default Home;