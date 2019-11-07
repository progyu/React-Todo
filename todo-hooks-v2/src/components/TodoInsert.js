import React, { useState, useCallback } from 'react';
import './TodoInsert.css';

const TodoInsert = ({ onInsert }) => {
	const [value, setValue] = useState('');

	const onChangeInput = useCallback(e => {
		setValue(e.target.value);
	}, []);

	const onSubmitForm = useCallback(
		e => {
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
