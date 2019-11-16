import React, { useState } from 'react';
import { useNavsState, useNavsDispatch, NavItem } from '../contexts/context';
import cn from 'classnames';
import './TodoNavItem.scss';

type NavItemProps = {
	navItem: NavItem;
};

const TodoNavItem = ({ navItem }: NavItemProps) => {
	const navs = useNavsState();
	const dispatch = useNavsDispatch();

	const onChangeNav = (navItem: string) => {
		dispatch({
			type: 'TAB',
			navItem,
		});
	};

	return (
		<li
			id={navItem}
			className={cn({ active: navs === navItem })}
			onClick={() => onChangeNav(navItem)}
		>
			{navItem}
		</li>
	);
};

export default React.memo(TodoNavItem);
