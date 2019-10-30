import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoNav from './TodoNav';
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

          <form onSubmit={onSubmitForm}>
            <input className="input-todo" placeholder="What needs to be done?" onChange={onChangeInput} value={value} autoFocus />
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
    );
 }
}

export default TodoTemplate;