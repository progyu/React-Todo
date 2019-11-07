import React from 'react';
import TodoNavItem from './TodoNavItem';
import './TodoNav.css';

const TodoNav = ({ navState, onchageNav }) => {
	const navItems = ['All', 'Active', 'Completed'];

	return (
		<ul className="nav">
			{navItems.map(navItem => (
				<TodoNavItem
					key={navItem}
					navItem={navItem}
					navState={navState}
					onchageNav={onchageNav}
				/>
			))}
		</ul>
	);
};

export default TodoNav;
