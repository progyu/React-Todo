import React from 'react';
import TodoNavItem from './TodoNavItem';
import './TodoNav.css';

const TodoNav = () => {
	const navItems = ['All', 'Active', 'Completed'];

	return (
		<ul className="nav">
			{navItems.map(navItem => (
				<TodoNavItem
					key={navItem}
					navItem={navItem}
				/>
			))}
		</ul>
	);
};

export default React.memo(TodoNav);
