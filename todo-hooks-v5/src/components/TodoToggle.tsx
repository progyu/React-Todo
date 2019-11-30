import React from 'react';
import './TodoToggle.scss';

type TodoToggleProps = {
	checked?: boolean;
	id: string;
	onChange(e: React.ChangeEvent<HTMLInputElement>): void;
};

const TodoToggle = (props: TodoToggleProps) => {
	return (
		<input
			id={props.id}
			className="custom-checkbox"
			type="checkbox"
			onChange={props.onChange}
			checked={props.checked}
		/>
	);
};

export default React.memo(TodoToggle);
