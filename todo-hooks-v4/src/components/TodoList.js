import React, { useCallback, useContext } from 'react';
import TodoListItem from './TodoListItem';
import { Context } from '../contexts/context';

const TodoList = () => {
	const { state } = useContext(Context);

	const filterTodoList = useCallback(() => {
		return state.todos.filter(todo => {
			if (state.navState === 'Active') return !todo.completed;
			if (state.navState === 'Completed') return todo.completed;
			return true;
		});
	}, [state.todos, state.navState]);

	return (
		<ul className="todos">
			{filterTodoList().map(todo => (
				<TodoListItem key={todo.id} todo={todo} />
			))}
		</ul>
	);
};

export default React.memo(TodoList);
