import React, { Component } from 'react';
import TodoNavItem from './TodoNavItem';
import './TodoNav.css';

class TodoNav extends Component {
	render() {
		const { navState, onchageNav } = this.props;
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
	}
}

export default TodoNav;
