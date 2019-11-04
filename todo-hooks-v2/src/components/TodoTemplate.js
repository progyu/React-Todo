import React, { useState, useRef } from 'react';

import TodoList from './TodoList';
import TodoNav from './TodoNav';
import TodoInput from './TodoInput';
import TodoFooter from './TodoFooter';

import './TodoTemplate.css';

const TodoTemplate = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');
  
  const [navState, setNavState] = useState('all');
  
  const navs = [
    {id: 'all', value: 'All' },
    {id: 'active', value: 'Active' },
    {id: 'completed', value: 'Completed' },
  ];

  return (
    <>
      <div className="container">
        <h1 className="title">Todos</h1>
        <div className="ver">1.0</div>
        <TodoInput todos={todos} setTodos={setTodos} value={value} setValue={setValue}/>
        <TodoNav navState={navState} setNavState={setNavState} navs={navs} />
        <TodoList todos={todos} setTodos={setTodos}  navState={navState}/>
        <TodoFooter todos={todos} setTodos={setTodos} />
      </div>
    </>
  )
}

export default TodoTemplate;