import React, { Component } from 'react';
import cn from 'classnames';
import './TodoNavItem.css';

class TodoNavItem extends Component {
	render() {
		const { navItem, navState, onchageNav } = this.props;

		return (
			<li
				id={navItem}
				className={cn({ active: navState === navItem })}
				onClick={() => onchageNav(navItem)}
			>
				{navItem}
			</li>
		);
	}
}

export default TodoNavItem;