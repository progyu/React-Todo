import React, { useCallback } from 'react';
import TodoListItem from './TodoListItem';
import { useTodosState, useNavsState, Todo } from '../contexts/context';

const TodoList = () => {
	const todos = useTodosState();
	const navState = useNavsState();

	const filterTodoList = useCallback((): Todo[] => {
		return todos.filter((todo: Todo) => {
			if (navState === 'Active') return !todo.completed;
			if (navState === 'Completed') return todo.completed;
			return true;
		});
	}, [todos, navState]);

	return (
		<ul className="todos">
			{filterTodoList().map((todo: Todo) => (
				<TodoListItem key={todo.id} todo={todo} />
			))}
		</ul>
	);
};

export default React.memo(TodoList);
