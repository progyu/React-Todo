import React from 'react';
import './TodoTemplate.css';

const TodoTemplate = ({ children }) => {
	return (
		<div className="container">
			<h1 className="title">Todos</h1>
			<div className="ver">2.0</div>
			<div>{children}</div>
		</div>
	);
};

export default TodoTemplate;
