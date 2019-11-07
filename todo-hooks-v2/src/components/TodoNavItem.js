import React from 'react';
import cn from 'classnames';
import './TodoNavItem.css';

const TodoNavItem = ({ navItem, navState, onchageNav }) => {
	return (
		<li
			id={navItem}
			className={cn({ active: navState === navItem })}
			onClick={() => onchageNav(navItem)}
		>
			{navItem}
		</li>
	);
};

export default TodoNavItem;
