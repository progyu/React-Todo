import React, { useState, useRef, useCallback, useContext } from 'react';
import { Context } from '../contexts/context';
import './TodoInsert.css';

const TodoInsert = () => {
	const [value, setValue] = useState('');
	const { actions } = useContext(Context);

	const nextId = useRef(2001);

	const onChangeInput = useCallback(e => {
		setValue(e.target.value);
	}, []);

	const onInsert = useCallback(
		content => {
			const todo = {
				id: nextId.current,
				content,
				completed: false,
			};
			actions.setTodos(todos => todos.concat(todo));
			nextId.current += 1;
		},
		[actions],
	);

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
