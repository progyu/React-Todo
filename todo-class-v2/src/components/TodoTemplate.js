import React, { Component } from 'react';

import TodoList from './TodoList';
import TodoNav from './TodoNav';
import TodoInput from './TodoInput';
import TodoFooter from './TodoFooter';

import './TodoTemplate.css';

class TodoTemplate extends Component {
  state = {
    todos: [],
    value: '',
    navState: 'all',
    navs : [
      {id: 'all', value: 'All' },
      {id: 'active', value: 'Active' },
      {id: 'completed', value: 'Completed' },
    ]
  };

  getId = () => {
    const { todos } = this.state;
    return todos.length ? Math.max(...todos.map(({ id }) => id)) +1 : 1;
  };
  
  delTodo = (e) => {
    const { todos } = this.state;
    if(!e.target.classList.contains('remove-todo')) return;
    this.setState({todos: todos.filter(todo=> todo.id !== +e.target.parentNode.id)});
  };

  changeCheck = (e) => {
    const { todos } = this.state;
    this.setState({todos: todos.map(todo => todo.id === +e.target.parentNode.id ? ({...todo, completed: !todo.completed}) : todo)});
  };

  allCheck = (e) => {
    const { todos } = this.state;
    this.setState({todos: todos.map(todo=> ({...todo, completed: e.target.checked}))});
  };

  clearCompleted = () => {
    const { todos } = this.state;
    this.setState({todos: todos.filter(todo=>todo.completed !== true)});
  };

  onChangeInput = (e) => {
    const { value } = this.state;
    this.setState({value: e.target.value});
  };

  onSubmitForm = (e) => {
    const { todos , value } = this.state;
    e.preventDefault();
    if(!(value.trim())) return;
    this.setState({todos: [...todos, { id: this.getId(), content: value, completed: false}]});
    this.setState({value: ''});
  };

  getCompleted = () => {
    const { todos } = this.state;
    return todos.filter(todo => todo.completed === true).length;
  };

  getLefted = () => {
    const { todos } = this.state;
    return todos.filter(todo => todo.completed !== true).length;
  };

  onClickNav = (e) => {
    const { navState } = this.state;
    this.setState({navState: e.target.id});
  };

  renderTodoList= () => {
    const { todos, navState } = this.state;
    let filtered = [];
    
    filtered = todos.filter(({ completed }) => navState === 'active' ? completed === false : completed === true);

    return filtered.map(todo => 
      <TodoList key={todo.id + todo.content} todoInfo={todo} changeHandler={this.changeCheck}/>
    )
  };

  render() {
    const {onSubmitForm, onChangeInput, changeCheck, onClickNav, delTodo, allCheck, clearCompleted, getCompleted, getLefted, renderTodoList} = this;
    const { todos, value, navState, navs } = this.state;
    
    return (
      <>
        <div className="container">
          <h1 className="title">Todos</h1>
          <div className="ver">1.0</div>
          <TodoInput onSubmitForm={onSubmitForm} onChangeInput={onChangeInput} value={value} />
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
          <TodoFooter allCheck={allCheck} clearCompleted={clearCompleted}  getCompleted={getCompleted} getLefted={getLefted} />
        </div>
      </>
    );
 }
}

export default TodoTemplate;