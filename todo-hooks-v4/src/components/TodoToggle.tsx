import React from 'react';
import './TodoToggle.scss';

type Prp = {
	checked?: boolean;
	id: string;
	onChange: any;
};

const TodoToggle = (props: Prp) => {
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
