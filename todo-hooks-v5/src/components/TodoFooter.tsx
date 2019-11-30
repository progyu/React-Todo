import React, { useCallback } from 'react';
import TodoToggle from './TodoToggle';
import { Todo } from '../modules/todos';
import './TodoFooter.scss';

type Props = {
	todos: Todo[];
	onToggleAll(completed: boolean): void;
	onRemoveAll(): void;
};

const TodoFooter = ({ todos, onToggleAll, onRemoveAll }: Props) => {
	const getCompleted = useCallback((): number => {
		return todos.filter((todo: Todo) => todo.completed === true).length;
	}, [todos]);

	const getLefted = useCallback((): number => {
		return todos.filter((todo: Todo) => todo.completed !== true).length;
	}, [todos]);

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
				<button className="btn" onClick={onRemoveAll}>
					Clear completed (
					<span className="completed-todos">{getCompleted()}</span>)
				</button>
				<strong className="active-todos">{getLefted()}</strong> items left
			</div>
		</div>
	);
};

export default React.memo(TodoFooter);
