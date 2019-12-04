import React from 'react';
import { connect } from 'react-redux';

import TodoListItem from '../components/TodoListItem';
import { RootState } from '../modules';
import { Todo, toggle, remove } from '../modules/todos';

type Props = {
	todo: Todo;
	toggle(id: number): void;
	remove(id: number): void;
};

const TodoListItemContainer = ({ todo, toggle, remove }: Props) => {
	return <TodoListItem todo={todo} onToggle={toggle} onRemove={remove} />;
};

export default connect(
	({ todos }: RootState) => ({
		todos: todos.todos,
	}),
	{
		toggle,
		remove,
	},
)(TodoListItemContainer);
