import React, { useCallback } from 'react';
import TodoToggle from './TodoToggle';
import './TodoListItem.scss';
import { Todo } from '../modules/todos';

type Props = {
	todo: Todo;
	onToggle(id: number): void;
	onRemove(id: number): void;
};

const TodoListItem = ({ todo, onToggle, onRemove }: Props) => {
	const { id, content, completed } = todo;

	return (
		<li id={`${id}`} className="todo-item">
			<TodoToggle
				id={`ck-${id}`}
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
