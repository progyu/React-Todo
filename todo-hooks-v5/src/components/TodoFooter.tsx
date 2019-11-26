import React, { useCallback, useContext } from 'react';
import TodoToggle from './TodoToggle';
import { useTodosState, useTodosDispatch } from '../contexts/context';
import './TodoFooter.scss';

const TodoFooter = () => {
	const todos = useTodosState();
	const dispatch = useTodosDispatch();

	const getCompleted = useCallback((): number => {
		return todos.filter(todo => todo.completed === true).length;
	}, [todos]);

	const getLefted = useCallback((): number => {
		return todos.filter(todo => todo.completed !== true).length;
	}, [todos]);

	const onToggleAll = useCallback(
		(completed: boolean) => {
			dispatch({
				type: 'TOGGLEALL',
				completed,
			});
		},
		[dispatch],
	);

	const onClear = useCallback(() => {
		dispatch({
			type: 'REMOVEALL',
			completed: true,
		});
	}, [dispatch]);

	return (
		<div className="footer">
			<div className="complete-all">
				<TodoToggle
					id="ck-complete-all"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						onToggleAll(e.target.checked)
					}
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
