import { useState } from 'react';
import './App.css';
import Todo from './todo';

function App() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  const changeHandler = (e) => {
    setTask(e.target.value);
  }

  const deleteHandler = (indexValue) => {
    const newTodo = todo.filter((item, index) => index !== indexValue);
    setTodo(newTodo);
  }

  const delallHandler = () => {
      
    setTask("");
    setTodo([]);
    
  }

  const completeHandler = (indexValue) => {
    const newTodo = todo.map((item, index) => {
      if (index === indexValue) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodo(newTodo);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = [...todo, { text: task, completed: false }];
    setTodo(newTodo);
    setTask("");
  }

  return (
    <div className="App">
      <div>
        <h1>To-Do Application</h1>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="Add your task" value={task} onChange={changeHandler} /> &nbsp; &nbsp;
          <input className='add' type="submit" value="Add" /> &nbsp; &nbsp;
          <input className='del' onClick={ () => {delallHandler()}} type='button' value="Delete All" />
        </form>
        <Todo todolist={todo} deleteHandler={deleteHandler} completeHandler={completeHandler} />
      </div>
    </div>
  );
}

export default App;
