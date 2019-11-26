import React from 'react';
import TodoNavItem from './TodoNavItem';
import { NavState } from '../contexts/context';
import './TodoNav.scss';

const TodoNav = () => {
	const navItems: NavState[] = ['All', 'Active', 'Completed'];

	return (
		<ul className="nav">
			{navItems.map(navItem => (
				<TodoNavItem key={navItem} navItem={navItem} />
			))}
		</ul>
	);
};

export default React.memo(TodoNav);
