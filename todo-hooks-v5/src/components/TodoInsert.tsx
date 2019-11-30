import React, { useState, useCallback } from 'react';
import './TodoInsert.scss';

const TodoInsert = ({ onCreate }: any) => {
	const [value, setValue] = useState('');

	const onChangeInput = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>): void => {
			setValue(e.target.value);
		},
		[],
	);

	const onSubmitForm = useCallback(
		(e: React.FormEvent): void => {
			e.preventDefault();
			if (!value.trim()) return;
			onCreate(value);
			setValue('');
		},
		[onCreate, value],
	);

	return (
		<form onSubmit={onSubmitForm}>
			<input
				className="input-todo"
				placeholder="What needs to be done?"
				value={value}
				onChange={onChangeInput}
				autoFocus
			/>
		</form>
	);
};

export default React.memo(TodoInsert);
