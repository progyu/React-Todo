import React, { memo } from 'react';
import './TodoInput.css';

const TodoInput = memo(({ todos, setTodos, value, setValue }) => {

  const getId = () => {
    return todos.length ? Math.max(...todos.map(({ id }) => id)) +1 : 1;
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if(!(value.trim())) return;
    setTodos([...todos, { id: getId(), content: value, completed: false}])
    setValue('');
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return(
    <form onSubmit={onSubmitForm}>
      <input className="input-todo" placeholder="What needs to be done?" onChange={onChangeInput} value={value} autoFocus />
    </form>
  );
});

export default TodoInput;