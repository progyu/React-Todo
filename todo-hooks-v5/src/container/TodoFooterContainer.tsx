import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

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

const mapStateToProps = (state: RootState) => ({
	todos: state.todos.todos,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
	toggleAll: (completed: boolean): void => {
		dispatch(toggleAll(completed));
	},
	removeAll: (): void => {
		dispatch(removeAll());
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(TodoFooterContainer);
