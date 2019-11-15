import React, { useCallback, useContext } from 'react';
import TodoToggle from './TodoToggle';
import { Context } from '../contexts/context';
import './TodoFooter.scss';

const TodoFooter = () => {
	const { state, actions } = useContext(Context);

	const getCompleted = useCallback(() => {
		return state.todos.filter(todo => todo.completed === true).length;
	}, [state.todos]);

	const getLefted = useCallback(() => {
		return state.todos.filter(todo => todo.completed !== true).length;
	}, [state.todos]);

	const onToggleAll = useCallback(
		check => {
			actions.setTodos(todos =>
				todos.map(todo => ({ ...todo, completed: check })),
			);
		},
		[actions],
	);

	const onClear = useCallback(() => {
		actions.setTodos(todos => todos.filter(todo => todo.completed !== true));
	}, [actions]);

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
