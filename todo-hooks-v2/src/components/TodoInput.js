import React, { memo } from 'react';
import './TodoInput.css';

const TodoInput = memo(({ onSubmitForm, onChangeInput, value }) => {

  return(
    <form onSubmit={onSubmitForm}>
      <input className="input-todo" placeholder="What needs to be done?" onChange={onChangeInput} value={value} autoFocus />
    </form>
  );
});

export default TodoInput;