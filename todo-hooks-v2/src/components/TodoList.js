import React, { useCallback } from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, navState, onToggle, onRemove }) => {
	const filterTodoList = useCallback(() => {
		return todos.filter(todo => {
			if (navState === 'Active') return !todo.completed;
			if (navState === 'Completed') return todo.completed;
			return true;
		});
	}, [todos, navState]);

	return (
		<ul className="todos">
			{filterTodoList().map(todo => (
				<TodoListItem
					key={todo.id}
					todo={todo}
					onToggle={onToggle}
					onRemove={onRemove}
				/>
			))}
		</ul>
	);
};

export default React.memo(TodoList);
