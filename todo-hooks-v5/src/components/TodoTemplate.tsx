import React from 'react';
import './TodoTemplate.scss';

const TodoTemplate = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="container">
			<h1 className="title">Todos</h1>
			<div className="ver">5.0</div>
			<div>{children}</div>
		</div>
	);
};

export default TodoTemplate;
