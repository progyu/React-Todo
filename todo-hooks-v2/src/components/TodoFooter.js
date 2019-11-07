import React from 'react';
import TodoToggle from './TodoToggle';
import './TodoFooter.css';

const TodoFooter = ({ todos, onToggleAll, onClear }) => {
	const getCompleted = () => {
		return todos.filter(todo => todo.completed === true).length;
	};

	const getLefted = () => {
		return todos.filter(todo => todo.completed !== true).length;
	};

	return (
		<div className="footer">
			<div className="complete-all">
				<TodoToggle id="ck-complete-all" onChange={onToggleAll} />
				<label htmlFor="ck-complete-all">Mark all as complete</label>
			</div>
			<div className="clear-completed">
				<button className="btn" onClick={onClear}>
					Clear completed (
					<span className="completed-todos">{getCompleted()}</span>)
				</button>
				<strong className="active-todos">{getLefted()}</strong> items left
			</div>
		</div>
	);
};

export default React.memo(TodoFooter);
