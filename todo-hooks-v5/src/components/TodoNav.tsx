import React from 'react';
import TodoNavItemContainer from '../container/TodoNavItemContainer';
import './TodoNav.scss';
import { Navs } from '../modules/navs';

const TodoNav = () => {
	const navItems: Navs[] = ['All', 'Active', 'Completed'];

	return (
		<ul className="nav">
			{navItems.map(navItem => (
				<TodoNavItemContainer key={navItem} navItem={navItem} />
			))}
		</ul>
	);
};

export default React.memo(TodoNav);
