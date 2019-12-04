import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

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

const mapStateToProps = (state: RootState) => ({
	todos: state.todos.todos,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
	toggle: (id: number) => {
		dispatch(toggle(id));
	},
	remove: (id: number) => {
		dispatch(remove(id));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(TodoListItemContainer);
