import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

import TodoInsert from '../components/TodoInsert';
import { RootState } from '../modules';
import { create, changeInput } from '../modules/todos';

type Props = {
	input: string;
	create(content: string): void;
	changeInput(input: string): void;
};

const TodoInsertContainer = ({ create, changeInput, input }: Props) => {
	return (
		<TodoInsert input={input} onCreate={create} onChangeInput={changeInput} />
	);
};

const mapStateToProps = (state: RootState) => ({
	// rootReducer...?
	todos: state.todos.todos,
	input: state.todos.input,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
	create: (content: string) => {
		dispatch(create(content));
	},
	changeInput: (input: string) => {
		dispatch(changeInput(input));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(TodoInsertContainer);
