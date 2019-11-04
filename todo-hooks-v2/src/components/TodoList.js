import React, { memo } from 'react';
import './TodoList.css';

function list(todo,changeCheck) {
  return (
    <li key={todo.id} id={todo.id} className="todo-item">
      <input className="custom-checkbox" type="checkbox" id={`ck-${todo.id}`} onChange={changeCheck} checked={todo.completed} />
      <label htmlFor={`ck-${todo.id}`}>{todo.content}</label>
      <i className="remove-todo far fa-times-circle"></i>
    </li>
  )
};

const TodoList = memo( ({todos, setTodos, navState})  => {
  
  const changeCheck = (e) => {
    setTodos(todos.map(todo => todo.id === +e.target.parentNode.id ? ({...todo, completed: !todo.completed}) : todo ));
  };

  const delTodo = (e) => {
    if(!e.target.classList.contains('remove-todo')) return;
    setTodos(todos.filter(todo=> todo.id !== +e.target.parentNode.id ));
  };

  const renderTodoList= () => {
    let filtered = [];
    
    filtered = todos.filter(({ completed }) => navState === 'active' ? completed === false : completed === true);

    return filtered.map(todo => list(todo, changeCheck));
  };

  return (
    <ul className="todos" onClick={delTodo}>
      {navState === 'all' ? (todos.map(todo => list(todo, changeCheck))) : (renderTodoList())}
    </ul>
  )
});

export default TodoList;