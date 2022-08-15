import React from "react";
import './Todo.css'
import { TrashIcon } from '@heroicons/react/solid'

const Todo = ({ todo }) => {
  const {_id, title, description } = todo;


  const deleteTodo = id =>{
    const proceed = window.confirm('Are You Sure?');
    if(proceed){
      const url = `https://stark-crag-91352.herokuapp.com/todos/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        
        window.location.reload();
      })
    }
  }

  return (
    <div>
      <div className="todoContainer">
        <div>
          <h2 className="todoInfo">{title}</h2>
          <p className="todoInfo">{description}</p>
        </div>
        <div>
            <TrashIcon onClick={() => deleteTodo(_id)}  className="icon"></TrashIcon>
        </div>
      </div>
    </div>
  );
};

export default Todo;
