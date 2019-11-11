import React from 'react';
import './TodoToggle.css';

const TodoToggle = props => {
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
