import React, { Component } from 'react';

import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoNav from './components/TodoNav';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

import './App.css';

function createBulkTodos() {
	let array = [];
	for (let i = 0; i < 100; i++) {
		const todo = {
			id: i,
			content: `todo ${i}`,
			completed: false,
		};
		array.push(todo);
	}
	return array;
}
class App extends Component {
	state = {
		todos: createBulkTodos(),
		navState: 'All',
	};

  generateId = () => {
    const { todos } = this.state;
    return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
  }

	onInsert = content => {
		const { todos } = this.state;
		const todo = {
			id: this.generateId(),
			content,
			completed: false,
		};
		this.setState({ todos: todos.concat(todo) });
	};

	onchageNav = nav => {
		this.setState({ navState: nav });
	};

	onToggle = id => {
		const { todos } = this.state;
		this.setState({
			todos: todos.map(todo =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo,
			),
		});
	};

	onRemove = id => {
		const { todos } = this.state;
		this.setState({ todos: todos.filter(todo => todo.id !== id) });
	};

	onToggleAll = check => {
		const { todos } = this.state;
		this.setState({
			todos: todos.map(todo => ({ ...todo, completed: check })),
		});
	};

	onClear = () => {
		const { todos } = this.state;
		this.setState({
			todos: todos.filter(todo => todo.completed !== true),
		});
	};

	render() {
		const {
			onInsert,
			onchageNav,
			onToggle,
			onRemove,
			onToggleAll,
			onClear,
		} = this;
		const { todos, navState } = this.state;

		return (
			<TodoTemplate>
				<TodoInsert onInsert={onInsert} />
				<TodoNav navState={navState} onchageNav={onchageNav} />
				<TodoList
					todos={todos}
					navState={navState}
					onToggle={onToggle}
					onRemove={onRemove}
				/>
				<TodoFooter todos={todos} onToggleAll={onToggleAll} onClear={onClear} />
			</TodoTemplate>
		);
	}
}

export default App;
