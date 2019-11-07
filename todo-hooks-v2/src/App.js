import React, { useState, useRef } from 'react';

import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoNav from './components/TodoNav';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

import './App.css';

const App = () => {
	const [todos, setTodos] = useState([]);
	const [navState, setNavState] = useState('All');

	const nextId = useRef(1);

	const onInsert = content => {
		const todo = {
			id: nextId.current,
			content,
			completed: false,
		};
		setTodos(todos.concat(todo));
		nextId.current += 1;
	};

	const onchageNav = navState => {
		setNavState(navState);
	};

	const onToggle = id => {
		setTodos(
			todos.map(todo =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo,
			),
		);
	};

	const onRemove = id => {
		setTodos(todos.filter(todo => todo.id !== id));
	};

	const onToggleAll = e => {
		setTodos(todos.map(todo => ({ ...todo, completed: e.target.checked })));
	};

	const onClear = () => {
		setTodos(todos.filter(todo => todo.completed !== true));
	};

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
};

export default App;
