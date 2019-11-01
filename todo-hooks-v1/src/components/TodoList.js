import React, { memo } from 'react';
import './TodoList.css';

const TodoList = memo( ({todoInfo, changeHandler})  => {
    return (
      <li id={todoInfo.id} className="todo-item">
        <input className="custom-checkbox" type="checkbox" id={`ck-${todoInfo.id}`} onChange={changeHandler} checked={todoInfo.completed} />
        <label htmlFor={`ck-${todoInfo.id}`}>{todoInfo.content}</label>
        <i className="remove-todo far fa-times-circle"></i>
      </li>
    )
});

export default TodoList;