import React, { useState, useRef } from 'react';
import TodoList from './TodoList';
import TodoNav from './TodoNav';
import './TodoTemplate.css';

const TodoTemplate = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');
  
  const [navState, setNavState] = useState('all');
  
  const inputRef = useRef(null);
  
  const navs = [
    {id: 'all', value: 'All' },
    {id: 'active', value: 'Active' },
    {id: 'completed', value: 'Completed' },
  ];

  const getId = () => {
    return todos.length ? Math.max(...todos.map(({ id }) => id)) +1 : 1;
  };
  
  const delTodo = (e) => {
    if(!e.target.classList.contains('remove-todo')) return;
    setTodos(todos.filter(todo=> todo.id !== +e.target.parentNode.id ));
  };

  const changeCheck = (e) => {
    setTodos(todos.map(todo => todo.id === +e.target.parentNode.id ? ({...todo, completed: !todo.completed}) : todo ));
  };

  const allCheck = (e) => {
    setTodos(todos.map(todo=> ({...todo, completed: e.target.checked})));
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => todo.completed !== true ));
  }

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if(!(value.trim())) return;
    setTodos([...todos, { id: getId(), content: value, completed: false}])
    setValue('');
  };

  const getCompleted = () => {
    return todos.filter(todo => todo.completed === true).length;
  };

  const getLefted = () => {
    return todos.filter(todo => todo.completed !== true).length;
  };

  const onClickNav = (e) => {
    setNavState(e.target.id);
  };

  const renderTodoList= () => {
    let filtered = [];
    
    filtered = todos.filter(({ completed }) => navState === 'active' ? completed === false : completed === true);

    return filtered.map(todo => 
      <TodoList key={todo.id + todo.content} todoInfo={todo} changeHandler={changeCheck}/>
    )
  };

  return (
    <>
      <div className="container">
        <h1 className="title">Todos</h1>
        <div className="ver">1.0</div>

        <form onSubmit={onSubmitForm}>
          <input ref={inputRef} className="input-todo" placeholder="What needs to be done?" onChange={onChangeInput} value={value} autoFocus />
        </form>
        <ul className="nav" onClick={onClickNav}>
          {navs.map(nav => {
            return (
              <TodoNav key={nav.id} navId={nav.id}  navValue={nav.value} navState={navState} />
            );
          })}
        </ul>

        <ul className="todos" onClick={delTodo}>
          {navState === 'all' ? (todos.map(todo => 
            <TodoList key={todo.id + todo.content} todoInfo={todo} changeHandler={changeCheck}/>)) : (renderTodoList())}
        </ul>
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
      </div>
    </>
  )
}

export default TodoTemplate;