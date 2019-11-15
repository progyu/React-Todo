import React, { useContext, useCallback } from 'react';
import TodoToggle from './TodoToggle';
import './TodoListItem.scss';
import { Context } from '../contexts/context';

const TodoListItem = ({ todo }) => {
	const { actions } = useContext(Context);
	const { id, content, completed } = todo;

	const onToggle = useCallback(
		id => {
			actions.setTodos(todos =>
				todos.map(todo =>
					todo.id === id ? { ...todo, completed: !todo.completed } : todo,
				),
			);
		},
		[actions],
	);

	const onRemove = useCallback(
		id => {
			actions.setTodos(todos => todos.filter(todo => todo.id !== id));
		},
		[actions],
	);

	return (
		<li id={id} className="todo-item">
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
