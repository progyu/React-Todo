import React, { useCallback } from 'react';
import TodoListItem from './TodoListItem';
import { useTodosState, useNavsState } from '../contexts/context';

const TodoList = () => {
	const todos = useTodosState();
	const navState = useNavsState();

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
				<TodoListItem key={todo.id} todo={todo} />
			))}
		</ul>
	);
};

export default React.memo(TodoList);
