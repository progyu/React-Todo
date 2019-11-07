import React, { useState, useRef, useCallback } from 'react';

import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoNav from './components/TodoNav';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

import './App.css';

const App = () => {
	function createBulkTodos() {
		const array = [];
		for (let i = 0; i < 2000; i++) {
			const todo = {
				id: i,
				content: `todo ${i}`,
				completed: false,
			};
			array.push(todo);
		}
		return array;
	}

	const [todos, setTodos] = useState(createBulkTodos);
	const [navState, setNavState] = useState('All');

	const nextId = useRef(1001);

	const onInsert = useCallback(content => {
		const todo = {
			id: nextId.current,
			content,
			completed: false,
		};
		setTodos(todos => todos.concat(todo));
		nextId.current += 1;
	}, []);

	const onchageNav = useCallback(nav => {
		setNavState(navState => nav);
	}, []);

	const onToggle = useCallback(id => {
		setTodos(todos=>
			todos.map(todo =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo,
			),
		);
	},[]);

	const onRemove = useCallback(id => {
		setTodos(todos => todos.filter(todo => todo.id !== id));
	},[]);

	const onToggleAll = useCallback(check => {
		setTodos(todos => todos.map(todo => ({ ...todo, completed: check })));
	},[]);

	const onClear = useCallback(() => {
		setTodos(todos => todos.filter(todo => todo.completed !== true));
	},[]);

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
