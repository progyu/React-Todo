import React from 'react';
import TodoToggle from './TodoToggle';
import './TodoListItem.css';

const TodoListItem = ({ todo, onToggle, onRemove }) => {
	const { id, content, completed } = todo;

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
