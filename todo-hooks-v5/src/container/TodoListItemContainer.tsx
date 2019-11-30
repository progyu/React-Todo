import React from 'react';
import { connect } from 'react-redux';
import TodoListItem from '../components/TodoListItem';
import { Todo } from '../modules/todos';
import { toggle, remove } from '../modules/todos';

type Props = {
	todo: Todo,
	toggle(id: number): void,
	remove(id: number): void,
}

const TodoListItemContainer: React.SFC<Props> = (
	{ todo ,toggle, remove },
) => {
	return (
		<TodoListItem
      todo={todo}
			onToggle={toggle}
			onRemove={remove}
		/>
	);
};

const mapStateToProps = (state: any) => ({
	todos: state.todos.todos
});

const mapDispatchToProps = (dispatch: any) => ({
	toggle: (id: number) => {
		dispatch(toggle(id));
	},
	remove: (id: number) => {
		dispatch(remove(id));
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(TodoListItemContainer);
