import React, { useState, useRef, useCallback } from 'react';
import { useTodosDispatch } from '../contexts/context';
import './TodoInsert.scss';

const TodoInsert = () => {
	const [value, setValue] = useState('');
	const dispatch = useTodosDispatch();

	const onChangeInput = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>): void => {
			setValue(e.target.value);
		},
		[],
	);

	const onInsert = useCallback(
		(content: string) => {
			dispatch({
				type: 'CREATE',
				content,
			});
		},
		[dispatch],
	);

	const onSubmitForm = useCallback(
		(e: React.FormEvent): void => {
			e.preventDefault();
			if (!value.trim()) return;
			onInsert(value);
			setValue('');
		},
		[onInsert, value],
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
