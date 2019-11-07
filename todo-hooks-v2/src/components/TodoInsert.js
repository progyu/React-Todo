import React, { useState } from 'react';
import './TodoInsert.css';

const TodoInsert = ({ onInsert }) => {
	const [value, setValue] = useState('');

	const onChangeInput = e => {
		setValue(e.target.value);
	};

	const onSubmitForm = e => {
		onInsert(value);
		setValue('');
		e.preventDefault();
	};

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
