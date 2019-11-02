import React, { memo } from 'react';
import './TodoFooter.css';

const TodoFooter = memo(({ allCheck, clearCompleted, getCompleted, getLefted }) => {

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