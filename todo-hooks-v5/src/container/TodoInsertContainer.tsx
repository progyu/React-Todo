import React from 'react';
import { connect } from 'react-redux';
import TodoInsert from '../components/TodoInsert';
import { Todo } from '../modules/todos';
import { create } from '../modules/todos';

const TodoInsertContainer = (
	{ create }: any,
) => {
	return (
		<TodoInsert
			onCreate={create}
		/>
	);
};

const mapStateToProps = (state: any) => ({
	todos: state.todos.todos
});

const mapDispatchToProps = (dispatch: any) => ({
	create: (content: string) => {
		dispatch(create(content));
	},
})

export default connect(
  mapStateToProps,
	mapDispatchToProps,
)(TodoInsertContainer);
