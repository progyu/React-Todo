import React from 'react';
import { connect } from 'react-redux';

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

export default connect(
	({ todos }: RootState) => ({
		todos: todos.todos,
		input: todos.input,
	}),
	{
		create,
		changeInput,
	},
)(TodoInsertContainer);
