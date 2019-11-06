import React, { useState, useRef } from 'react';
import './TodoTemplate.css';

const TodoTemplate = () => {
	const [todos, setTodos] = useState([]);
	const [value, setValue] = useState('');

	const [navState, setNavState] = useState('all');

	const nextId = useRef(1);

	const navs = [
		{ id: 'all', value: 'All' },
		{ id: 'active', value: 'Active' },
		{ id: 'completed', value: 'Completed' },
	];

	const onChangeInput = e => {
		setValue(e.target.value);
	};

	const onSubmitForm = e => {
		e.preventDefault();
		if (!value.trim()) return;
		const todo = [
			...todos,
			{ id: nextId.current, content: value, completed: false },
		];
		setTodos(todo);
		nextId.current += 1;
		setValue('');
	};

	const onClickNav = e => {
		setNavState(e.target.id);
	};

	const changeCheck = e => {
		setTodos(
			todos.map(todo =>
				todo.id === +e.target.parentNode.id
					? { ...todo, completed: !todo.completed }
					: todo,
			),
		);
	};

	const delTodo = e => {
		if (!e.target.classList.contains('remove-todo')) return;
		setTodos(todos.filter(todo => todo.id !== +e.target.parentNode.id));
	};

	const allCheck = e => {
		setTodos(todos.map(todo => ({ ...todo, completed: e.target.checked })));
	};

	const clearCompleted = () => {
		setTodos(todos.filter(todo => todo.completed !== true));
	};

	const getCompleted = () => {
		return todos.filter(todo => todo.completed === true).length;
	};

	const getLefted = () => {
		return todos.filter(todo => todo.completed !== true).length;
	};

	const renderTodoList = () => {
		let filtered = [];

		filtered = todos.filter(({ completed }) =>
			navState === 'active' ? completed === false : completed === true,
		);

		return filtered.map(todo => (
			<li key={todo.id + todo.content} id={todo.id} className="todo-item">
				<input
					className="custom-checkbox"
					type="checkbox"
					id={`ck-${todo.id}`}
					onChange={changeCheck}
					checked={todo.completed}
				/>
				<label htmlFor={`ck-${todo.id}`}>{todo.content}</label>
				<i className="remove-todo far fa-times-circle"></i>
			</li>
		));
	};

	return (
		<>
			<div className="container">
				<h1 className="title">Todos</h1>
				<div className="ver">1.0</div>

				<form onSubmit={onSubmitForm}>
					<input
						className="input-todo"
						placeholder="What needs to be done?"
						onChange={onChangeInput}
						value={value}
						autoFocus
					/>
				</form>
				<ul className="nav" onClick={onClickNav}>
					{navs.map(nav => {
						return (
							<li
								key={nav.id}
								id={nav.id}
								className={navState === nav.id ? 'active' : null}
							>
								{nav.value}
							</li>
						);
					})}
				</ul>

				<ul className="todos" onClick={delTodo}>
					{navState === 'all'
						? todos.map(todo => (
								<li
									key={todo.id + todo.content}
									id={todo.id}
									className="todo-item"
								>
									<input
										className="custom-checkbox"
										type="checkbox"
										id={`ck-${todo.id}`}
										onChange={changeCheck}
										checked={todo.completed}
									/>
									<label htmlFor={`ck-${todo.id}`}>{todo.content}</label>
									<i className="remove-todo far fa-times-circle"></i>
								</li>
						  ))
						: renderTodoList()}
				</ul>
				<div className="footer">
					<div className="complete-all">
						<input
							className="custom-checkbox"
							type="checkbox"
							id="ck-complete-all"
							onChange={allCheck}
						/>
						<label htmlFor="ck-complete-all">Mark all as complete</label>
					</div>
					<div className="clear-completed">
						<button className="btn" onClick={clearCompleted}>
							Clear completed (
							<span className="completed-todos">{getCompleted()}</span>)
						</button>
						<strong className="active-todos">{getLefted()}</strong> items left
					</div>
				</div>
			</div>
		</>
	);
};

export default TodoTemplate;
