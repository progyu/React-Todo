import React from 'react';
import { connect } from 'react-redux';
import TodoInsert from '../components/TodoInsert';
import { create, changeInput } from '../modules/todos';

type Props = {
	input: string;
	create(content: string): void;
	changeInput(input: string): void;
}

const TodoInsertContainer = (
	{ create, changeInput, input }: Props,
) => {
	return (
		<TodoInsert
			input={input}
			onCreate={create}
			onChangeInput={changeInput}
		/>
	);
};

const mapStateToProps = (state: any) => ({
	// rootReducer...?
	todos: state.todos.todos,
	input: state.todos.input
});

const mapDispatchToProps = (dispatch: any) => ({
	create: (content: string) => {
		dispatch(create(content));
	},
	changeInput: (input: string) => {
		dispatch(changeInput(input));
	}
})

export default connect(
  mapStateToProps,
	mapDispatchToProps,
)(TodoInsertContainer);
