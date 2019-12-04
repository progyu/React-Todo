import React, { useCallback } from 'react';
import TodoListItemContainer from '../container/TodoListItemContainer';
import { Todo } from '../modules/todos';
import { Navs } from '../modules/navs';

type Props = {
	todos: Todo[];
	nav: Navs;
};

const TodoList = ({ todos, nav }: Props) => {
	const filterTodoList = useCallback((): Todo[] => {
		return todos.filter((todo: Todo) => {
			if (nav === 'Active') return !todo.completed;
			if (nav === 'Completed') return todo.completed;
			return true;
		});
	}, [todos, nav]);

	return (
		<ul className="todos">
			{filterTodoList().map((todo: Todo) => (
				<TodoListItemContainer key={todo.id} todo={todo} />
			))}
		</ul>
	);
};

export default React.memo(TodoList);
