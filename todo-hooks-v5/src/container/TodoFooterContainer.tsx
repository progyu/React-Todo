import React from 'react';
import { connect } from 'react-redux';

import TodoFooter from '../components/TodoFooter';
import { RootState } from '../modules';
import { Todo, toggleAll, removeAll } from '../modules/todos';

type Props = {
	todos: Todo[];
	toggleAll(completed: boolean): void;
	removeAll(): void;
};

const TodoFooterContainer = ({ todos, toggleAll, removeAll }: Props) => {
	return (
		<TodoFooter todos={todos} onToggleAll={toggleAll} onRemoveAll={removeAll} />
	);
};

export default connect(
	({ todos }: RootState) => ({
		todos: todos.todos,
	}),
	{
		toggleAll,
		removeAll,
	},
)(TodoFooterContainer);
