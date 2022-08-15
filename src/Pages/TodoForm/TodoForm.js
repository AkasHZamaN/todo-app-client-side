import React from 'react';
import './TodoForm.css'
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';

const TodoForm = () => {
    const { register, handleSubmit } = useForm();


    const postTodos = (data,event) => {
        console.log(data);

        const url = `https://stark-crag-91352.herokuapp.com/todos`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);   
            window.location.reload();
        })

    }
    return (
        <div>
            <form className='todoFormContainer' onSubmit={handleSubmit(postTodos)}>
                <div className='sub-container'>
                    <label htmlFor="title">Title:</label>
                    <input className="textInput" type="text" name="title" id="title" placeholder="Type here" {...register("title", { required: true })}/>
                </div>
                <div className='sub-container'>
                    <label htmlFor="title">Description:</label>
                    <textarea className="textInput" type="text" name="description" id="description" placeholder="Type here" {...register("description", { required: true })}/>
                </div>
                <div className='btn'>
                    <input type="submit" value={"Add Todo"} />
                </div>
            </form>
            
        </div>
    );
};

export default TodoForm;