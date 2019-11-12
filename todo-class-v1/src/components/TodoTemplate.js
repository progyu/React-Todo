import React, { Component } from 'react';
import './TodoTemplate.css';

class TodoTemplate extends Component {
	state = {
		todos: [],
		value: '',
		navState: 'All',
	};

	navs = ['All', 'Active', 'Completed'];

	getId = () => {
		const { todos } = this.state;
		return todos.length ? Math.max(...todos.map(({ id }) => id)) + 1 : 1;
	};

	delTodo = e => {
		const { todos } = this.state;
		if (!e.target.classList.contains('remove-todo')) return;
		this.setState({
			todos: todos.filter(todo => todo.id !== +e.target.parentNode.id),
		});
	};

	changeCheck = e => {
		const { todos } = this.state;
		this.setState({
			todos: todos.map(todo =>
				todo.id === +e.target.parentNode.id
					? { ...todo, completed: !todo.completed }
					: todo,
			),
		});
	};

	allCheck = e => {
		const { todos } = this.state;
		this.setState({
			todos: todos.map(todo => ({ ...todo, completed: e.target.checked })),
		});
	};

	clearCompleted = () => {
		const { todos } = this.state;
		this.setState({ todos: todos.filter(todo => todo.completed !== true) });
	};

	onChangeInput = e => {
		this.setState({ value: e.target.value });
	};

	onSubmitForm = e => {
		const { todos, value } = this.state;
		e.preventDefault();
		if (!value.trim()) return;
		this.setState({
			todos: [...todos, { id: this.getId(), content: value, completed: false }],
		});
		this.setState({ value: '' });
	};

	getCompleted = () => {
		const { todos } = this.state;
		return todos.filter(todo => todo.completed === true).length;
	};

	getLefted = () => {
		const { todos } = this.state;
		return todos.filter(todo => todo.completed !== true).length;
	};

	onClickNav = e => {
		this.setState({ navState: e.target.id });
	};

	renderTodoList = () => {
		const { todos, navState } = this.state;
		return todos.filter(todo => {
			if (navState === 'Active') return !todo.completed;
			if (navState === 'Completed') return todo.completed;
			return true;
		});
	};

	render() {
		const {
			onSubmitForm,
			onChangeInput,
			changeCheck,
			onClickNav,
			delTodo,
			allCheck,
			clearCompleted,
			getCompleted,
			getLefted,
			renderTodoList,
			navs,
		} = this;
		const { value, navState } = this.state;
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
						{navs.map(nav => (
							<li
								key={nav}
								id={nav}
								className={navState === nav ? 'active' : null}
							>
								{nav}
							</li>
						))}
					</ul>

					<ul className="todos" onClick={delTodo}>
						{renderTodoList().map(todo => (
							<li key={todo.id} id={todo.id} className="todo-item">
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
						))}
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
	}
}

export default TodoTemplate;
