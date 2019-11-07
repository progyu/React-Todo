import React, { useCallback } from 'react';
import TodoToggle from './TodoToggle';
import './TodoFooter.css';

const TodoFooter = ({ todos, onToggleAll, onClear }) => {
	const getCompleted = useCallback(() => {
		return todos.filter(todo => todo.completed === true).length;
	}, [todos]);

	const getLefted = useCallback(() => {
		return todos.filter(todo => todo.completed !== true).length;
	}, [todos]);

	return (
		<div className="footer">
			<div className="complete-all">
				<TodoToggle
					id="ck-complete-all"
					onChange={e => onToggleAll(e.target.checked)}
				/>
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
