import React from 'react';
import { connect } from 'react-redux';
import TodoFooter from '../components/TodoFooter';
import { Todo } from '../modules/todos';
import { toggleAll, removeAll } from '../modules/todos';

type Props = {
	todos: Todo[];
	toggleAll(completed: boolean): void;
	removeAll(): void;
};

const TodoFooterContainer = ({
	todos,
	toggleAll,
	removeAll,
}: Props) => {
	return (
		<TodoFooter todos={todos} onToggleAll={toggleAll} onRemoveAll={removeAll} />
	);
};

const mapStateToProps = (state: any) => ({
	todos: state.todos.todos,
});

const mapDispatchToProps = (dispatch: any) => ({
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
