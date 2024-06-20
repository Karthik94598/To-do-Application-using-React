import React from 'react';
import './todo.css';

function Todo({ todolist, deleteHandler, completeHandler }) {
  return (
    <div >
      {todolist.map((todoItem, index) => (
        <div key={index}>
          <h3 style={{ textDecoration: todoItem.completed ? 'line-through' : 'none' }}>{todoItem.text}</h3>
          <button onClick={() => completeHandler(index)} className='com'>Completed</button> &nbsp;  &nbsp; 
          <button onClick={() => deleteHandler(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Todo;
