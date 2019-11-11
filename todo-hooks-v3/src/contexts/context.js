import React, { createContext, useState } from 'react';

function createBulkTodos() {
	const array = [];
	for (let i = 0; i < 2000; i++) {
		const todo = {
			id: i,
			content: `todo ${i}`,
			completed: false,
		};
		array.push(todo);
	}
	return array;
}

const Context = createContext({
	state: { navState: 'All', todos: createBulkTodos },
	actions: {
		setNavState: () => {},
		setTodos: () => {},
	},
});

const Provider = ({ children }) => {
	const [navState, setNavState] = useState('All');
	const [todos, setTodos] = useState(createBulkTodos);

	const value = {
		state: { navState, todos },
		actions: { setNavState, setTodos },
	};

	return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };
