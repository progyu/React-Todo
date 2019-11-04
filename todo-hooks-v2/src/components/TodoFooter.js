import React, { memo } from 'react';
import './TodoFooter.css';

const TodoFooter = memo(({ todos, setTodos }) => {

  const allCheck = (e) => {
    setTodos(todos.map(todo=> ({...todo, completed: e.target.checked})));
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => todo.completed !== true ));
  }

  const getCompleted = () => {
    return todos.filter(todo => todo.completed === true).length;
  };

  const getLefted = () => {
    return todos.filter(todo => todo.completed !== true).length;
  };

  return(
    <div className="footer">
      <div className="complete-all">
        <input className="custom-checkbox" type="checkbox" id="ck-complete-all" onChange={allCheck} />
        <label htmlFor="ck-complete-all">Mark all as complete</label>
      </div>
      <div className="clear-completed">
        <button className="btn" onClick={clearCompleted}>Clear completed (<span className="completed-todos">{getCompleted()}</span>)</button>
        <strong className="active-todos">{getLefted()}</strong> items left
      </div>
    </div>
  );
});

export default TodoFooter;