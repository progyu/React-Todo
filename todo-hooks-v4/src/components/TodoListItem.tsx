import React, { useContext, useCallback } from 'react';
import TodoToggle from './TodoToggle';
import './TodoListItem.scss';
import { useTodosDispatch, Todo } from '../contexts/context';

type TodoListProps = {
	todo: Todo;
};

const TodoListItem = ({ todo }: TodoListProps) => {
	const dispatch = useTodosDispatch();
	const { id, content, completed } = todo;

	const onToggle = useCallback(
		(id: number) => {
			dispatch({
				type: 'TOGGLE',
				id,
			});
		},
		[dispatch],
	);

	const onRemove = useCallback(
		(id: number) => {
			dispatch({
				type: 'REMOVE',
				id,
			});
		},
		[dispatch],
	);

	return (
		<li id={`${id}`} className="todo-item">
			<TodoToggle
				id={`ck-${todo.id}`}
				onChange={() => onToggle(id)}
				checked={completed}
			/>
			<label htmlFor={`ck-${id}`}>{content}</label>
			<i
				className="remove-todo far fa-times-circle"
				onClick={() => onRemove(id)}
			></i>
		</li>
	);
};

export default React.memo(TodoListItem);
