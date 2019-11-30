import React, { useCallback } from 'react';
import './TodoInsert.scss';

type Props = {
	input: string;
	onCreate(content: string): void;
	onChangeInput(input: string): void;
};

const TodoInsert = ({ input, onCreate, onChangeInput }: Props) => {
	const onSubmitForm = useCallback(
		(e: React.FormEvent): void => {
			e.preventDefault();
			onCreate(input);
		},
		[onCreate, input],
	);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => onChangeInput(e.target.value);

	return (
		<form onSubmit={onSubmitForm}>
			<input
				className="input-todo"
				placeholder="What needs to be done?"
				value={input}
				onChange={onChange}
				autoFocus
			/>
		</form>
	);
};

export default React.memo(TodoInsert);
